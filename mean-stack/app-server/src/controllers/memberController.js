const asyncHandler = require("express-async-handler");
const httpStatus = require('http-status-codes');
const MemberModel = require('../db/schemas/memberSchema');

const getMembers = asyncHandler(async(req,res) => {
    const members = await MemberModel.find();
    res.status(httpStatus.StatusCodes.OK).send(members)
}) ;

const getMemberByName = asyncHandler(async(req,res) => {

    console.log("params value is ",req.params.name);
   
    var membername = req.params.name;

    if(!membername){
        res.status(httpStatus.StatusCodes.BAD_REQUEST);
        console.log("inside if ");
        throw new Error("Invalid Request !");
    }
    const member = await MemberModel.find({ "name": {'$regex': membername}});

    if(!member) {
        res.status(httpStatus.StatusCodes.NOT_FOUND);

        throw new Error(" No member found");
    }
    res.status(httpStatus.StatusCodes.OK).send(member)
}) ;


const addMember = asyncHandler(async(req,res) => {
    console.log(req.body);
    const { name, email, role } = req.body;

    if (!name || !email || !role ) {
        res.status(httpStatus.StatusCodes.BAD_REQUEST);
        throw new Error("Invalid Request !");
      }
      const member = await MemberModel.create({
        name,
        email,
        role,
      });
    res.status(httpStatus.StatusCodes.CREATED).send("Member added")
}) ;

module.exports = {getMembers,addMember,getMemberByName};