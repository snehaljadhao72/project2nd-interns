const InternModel = require("../Models/InternModels.js");



const intern = async function(req,res){
    try{
    let data = req.body;
    let createIntern = await InternModel.create(data);
    res.status(201).send({status:true, data: createIntern})
    }catch(err){

    }
    
}


module.exports = {
    intern
}