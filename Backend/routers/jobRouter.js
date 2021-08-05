const express = require('express');
const job =express.Router();
const ApplyJobdata=require('../model/ApplyJobData')
const jobdata = require('../model/jobdata');




job.post("/applyjob",async(req,res)=>{
    const user = req.body;
    
    
    const newUser = new ApplyJobdata(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
})

job.post("/loggedin",async (req,res)=>{
    const user = req.body.email;
    ApplyJobdata.find({Uemail:user})
    .then(function(datas){
        res.send(datas);
    
    })
})

job.post('/postjob',async(req,res)=>{

    

    const user = req.body;
    
    
    const newUser = new jobdata(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
    
    })


    job.delete('/deletejobpost/:id',(req,res)=>{

        id = req.params.id;
    jobdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        
    })
    
    
    ApplyJobdata.findOneAndDelete({"job_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
    
    })    




    job.delete('/deleteapplicant/:id',(req,res)=>{

        id = req.params.id;
        console.log(id)
        ApplyJobdata.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
        })




        job.get("/applicant/:id",async(req,res)=>{



            const user = req.params.id;
            
            
            ApplyJobdata.find({job_id:user})
            .then(function (alumni) {
            
            
            res.send(alumni);
            });
            
            
            })        




        

job.post("/appverify/",async(req,res)=>{
  
    console.log(req.body);

    
     let user = await ApplyJobdata.findById(req.body._id);
    alumni = req.body;
     
    const editUser = new ApplyJobdata(alumni);
    
     try{
        await ApplyJobdata.updateOne({_id: req.body._id},editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }

})   





job.get("/getempjobs/:id",(req,res)=>{
    const empemail =req.params.id
    
    jobdata.find({email:empemail}).then((data)=>{
        res.send(data)
    })
    
});
module.exports=job;