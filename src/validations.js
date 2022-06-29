const CollegeModels = require("./Models/CollegeModels");
var validUrl = require('valid-url');
const URL = require("url").URL;

   

let re= /^[a-zA-Z\-]+$/;
let email = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
// let url = 





function x(data){
    if(!data || data==null ||data===undefined ||data.trim()==0) return false;
        return true

}
    let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    
  


const validator1 = async function (req,res,next){

let name = req.body.name;
if(!x(name) )  return res.status(400).send({status:false, message:"Please enter name"})
if(!name.match(re)) return res.status(400).send({status:false, message:"Please enter valid name"})
let usedname = await CollegeModels.findOne({name:name})
if(usedname) return res.status(400).send({status:false, message:"This name is already been used"})
 
let fullName = req.body.fullName;
if(!x(fullName)) return res.status(400).send({status:false, message:"Please enter fullName"})

let LogoLink = req.body.LogoLink;
if(!x(LogoLink)) return res.status(400).send({status:false, message:"Please enter LogoLink"})
if(! LogoLink.match(regex) )  return res.status(400).send({status:false, message:"Please enter valid LogoLink"})

next()
}

const validator2 = async function (req,res,next){
let name = req.body.name;
if(!x(name) )  return res.status(400).send({status:false, message:"Please enter name"});

let email = req.body.email;
if(!x(email) )  return res.status(400).send({status:false, message:"Please enter email"})
let usedemail = await CollegeModels.findOne({email:email})
if(usedemail) return res.status(400).send({status:false, message:"This emailId has already been used"})

let mobile = req.body.mobile;
if(!x(mobile) )  return res.status(400).send({status:false, message:"Please enter mobile"})
let usedmobile = await CollegeModels.findOne({mobile:mobile})
if(usedmobile) return res.status(400).send({status:false, message:"This mobile number has already been used"})
if(!/"^[0-9]{10}$"/.test(mobile)) return res.status(400).send({status:false, message:"Please Enter Valid Mobile Number"})

let collegeId = req.body.collegeId
if(!mongoose.Types.ObjectId.isValid(collegeId)) return res.status(400).send({status:false, message:"Please Enter Valid collegeId"})
let presentCollegeId = await CollegeModels.findOne({_id:collegeId})
if(!presentCollegeId) return res.status(400).send({status:false, message:"collegeId not exist"})

next();

}

module.exports = {validator1, validator2}