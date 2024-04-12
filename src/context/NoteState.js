import { useState, useEffect } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    
    const initialState = storedNotes || [
        {
            "_id": "954856756784564356",
            "user": "78463566451839379",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-03T14:20:09.6682",
            "__v": 0,
        },
        {
            "_id": "95485675678456435672",
            "user": "7846356645183937926",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-03T14:20:09.6682",
            "__v": 0,
        }
    ];

    const [notes, setNotes] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    // Add a Note
    const addNote = (title, description, tag) => {
        const newNote = {
            _id: Date.now().toString(), // Generate a unique id
            title: title,
            description: description,
            tag: tag,
            date: new Date().toISOString(),
            __v: 0,
        };
        setNotes([...notes, newNote]);
    };

    // Delete a Note
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
    };

    // Edit a Note
    const editNote = (id, title, description, tag) => {
        const updatedNotes = notes.map((note) => {
            if (note._id === id) {
                return {
                    ...note,
                    title: title,
                    description: description,
                    tag: tag
                };
            }
            return note;
        });
        setNotes(updatedNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
