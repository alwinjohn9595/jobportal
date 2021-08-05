const express = require('express');

const cors = require('cors');

const Facultydata = require('./model/facultydata');
const jobdata = require('./model/jobdata');

require("./db/connect")
const app = new express();
const jwt = require('jsonwebtoken');

const employerdata=require ('./model/employerData')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const alumnirouter =require("./routers/alumniRouter");
const jobrouter =require("./routers/jobRouter");

app.use("/alumni",alumnirouter);

app.use("/jobs",verifyToken,jobrouter);

admin = "admin@gmail.com";
adminPwd = "Aa@123456"
roleadmin = "@";
rolefaculty="#";
roleemployer='$';




//token verification--------------------start
function verifyToken(req, res, next) {
  
    if(!req.headers.authorization) {
      
  
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }



//token verification--------------------ends

// -------------------------------SECTION FACULTY STARTS------------------------------------
app.get("/allfaculty",verifyToken,async(req,res)=>{

    
    Facultydata.find()
    .then(function(products){
        res.send(products);
    
    });
})


app.get("/faculty/:id",verifyToken,async(req,res)=>{

const id = req.params.id;
await Facultydata.findOne({"_id":id})
.then((data)=>{
    
    res.send(data);
});
}) 

// Faculty login

app.post("/faculty/login",async(req,res)=>{

const userrole= 0;
const email = req.body.email;
const password = req.body.password;
const udata = await Facultydata.findOne({email: email})



 if(email===admin && password===adminPwd){
    let payload = {subject: roleadmin}
    let token = jwt.sign(payload, 'secretKey')
    return  res.status(200).send({token});
}else if(udata==null){
    return res.status(404).send("userdata not present");
  }else
  if(udata.email===email && udata.password===password){
    let payload = {subject: email+rolefaculty}
    let token = jwt.sign(payload, 'secretKey')
     res.status(200).send({token});
  
}
else{
  res.status(405).send("something Went Wrong Try Again");
}
})

// Adding new faculty by admin

app.post("/faculty/add",verifyToken,async(req,res)=>{


const user = req.body;


const newUser = new Facultydata(user);
try{
    await newUser.save();
    res.status(201).json(newUser);
} catch (error){
    res.status(409).json({ message: error.message});     
}

})

// Faculty details updating

app.put("/faculty/update",verifyToken,async(req,res)=>{

let user = await Facultydata.findById(req.body._id);
user = req.body;

const editUser = new Facultydata(user);

try{
    await Facultydata.updateOne({_id: req.body._id}, editUser);
    res.status(201).json(editUser);
} catch (error){
    res.status(409).json({ message: error.message});     
}
})

// deleting faculty details

app.delete('/facultyremove/:id',verifyToken,(req,res)=>{

id = req.params.id;
Facultydata.findByIdAndDelete({"_id":id})
.then(()=>{
    console.log('success')
    res.send();
})
})
// -------------------------------SECTION FACULTY ENDS------------------------------------




//---------Employer section Starts------------------
//Posting Employer details into database
app.post("/postEmployer",function(req,res){
    console.log(req.body);
    var item={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        company:req.body.company,
        password:req.body.password,
        compdesc:req.body.compdesc
    }
    var employer= new employerdata(item);
    employer.save();;
    
})

//log in of employer

app.post("/loginemployer",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password 
    console.log(email);
    console.log(password);
    let udata= await employerdata.findOne({email:email})

    if(udata==null){
        console.log("null")
        return res.status(404).send("userdata does not present") 
    }else if(udata.email===email && udata.password===password){
        let payload = {subject: email+rolefaculty}
        let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
    }else{
        
        return res.status(401).send("Something went wrong..Try again")
    }
})

app.get("/getEmployer/:id",verifyToken,async(req,res)=>{
    const email=req.params.id;
    console.log(email)
    employerdata.findOne({"email":email})
    .then((singleEmployer)=>{
        res.send(singleEmployer)
    })
})

//-----------All Employer----------
app.get("/getAllEmployer",verifyToken,async(req,res)=>{
    employerdata.find()
    .then(function(employers){
        res.send(employers)
    })
})

//---------Employer section Ends------------------

// all jobs--------------------
app.get("/all", async (req,res)=>{

  
    jobdata.find()
    .then(function(datas){
        res.send(datas);
    
    })

})
app.listen(3000, function () {
    console.log('listening to port 3000');
});