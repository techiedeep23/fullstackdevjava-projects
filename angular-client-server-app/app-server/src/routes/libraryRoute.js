const express = require('express');
const router = express.Router();

const {
    getBooks,
    addBook,
    getBookByName
  } = require("../controllers/libraryController");

router.route("/").get(getBooks);
router.route("/:name").get(getBookByName);
router.route("/add").post(addBook);

module.exports = router;