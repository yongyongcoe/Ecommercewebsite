import React, { useRef, useState } from "react"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import './Header.css'

export default function Header() {
    const pictures = [
        "https://img.freepik.com/premium-psd/flash-sale-discount-banner-template-promotion_501916-326.jpg?w=1060",
        "https://img.freepik.com/free-vector/flash-sale-background-with-discount_23-2148891129.jpg?w=996&t=st=1670074120~exp=1670074720~hmac=5cb6b18ed94afd92a629b82bbdefdd2464086f896922feb51802ad4468e590a4"
    ]

    return (
        <div className="header-slide">
        
            <Slide arrows={false} autoplay={true} canSwipe ={true} indicators={true}>
                {pictures.map((pic, idx) => (
                    <img
                        className="image"
                        src={pic}
                        key={idx} />
                ))}
            </Slide>
        </div>
    )
}