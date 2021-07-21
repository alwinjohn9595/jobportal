const express = require('express');

const cors = require('cors');
const { getMaxListeners } = require('process');

require("./db/connect")
const app = new express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());


admin = "admin@gmail.com";
password = "Aa@123456"



app.post("/admin/login", async(req,res)=>{



    
        if(admin ===req.body.email && password ===req.body.password ){
       
            res.status(201).json("user added");
           
        }else{
        res.status(409).json(message= "You are not admin");     
    }

       

     
   
})









app.listen(3000, function(){
    console.log('listening to port 3000');
});