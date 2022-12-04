import React from 'react'
import Product from './Product';
import { data } from '../Data/data';

export default function Productlist(props) {

    const productlist = data
    
    return (
        <div style={{
            width:"1000px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "15px",
            border: "0px solid black",
            gap: "10px"

        }}>
            {productlist.map((item) =>
                <Product name={item.name} />
            )}
        </div>

    );
}