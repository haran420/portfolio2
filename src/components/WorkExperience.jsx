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
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work Experience</h2><br></br>
                <div className="text-center">
                <img src={newLogo} alt="Company Logo" style={{ width: '150px' }} />
                </div> <br></br>
                <p><b>Chadura Tech Private Ltd</b>
                <br></br>Working as a Vue JS Developer<br></br>
                May 2025 - Present<br></br>
                Bengaluru, Karnataka, India</p>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Employee<br></br> Management<br></br> System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" >Grocery Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Bus Reservation<br></br> System</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <li>
                        Full Stack Application: Developed a comprehensive Employee Management System with interactive web pages for browsing, updating, and managing employee data using Java, Spring Boot, and MySQL for backend functionality.
                      </li>
                      <li>
                        User Registration & Database Integration: Implemented secure user registration and efficient database handling with Spring Boot and MySQL, ensuring smooth user data storage and retrieval.
                      </li>
                      <li>
                        CRUD Operations: Designed responsive web pages using ReactJS, HTML, CSS, and Bootstrap to support Create, Read, Update, and Delete (CRUD) operations for employee management.
                      </li>
                      <li>
                        Frontend-Backend Synergy: Built a dynamic frontend with ReactJS and integrated it with a robust Java Spring Boot backend, enabling real-time data interaction and seamless user experience.
                      </li>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="position-absolute" src={colorSharp2} alt="background"></img>
    </section>
  )
}