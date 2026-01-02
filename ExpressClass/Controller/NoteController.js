import Note from  '../Models/Notes.js';

const getNotes = async (req, res) => {
    const getid = req.query.id;
    if(getid >= 0){
        const viewNotes = await Note.findById(getid);
        res.send(viewNotes);
        }else{
            const notes = await Note.find();
        res.send(notes);
    }
};

const addNotes = async (req, res) => {
    const note = req.body;
    const addedNote = await Note.create(note);
    res.status(201).send({message: `Note Created. ${addedNote}`})
};

const updateNotes = async (req, res) => {
    const updateID = req.params.id;
    const data = req.body;
    const updatedNote = await Note.findByIdAndUpdate(updateID, data, {new: true});
    res.status(200).send({message: `Updated Successfully. Note: ${updatedNote}`})

};

const deleteNotes = async (req, res) =>{
    const deleteID = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(deleteID);
    res.status(200).send({message: `Deleted Successfully. Note: ${deletedNote}`})
};

export {getNotes, addNotes, updateNotes, deleteNotes}