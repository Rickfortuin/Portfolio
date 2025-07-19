import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo, ik ben  <span className="purple">Rick Fortuin </span>
            uit <span className="purple"> Spijkenisse, Nederland.</span>
            <br />
            Ik op dit moment bezig met mijn HBO werktuigbouwkunde op de Hogeschool Rotterdam.
          
            <br />
            Tijdens mijn vrije tijd ben ik bezig met het leren van nieuwe vaardigheden zowel binnen als buiten het gebied van engineering daarbij werk ik meestal aan interessante projecten.
            <br />
            <br />
            Los van mijn studie doe/volg ik ik:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Waterpolo
            </li>
            <li className="about-activity">
              <ImPointRight /> Bolderen
            </li>
            <li className="about-activity">
              <ImPointRight /> Motorsport (Formule 1, Le Mans, simracing)
            </li>
          </ul>

          <p style={{ color: "rgba(9,134,57,255)" }}>
            "Begin met wat interessant is, dan leer je vanzelf nieuwe dingen."{" "}
          </p>
          <footer className="blockquote-footer">Rick</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
