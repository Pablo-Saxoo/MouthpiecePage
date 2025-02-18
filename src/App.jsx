import { useState } from 'react'
import CreateArea from './CreateArea';
import Review from './Review';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



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