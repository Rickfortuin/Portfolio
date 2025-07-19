import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              IK ZAL MEZELF EVEN <span className="purple"> VOORSTELLEN</span> 
            </h1>
            <p className="home-about-body">
              Mijn liefde voor werktuigbouwkunde begon toen ik al als klein kind keek naar de Formule 1 🏎️ en de 24 uur van Le Mans .
              Sindsdien ben ik gefascineerd door de techniek achter de machines en voertuigen die we dagelijks gebruiken.⚙️🔧
              <br />
              <br />Tijdens mijn studie heb ik veel geleerd over
              <i>
                <b className="purple"> wiskunde, mechanica, automatiseren, productietechnieken, technisch tekenen en thermodynamica.</b>
              </i>
              <br />
              <br />
              Mijn interesse liggen in de &nbsp;
              <i>
                <b className="purple">machinebouw </b> en dingen gerelateerd aan{" "}
                <b className="purple">
                  motorsport en voertuigentechniek.
                </b>
              </i>
              <br />
              <br />
              Wanneer het kan probeer ik mijn vaardigheden te ontwikkelen zoals <b className="purple">technisch tekenen en programmeren</b> met interessante projecten. Daarbij maak ik gebruik van
              <i>
                <b className="purple">
                  {" "}
                  Visual Studio Code, Python, Autodesk Inventor en Fusion (voorheen Fusion 360)
                </b>
    
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Vind me </h1>
            <p>
              Voel je vrij mij <span className="purple">te benaderen</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rickfortuin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rick-fortuin-abb1632a7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rick.j.fortuin@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
