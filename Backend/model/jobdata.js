const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const JobSchema = new Schema ({
    uname: String,
  email: String,
  password: String,
  hq: String,
  city: String
    
});



var Jobdata = mongoose.model('jobdata', JobSchema);



module.exports = Jobdata;