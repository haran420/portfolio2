import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import newLogo from '../assets/img/newlogo.png.png';


export const WorkExperience = () => {

  return (
    <section className="project" id="workExperience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Work Experience</h2><br></br>
                <div className="text-center">
                <img src={newLogo} alt="Company Logo" style={{ width: '150px' }} />
                </div> <br></br>
                <p><strong>Chadura Tech Private Ltd</strong>
                <br></br>Working as a Vue JS Developer<br></br>
                May 2025 - Present<br></br>
                Bengaluru, Karnataka, India</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="position-absolute" src={colorSharp2} alt="background"></img>
    </section>
  )
}