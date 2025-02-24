import { useState } from 'react'


export default function Product(props) {
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.img_src}/>
            <div>
                <img src={props.available}/>
                <p>{props.price}</p>
            </div>
            <div>
                <a className='buyButton'  href=""></a>
                <a className='addButton'  href=""></a>
            </div>
        </div>
    )
}


