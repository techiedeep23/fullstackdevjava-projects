const express = require('express');
const router = express.Router();

const {
    getMembers,
    addMember,
    getMemberByName
  } = require("../controllers/memberController");

router.route("/").get(getMembers);
router.route("/:name").get(getMemberByName);
router.route("/add").post(addMember);

module.exports = router;