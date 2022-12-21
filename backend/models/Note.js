const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
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
