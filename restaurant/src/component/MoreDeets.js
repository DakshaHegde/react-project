import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const MoreDeets = () => {
  const cardInfo = [
    {
      title: "Table 1",
      text: "Order",
    },
    {
      title: "Table 2",
      text: "Order",
    },
    {
      title: "Table 3",
      text: "Order",
    },
    {
        title: "Table 4",
        text: "Order",
      },
      {
        title: "Table 5",
        text: "Order",
      },
      {
        title: "Table 6",
        text: "Order",
      },
      {
        title: "Table 7",
        text: "Order",
      },
      {
        title: "Table 8",
        text: "Order",
      },
      {
        title: "Table 9",
        text: "Order",
      }
    ];
  
    const renderCard = (card, index) => {
      return (
        <Card className="box">
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      );
    };

    return <div className="grid">{cardInfo.map(renderCard)}</div>;
  };
  
  export default MoreDeets;