import React from 'react'

import Card from 'react-bootstrap/Card';

export default function Flashsale() {
    return (
        <div>
            <div>
                <p style={styles.textHearder}>FlashSale</p>
            </div>
            <div style={{ backgroundColor: "#fff" ,width:"100%"}}>
                <div style={styles.headerCard}>
                    <p style={{ fontWeight: "500", fontSize: "16px", color: "#f57224" }}>Sale on now</p>
                    <p style={{ fontWeight: "500", fontSize: "16px", color: " #202020;" }}>Ending in</p>
                    <div style={styles.timer}>00</div>
                    <p>:</p>
                    <div style={styles.timer}>00</div>
                    <p>:</p>
                    <div style={styles.timer}>00</div>
                </div>
                <Card style={styles.itemCard}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/04/10/18/39/running-shoe-321199_960_720.jpg" />
                    <Card.Body>
                        <Card.Title> test</Card.Title>
                        <Card.Text className="cardtext-main">
                            ฿ 000
                        </Card.Text>
                        <Card.Text className="cardtext">
                            ฿ 000
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
}

const styles = {
    textHearder: {
        fontSize: "25px",
        fontWeight: "bold"
    },
    headerCard: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: "25px",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "25px",
        height: "60px",

    },
    itemCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "188px",
        borderColor: "#fff"
    },
    timer: {
        borderRadius: "2px",
        fontWeight: " 500",
        margin: "12px 6px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#d3232a",
        textAlign: "center",
        width: "40px",
        height: "35px",
        lineHeight: "35px",
    }

};