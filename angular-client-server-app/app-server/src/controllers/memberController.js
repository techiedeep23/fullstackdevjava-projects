const asyncHandler = require("express-async-handler");
const MemberModel = require('../db/schemas/memberSchema');

const getMembers = asyncHandler(async(req,res) => {
    const members = await MemberModel.find();
    res.status(200).send(members)
}) ;

const getMemberByName = asyncHandler(async(req,res) => {

    console.log("params value is ",req.params.name);
   
    var membername = req.params.name;

    if(!membername){
        res.status(400);
        console.log("inside if ");
        throw new Error("Invalid Request !");
    }
    const member = await MemberModel.find({ "name": {'$regex': membername}});

    if(!member) {
        res.status(404);

        throw new Error(" No member found");
    }
    res.status(200).send(member)
}) ;


const addMember = asyncHandler(async(req,res) => {
    console.log(req.body);
    const { name, email, role } = req.body;

    if (!name || !email || !role ) {
        res.status(400);
        throw new Error("Invalid Request !");
      }
      const member = await MemberModel.create({
        name,
        email,
        role,
      });
    res.status(200).send("Member added")
}) ;

module.exports = {getMembers,addMember,getMemberByName};