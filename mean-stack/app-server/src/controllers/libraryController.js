const asyncHandler = require("express-async-handler");
const httpStatus = require('http-status-codes');
const BookModel = require('../db/schemas/bookSchema');

const getBooks = asyncHandler(async(req,res) => {
    const books = await BookModel.find();
    res.status(httpStatus.StatusCodes.OK).send(books)
}) ;

const getBookByName = asyncHandler(async(req,res) => {

    console.log("params value is ",req.params.name);
   
    var bookname = req.params.name;

    if(!bookname){
        res.status(httpStatus.StatusCodes.BAD_REQUEST);
        console.log("inside if ");
        throw new Error("Invalid Request !");
    }
    const book = await BookModel.find({ "name": {'$regex': bookname}});

    if(!book) {
        res.status(httpStatus.StatusCodes.NOT_FOUND);

        throw new Error(" No book found");
    }
    res.status(httpStatus.StatusCodes.OK).send(book)
}) ;


const addBook = asyncHandler(async(req,res) => {
    console.log(req.body);
    const { name, author, domain } = req.body;

    if (!name || !author || !domain) {
        res.status(httpStatus.StatusCodes.BAD_REQUEST);
        throw new Error("Invalid Request !");
      }
      const book = await BookModel.create({
        name,
        author,
        domain,
      });
    res.status(httpStatus.StatusCodes.CREATED).send("Book added")
}) ;

module.exports = {getBooks,addBook,getBookByName};