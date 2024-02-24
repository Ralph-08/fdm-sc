import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./CardItem.scss"

import cardImg from "../../assets/images/varones.jpeg";

export default function CardItem({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}