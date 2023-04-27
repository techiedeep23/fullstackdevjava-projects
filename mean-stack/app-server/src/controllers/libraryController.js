const asyncHandler = require("express-async-handler");
const BookModel = require('../db/schemas/bookSchema');

const getBooks = asyncHandler(async(req,res) => {
    const books = await BookModel.find();
    res.status(200).send(books)
}) ;

const getBookByName = asyncHandler(async(req,res) => {

    console.log("params value is ",req.params.name);
   
    var bookname = req.params.name;

    if(!bookname){
        res.status(400);
        console.log("inside if ");
        throw new Error("Invalid Request !");
    }
    const book = await BookModel.find({ "name": {'$regex': bookname}});

    if(!book) {
        res.status(404);

        throw new Error(" No book found");
    }
    res.status(200).send(book)
}) ;


const addBook = asyncHandler(async(req,res) => {
    console.log(req.body);
    const { name, author, domain } = req.body;

    if (!name || !author || !domain) {
        res.status(400);
        throw new Error("Invalid Request !");
      }
      const book = await BookModel.create({
        name,
        author,
        domain,
      });
    res.status(200).send("Book added")
}) ;

module.exports = {getBooks,addBook,getBookByName};