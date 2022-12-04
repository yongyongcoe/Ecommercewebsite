import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Product(props) {
    return (
        <div>
            <Card 
            style={{    
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "188px",
                borderRadius: "6px",
                backgroundColor: "rgb(255, 255, 255)"}}
            >
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/04/10/18/39/running-shoe-321199_960_720.jpg" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text className="cardtext-main">
                        20.00 บาท
                    </Card.Text>
                    <Card.Text className="cardtext">
                        30.00 บาท
                    </Card.Text>
                    <Button className="btn-shop">ช้อปเลย</Button>
                </Card.Body>
            </Card>
        </div>

    );
}