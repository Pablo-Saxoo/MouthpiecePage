import { useState } from 'react'
import React from 'react'

export default function Product(props) {

    let img_srcc;

    (props.available) ? img_srcc = "./assets/ava.png" : img_srcc = "./assets/nava.png" ;

    return(
        <div className='mouthProduct'>
            <h2>{props.name}</h2>
            <a href="../../../productExample.html"><img src={props.img_src} className='imgPress'/></a>
            <div className='priceAvCont'>
                <img src={img_srcc} className='imgAva'/>
                <p>{props.price} $</p>
            </div>
            <div className='buttonsShop'>
                <a className='buyButton'  href="">Buy now</a>
                <a className='buyButton'  href="">Add</a>
            </div>
        </div>
    )
}

