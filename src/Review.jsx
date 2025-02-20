import React from "react"

export default function Review(props) {
    return(
        
        <div class="quote ">
            <p class="quoteBigPP QCenter">"Quote"</p>

            <div class="titleClasse">
                <h1 class="quoteHH">Title:</h1>
                <p class="titleName">{props.title}</p>
            </div>

            <div class="descriptionClasse">
                <h1 class="quoteSmallPP">Description:</h1>
                <p class="desctiptionName">{props.review}</p>
            </div>

        </div>

    )
}