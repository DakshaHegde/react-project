import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const Dynamic_Card = () => {
  const cardInfo = [
    {
      title: "Table 1",
      text: "dndfkd dddsd dsadasd dassd heheg heugfe",
    },
    {
      title: "Table 2",
      text: "dfs dsd ",
    },
    {
      title: "Table 3",
      text: " ",
    },
    {
        title: "Table 4",
        text: " ",
      },
      {
        title: "Table 5",
        text: " ",
      },
      {
        title: "Table 6",
        text: " ",
      },
      {
        title: "Table 7",
        text: " ",
      },
      {
        title: "Table 8",
        text: " ",
      },
      {
        title: "Table 9",
        text: " ",
      }
    ];
  
    const renderCard = (card, index) => {
      return (
        <Card className="box">
          <Card.Body>
            <Card.Text>{card.title}</Card.Text>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      );
    };

    return <div className="grid">{cardInfo.map(renderCard)}</div>;
  };
  
  export default Dynamic_Card;