import express from "express";
import { getNotes , addNotes, updateNotes, deleteNotes} from "./Controller/NoteController.js";
import router from "./Routers/noteRoutes.js";
import logger from "./Logging/Logger.js";
import mongoose from "mongoose"

const app = express();

mongoose.connect("mongodb://localhost:27017/notesdb")
.then((conn) => console.log(`Connection successfull at ${conn.connection.host}`))
.catch((err) => console.log("Error connecting to db.", err.message))

app.use(express.json());

app.use(logger);
app.use("/api/notes", router)
 
app.listen(3000, ()=> console.log("Server is up and running."))