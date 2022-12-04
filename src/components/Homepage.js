import React from 'react'
import Footer from './Footer';
import Header from './Header';
import NavScroll from './NavScroll';

import Productlist from './Productlist';
export default function Hompage(){
    return(
        <div>
            <NavScroll/>
            <Header/>
            <Productlist/>
            <Footer/>
            
        </div>
    );
}