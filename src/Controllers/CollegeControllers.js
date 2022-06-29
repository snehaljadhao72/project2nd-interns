const CollegeModel = require("../Models/CollegeModels.js");
const InternModel = require("../Models/InternModels.js");
// function startUpperCase (x){
// var re = /(\b[a-z](?!\s))/g; 
// let a = a.replace(re, function(x){return x.toUpperCase();})
// }
function startUpperCase (x){
const a = x.split(" ");
 for (var i = 0; i < a.length; i++) {
   a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
}
x = a.join(" ");
return x
}



const college = async function(req,res){
    let data = req.body;
    let CollegeName = data.fullName;
    data.fullName =  startUpperCase(CollegeName);
    let createCollege = await CollegeModel.create(data);
    res.status(201).send({status:true, data: createCollege})
    
}

// const getInternsByCollege = async function(req,res){
//     let obj = {};
//     let Name = req.query,collegeName
//     let getCollegeInfo = await CollegeModel.findOne(Name).select({name:1,fullName:1,LogoLink:1, _id:0})
//     let getCollegeId = await CollegeModel.findOne(Name).select({_id:1})
//     let getAllInterns = await InternModel.find({collegeId:getCollegeId})
//     // const {name,fullName}
//     // obj = {...getCollegeInfo}
//     obj=Object.assign({getCollegeInfo, getAllInterns})
//     // obj.interns = getAllInterns
//     res.status(200).send({status:true, data: obj})

// }
let getDetails = async function(req,res){
    let collegeName=req.query.collegeName
    if(!collegeName){return res.status(400).send({status : false, msg : "collgeName is required"})}
    collegeName = collegeName.trim()
    collegeName = collegeName.toLowerCase()
    let findName = await CollegeModel.findOne({name : collegeName})
    console.log(findName)
    let id= findName._id.toString()
    let findIntern = await InternModel.find({collegeId : id}).select({name:1,email:1,mobile:1})
    if(!findIntern.length>0){return res.status(400).send({status : false, msg : "No data found"})   }
    let newData = {
        name : collegeName,
        fullName : findName.fullName,
        LogoLink : findName.LogoLink,
        interns : findIntern
    }

    return res.status(200).send({status : true, data : newData})

}

module.exports = {
    college ,
    getDetails
}