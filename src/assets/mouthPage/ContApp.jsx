import { useState } from 'react'
import ReactDOM from 'react-dom'
import data from '../../../data'
import Product from './Product';


function createProduct(params) {
    return (<Product 
    key = {params.id}
    name = {params.name}
    img_src = {params.img_src}
    price = {params.price}
    available = {params.available}
    />)
}

export default function ContApp() {

    return (
        data.map(createProduct)
    );
};