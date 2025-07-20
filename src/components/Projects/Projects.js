import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Mech2 from "../../Assets/Projects/Mech2.png";
import ProjectMechatronica from "../../Assets/Projects/ProjectMechatronica.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import RCauto from "../../Assets/Projects/RCauto.png";
import heftafel from "../../Assets/Projects/Heftafel.png";
import Simrig from "../../Assets/Projects/Simrig.png";
import Eindrapport from "../../Assets/../Assets/Eindrapport.pdf";
import TekeningenHeftafel from "../../Assets/HeftafelTekeningen.pdf";
import Ontwerprapport from "../../Assets/Ontwerprapport-5.pdf";
import tekenpakket from "../../Assets/TekenPakket-3.pdf";
import projectMechatronica from "../../Assets/Project Mechatronica Eindrapport-1.pdf";
import abs from "../../Assets/Projects/ABS.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mijn vakgerelateerde <strong className="purple">Projecten </strong>
        </h1>
        <p style={{ color: "white" }}>
          Zowel schoolprojecten als persoonlijke projecten die ik heb gemaakt tijdens mijn opleiding werktuigbouwkunde aan de Hogeschool Rotterdam.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RCauto}
              isBlog={false}
              title="Afstandbestuurbare auto"
              description="Dit project wordt op dit moment nog uitgevoerd. Het doel van dit project is om een afstandsbestuurbare auto te maken die bestuurd kan worden met een smartphone. Deze auto wordt bestuurd door een ESP32. De bedoeling van dit project is om Mario Kart naar de echte wereld te brengen en zullen dan ook een werkend pitsysteem hieraan toevoegen."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Simrig}
              isBlog={false}
              title="Simrig"
              description="Mijn eigen ontwikkelde website waarbij ik een configurator heb gemaakt voor race simulators. Deze website is gemaakt met React.js en Node.js."
              ghLink="https://github.com/Rickfortuin/Simrig"
              demoLink="https://simrig.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abs}
              isBlog={false}
              title="Aandrijfsystemen(besturingen samenhang)"
              description="Dit vak is onderverdeeld in 2 delen: besturingen, hierin wordt robotprogrammeren aansluitschema's en PLC besturingen behandeld. Het tweede deel is de samenhang, hierin wordt de kennis van besturingen toegepast tot een geïntegreerd systeem. Deze opdracht gaat over het berekenen en automatiseren van een bascule brug."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/" 
              film = "https://youtu.be/FXvLa_f0A_g"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mech2}
              isBlog={false}
              title="Project Mechatronica en Constructief Ontwerpen (jaar 2)"
              description="Tijdens dit project is er een prototype van een sorteermachine gemaakt die stekpotten sorteert op basis van de doorgegeven grootte. De gebruikte luchtcilinder mocht niet radiaal (op de y-as) belast worden en niet op basis van tijd of aantal stappen de positie bepalen. Dit project wordt aangestuurd door een Raspberry Pico door middel van MicroPython."
              ghLink="https://github.com/Rickfortuin/Project-Mechatronica-en-Construcite"
              demoLink={Ontwerprapport}
              drawing={tekenpakket} //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heftafel}
              isBlog={false}
              title="Project Constructief Ontwerpen en Maintenance (Jaar 1)"
              description="Bij Project Constructief Ontwerpen en Maintenance is er een heftafel voor een fictieve klant ontwikkeld. Deze heftafel moest vervolgens op mechanische belastingen worden berekend. Hierbij was ik de projectleider en leidde ik onze groep tot een 8. "
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink={Eindrapport} 
              drawing= {TekeningenHeftafel} //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectMechatronica}
              isBlog={false}
              title="Project Mechatronica (Jaar 1)"
              description="Bij Project Mechatronica maak je kennis met de eerste machinebouw van de opleiding, bij deze opdracht wordt een zonnepaneel gereinigd zonder vloeistof en handmatige acties. Deze machine werd geprogrammeerd in Python op een Metro M0 (Arduino microcontroller)."
              ghLink=""
             demoLink= {projectMechatronica}   // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
