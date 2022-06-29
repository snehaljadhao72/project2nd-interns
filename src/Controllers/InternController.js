const InternModel = require("../Models/InternModels.js");



const intern = async function (req, res) {
    try {
        let data = req.body;

        let createIntern = await InternModel.create(data);
        // let newData = {
        //     name: createIntern.name,
        //     email: createIntern.email,
        //     mobile: createIntern.mobile,
        //     collegeId:{ ObjectId:createIntern.collegeId}.toString()
        // }
        res.status(201).send({ status: true, data: createIntern })
    } catch (err) {
        res.status(500).send({ error: err.message })
    }

}


module.exports = {
    intern
}