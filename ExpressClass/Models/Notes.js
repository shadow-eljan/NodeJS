import mongoose from  "mongoose"

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    content: {
        type: String,
        required: true,
        minlength: 3,
    },
});

const Note = mongoose.model("note", noteSchema);

export default Note;