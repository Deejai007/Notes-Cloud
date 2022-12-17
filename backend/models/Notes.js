const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    reqired: true,
  },
  description: {
    type: String,
    reqired: true,
  },
  tag: {
    type: String,
    // reqired: true,
    default: "General",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("notes", NoteSchema);
