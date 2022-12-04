import React from 'react'
import Footer from './Footer';
import Header from './Header';
import NavScroll from './NavScroll';

import Productlist from './Productlist';
export default function Hompage() {
    return (
        <main className='App'>
            <header className="main-header"><NavScroll /> </header>
            <div>
                <Header />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Productlist />
                </div>
            </div>
            <footer><Footer /></footer>
        </main>
    );
}