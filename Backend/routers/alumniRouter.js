const express = require('express');
const alumni =express.Router();
const alumnidata = require('../model/alumnidata');

const jwt = require('jsonwebtoken');
rolealumni='$';


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


alumni.post("/login",async (req,res)=>{
    
    const emailalumni = req.body.email;
    console.log(emailalumni)
    const password = req.body.password;
    console.log(password)
    const udata = await alumnidata.findOne({ email: emailalumni})
     console.log(udata);
    

    if (udata == null) {
            return res.status(404).send("userdata not present");
        }
     if (udata.email === emailalumni && udata.password === password) {
        let payload = {subject: rolealumni,
                       state: udata.status}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({ token });
    }
    else {
        res.status(405).send("something Went Wrong Try Again");
    }

})


alumni.post('/signup', async  (req, res)=> {
    

    const user = req.body;
     console.log(user);

        const newUser = new alumnidata(user);
        try{
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error){
            res.status(409).json( error);     
        }

       
});


alumni.get('/:id',verifyToken,  async(req, res) => {
    
    const id = req.params.id;
    console.log('id')
     await alumnidata.findOne({"email":id})
      .then((alumni)=>{
          res.send(alumni);
      });
 })

 alumni.get('/update/:id', verifyToken, async(req, res) => {

    const id = req.params.id;
     await alumnidata.findOne({"email":id})
      .then((alumni)=>{
          res.send(alumni);
      });
 })

alumni.put('/update',verifyToken,async (req,res)=>{
    let user = await alumnidata.findById(req.body._id);
    
        user1 = req.body;
    
        console.log(user);
        const editUser = new alumnidata(user1);
    
        try{
            await alumnidata.updateOne({"_id": req.body._id}, editUser);
            res.status(201).json(editUser);
        } catch (error){
            res.status(409).json({ message: error.message});     
        }
    
})



alumni.get('',async (req,res)=>{
    
    alumnidata.find()
            .then(function (alumni) {
                res.send(alumni);
            });

})


alumni.put("/save",async(req,res)=>{
    
    let user = await alumnidata.findById(req.body._id);
    
    user1 = req.body;

    
    const editUser = new alumnidata(user1);

    try{
        await alumnidata.updateOne({"_id": req.body._id}, editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
    })



alumni.delete("/delete/:id", (req,res)=>{
     
    
    id = req.params.id
    alumnidata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.status(200);
    })
})  


module.exports=alumni;
