import notes from '../Models/Notes.js';

const getNotes = (req, res) => {
    const getid = req.query.id;
    if(getid >= 0){
        const filternote = notes.filter((f)=> f.id == getid);
        res.send(filternote);
        }else{
        res.send(notes);
    }
};

const addNotes = (req, res) => {
    const note = req.body;
    notes.push({id: notes.length + 1, ...note});
    res.status(201).send({message: "Note created."})
};

const updateNotes = (req, res) => {
    const updateID = req.query.id;
    const index = notes.findIndex((f) => f.id == updateID);
    if(index >= 0){
        const note = req.body;
        notes[index].title = note.title ?? notes[index].title;
        notes[index].content =note.content ?? notes[index].content;
        res.status(200).send({ message: `id: ${updateID} updated successfully.` });
    }else{
        res.status(404).send({error: "Not found."})
    }
};

const deleteNotes = (req, res) =>{
    const deleteID = req.query.id;
    const index = notes.findIndex((f)=> f.id == deleteID);
    if(index >= 0){
        notes.splice(index,1);
        res.status(200).send({message: `id: ${deleteID} deleted successfully.`});
    }else{
        res.status(404).send({error: "Not found."})
    }
};

export {getNotes, addNotes, updateNotes, deleteNotes}