import React from "react"

export default function Review(props) {
    return(
        <div className="quote">
            <p className="quoteBigP">{"Quote"}</p>
            <h1 className="quoteH">Title: {props.title}</h1>
            <p className="quoteSmallP">Content: {props.review}</p>
        </div>
    )
}