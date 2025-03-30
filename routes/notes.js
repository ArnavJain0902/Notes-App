const express = require("express");
const router = express.Router()
const notesController = require("../controllers/notes")

router.get("/",notesController.getIndex)
router.post("/",notesController.postIndex)

router.post("/delete-note", notesController.postDeleteNote)

module.exports = router