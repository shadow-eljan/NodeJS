import mongoose from "mongoose";

const blogSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 3,
    },
    text: {
        type: String,
        required: true,
        minlength: 5,
    },
    isPublished:{
        type: Boolean,
        default: false,

    },
    likes: {
        type: Number,
        default: 0,
    },
});

const Blogs = mongoose.model("Blogs", blogSchema);

export default Blogs;