import express from 'express';
import { addNotes, deleteNotes, getNotes, updateNotes } from '../Controller/NoteController.js';
const router = express.Router();

router.get("/", getNotes)
router.post("/", addNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;