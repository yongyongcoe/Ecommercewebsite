import React from 'react'
import Footer from './Footer';
import Header from './Header';
import NavScroll from './NavScroll';
import Button from 'react-bootstrap/Button';
import { BsFillCartFill,BsShop,BsFillGiftFill ,BsCheckSquareFill} from "react-icons/bs";

import Productlist from './Productlist';
import Flashsale from './FlashSale';
export default function Hompage() {
    return (
        <main className='App'>
            <header className="main-header"><NavScroll /> </header>
            <div>
                <Header />
                <div
                    style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-around",
                        alignItems:"center",
                        padding:"25px",
                        marginBottom:"-10px"
                    }}>
                    <Button style={styles.btnTopmenu}><BsFillCartFill size={30}/>Shopping Malls</Button>
                    <Button style={styles.btnTopmenu}><BsFillGiftFill size={30}/>Vouchers</Button>
                    <Button style={styles.btnTopmenu}><BsCheckSquareFill size={30}/>Top-Up,Bills&Food</Button>
                    <Button style={styles.btnTopmenu}><BsShop size={30}/>Blog</Button>
                </div>
                <div className='flashsale'>
                    
                    <Flashsale/>

                </div>
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

const styles = {
    btnTopmenu: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#ffff",
        color:"#000",
        fontSize:"25px",
        borderBlockColor:"#000",
        borderColor:"#ffff",
        borderRadius: "25px",
        gap:"5px"
    },
  };