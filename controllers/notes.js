const Notes = require("../models/note");

exports.getIndex = async (req, res, next) => {
  try {
    const notes = await Notes.find();
    res.render("index.ejs", {
      notes: notes,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postIndex = async (req, res, next) => {
    try {
        const title = req.body.title;
        const description = req.body.description
        const note = new Notes({title:title,description:description})
        await note.save()
        res.redirect("/")
    } catch (err) {
      console.log(err);
    }
};


exports.postDeleteNote = async (req, res, next) => {
    try{
        const noteId = req.body.noteId;
        await Notes.findByIdAndDelete(noteId)
        res.redirect("/")
    } catch(err){
        console.log(err);
    }
}
