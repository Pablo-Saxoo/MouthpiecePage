import { useState } from 'react'
import ReactDOM from 'react-dom'
import CreateArea from './CreateArea';
import Review from './Review';
import { createRoot } from 'react-dom/client'


export default function App(params) {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    return (
        <div>
            <CreateArea onAdd={addNote}/>

            {notes.map((noteItem) => {
                return <Review 
                key={noteItem.id}
                title={noteItem.title}
                review={noteItem.review}
                />
            })}

        </div>
    );
};