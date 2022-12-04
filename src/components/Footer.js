import React from 'react'

export default function Footer() {
    return (
        <div style={{
            height: "200px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#ffff"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
                marginLeft: "20px",
                gap: "5px",
                alignItems:"flex-start"
            }}>
            <p style={{fontSize:"12px",fontWeight:"bold",marginBottom:"-1px"}}> ศูนย์ดูแลลูกค้า</p>
            <a href="https://www.google.co.th/" >ศูนย์ช่วยเหลือ</a>
            <a href="https://www.google.co.th/">การสั่งซื้อสินค้า</a>
            <a href="https://www.google.co.th/">การชำระเงิน</a>
            <a href="https://www.google.co.th/">ติดต่อเจ้าหน้าที่</a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignIitems: "flex-start",
                marginTop: "15px",
                marginLeft: "20px",
                gap: "5px",
                alignItems:"flex-start"
            }}>
            <p style={{fontSize:"12px",fontWeight:"bold",marginBottom:"-1px"}}> XX Shop</p>
            < a href="https://www.google.co.th/" > เกี่ยวกับเรา</a>
            <a href="https://www.google.co.th/">ข้อตกลงและเงื่อนไข</a>
            <a href="https://www.google.co.th/">นโยบายความเป็นส่วนตัว</a>
            <a href="https://www.google.co.th/">ร่วมงานกับเรา</a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px",
                marginLeft: "20px",
                gap: "5px"
            }}>
             <img  src="https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7561.jpg?w=740&t=st=1670148916~exp=1670149516~hmac=9488233e1bdc34c376f5731f290fcfd5f0fdec309796c194908cf3c75d4e4c27"></img>
            </div>
        </div >
    );
}