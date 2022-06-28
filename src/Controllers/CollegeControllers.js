const CollegeModel = require("../models/collegemodel.js");
const InternModel = require("../models/internmodel.js");



const college = async function(req,res){
    let data = req.body;
    let createCollege = await CollegeModel.create(data);
    res.status(201).send({status:true, data: createCollege})
    
}

const getInternsByCollege = async function(req,res){
    let obj = {};
    let Name = req.query,collegeName
    let getCollegeInfo = await CollegeModel.findOne(Name).select({name:1,fullName:1,LogoLink:1, _id:0})
    let getCollegeId = await CollegeModel.findOne(Name).select({_id:1})
    let getAllInterns = await InternModel.find({collegeId:getCollegeId})
    // const {name,fullName}
    // obj = {...getCollegeInfo}
    obj=Object.assign({getCollegeInfo, getAllInterns})
    // obj.interns = getAllInterns
    res.status(200).send({status:true, data: obj})

}

module.exports = {
    college ,
    getInternsByCollege
}