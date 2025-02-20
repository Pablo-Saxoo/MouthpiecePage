import { useState } from "react";
import React from "react"

export default function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        review: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    };

    function submitReview(event) {
        props.onAdd(note);
        setNote({
            title: "",
            review: "",
        });
        event.preventDefault();
    }

    return(
        <div>
            <form action="">
                <p className="quoteBigP QCenter">"Write your review here"</p>
                <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="Title"/>
                <textarea  name="review"  onChange={handleChange} value={note.review} placeholder="Take a review..." rows={2}></textarea>
                <button onClick={submitReview}>Add</button>
            </form>
        </div>
    )
}