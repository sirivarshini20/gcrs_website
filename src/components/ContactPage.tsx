import React from "react";
import "./ContactUsDes.css";
import { Card } from "react-bootstrap";

interface ContactCardProps {
  title: string;
  icon: string; // assuming icon is a URL string for img src
  info: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, icon, info }) => {
  return (
    <Card className="single-contact-info">
      <div style={{ marginBottom: "6px" }}>
        <img src={icon} alt="Icon" className="svg" />
      </div>
      <Card.Title>{title}</Card.Title>
      <Card.Text className="mail_lamas">{info}</Card.Text>
    </Card>
  );
};

export default ContactCard;
