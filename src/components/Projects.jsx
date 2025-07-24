import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="employee">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="employee">Employee<br />Management System</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="auth">User Login<br />System</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="grocery">Grocery<br />Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="alliance">Alliance College<br />Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="rentcar">Car Rent<br />Booking Website</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="employee">
                        <li>Full Stack Application: Developed a comprehensive Employee Management System using Java, Spring Boot, ReactJS, and MySQL.</li>
                        <li>CRUD Operations: Integrated functionality for Create, Read, Update, and Delete operations with a responsive frontend UI.</li>
                        <li>Secure Database Integration: Leveraged Spring Boot with MySQL for backend operations.</li>
                      </Tab.Pane>

                      <Tab.Pane eventKey="auth">
                        <li>Spring Boot with JWT Authentication: Built a secure login system using Spring Boot with JWT token handling.</li>
                        <li>Frontend: Designed a ReactJS-based frontend with user-friendly forms for registration and login.</li>
                        <li>Token-based Authorization: Only authenticated users can access protected routes.</li>
                      </Tab.Pane>

                      <Tab.Pane eventKey="grocery">
                        <li>Static Frontend Project: Designed a responsive grocery website using HTML and CSS.</li>
                        <li>Features intuitive layout and mobile-friendly design for better user experience.</li>
                      </Tab.Pane>

                      <Tab.Pane eventKey="alliance">
                        <li>Responsive Educational Website: Currently building an interactive website for Alliance College using HTML, Tailwind CSS, and JavaScript.</li>
                        <li>Multi-Page Layout: Includes homepage, course pages, admission info, testimonials, faculty profiles, and contact forms.</li>
                        <li>UI Features: Integrated FAQs, tabbed content sections, testimonial sliders, and styled tables using modern CSS utilities.</li>
                        <li>Mobile Optimized: Ensured responsiveness across all sections for mobile and tablet views.</li>
                        <li>
                          🔗 Live Link: <a href="https://allianceonline.edu.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0d6efd' }}>
                            https://allianceonline.edu.in/
                          </a>
                        </li>
                      </Tab.Pane>

                      <Tab.Pane eventKey="rentcar">
                        <li>Responsive Car Rental Website built using Vue.js and Tailwind CSS.</li>
                        <li>Features include car listings, booking form, pricing, and responsive layout.</li>
                        <li>Built for seamless experience across desktop, tablet, and mobile devices.</li>
                        <li>Used Vue Router for page navigation and modular components for each section.</li>
                        <li>
                          🔗 Live Link: <a href="https://haran420.github.io/rentcar/" target="_blank" rel="noopener noreferrer" style={{ color: '#0d6efd' }}>
                            https://haran420.github.io/rentcar/
                          </a>
                        </li>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
