import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      key: "employee",
      title: "Employee Management System",
      details: [
        "Full Stack Application: Developed a comprehensive Employee Management System using Java, Spring Boot, ReactJS, and MySQL.",
        "CRUD Operations: Integrated functionality for Create, Read, Update, and Delete operations with a responsive frontend UI.",
        "Secure Database Integration: Leveraged Spring Boot with MySQL for backend operations.",
      ],
    },
    {
      key: "auth",
      title: "User Login System",
      details: [
        "Spring Boot with JWT Authentication: Built a secure login system using Spring Boot with JWT token handling.",
        "Frontend: Designed a ReactJS-based frontend with user-friendly forms for registration and login.",
        "Token-based Authorization: Only authenticated users can access protected routes.",
      ],
    },
    {
      key: "grocery",
      title: "Grocery Website",
      details: [
        "Static Frontend Project: Designed a responsive grocery website using HTML and CSS.",
        "Features intuitive layout and mobile-friendly design for better user experience.",
        '🔗 Live Link: <a href="https://grocerywebsitee.netlify.app/" target="_blank" rel="noopener noreferrer" style="color:#0d6efd">https://grocerywebsitee.netlify.app/</a>',
      ],
    },  
    {   
      key: "alliance",
      title: "Alliance College Website",
      details: [
        "Responsive Educational Website: Currently building an interactive website for Alliance College using HTML, Tailwind CSS, and JavaScript.",
        "Multi-Page Layout: Includes homepage, course pages, admission info, testimonials, faculty profiles, and contact forms.",
        "UI Features: Integrated FAQs, tabbed content sections, testimonial sliders, and styled tables using modern CSS utilities.",
        "Mobile Optimized: Ensured responsiveness across all sections for mobile and tablet views.",
        '🔗 Live Link: <a href="https://allianceonline.edu.in/" target="_blank" rel="noopener noreferrer" style="color:#0d6efd">https://allianceonline.edu.in/</a>',
      ],
    },
    {
      key: "rentcar",
      title: "Car Rent Booking Website",
      details: [
        "Responsive Car Rental Website built using Vue.js and Tailwind CSS.",
        "Features include car listings, booking form, pricing, and responsive layout.",
        "Built for seamless experience across desktop, tablet, and mobile devices.",
        "Used Vue Router for page navigation and modular components for each section.",
        '🔗 Live Link: <a href="https://haran420.github.io/rentcar/" target="_blank" rel="noopener noreferrer" style="color:#0d6efd">https://haran420.github.io/rentcar/</a>',
      ],
    },
  ];

  const [activeKey, setActiveKey] = useState(projects[0].key);
  const selectedProject = projects.find((p) => p.key === activeKey);

  // Define the animation variants for the main section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  return (
    <motion.section
      id="projects"
      className="project min-vh-100 py-5 position-relative text-white"
      style={{
        backgroundImage: `url(${colorSharp2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 0,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 10 }}>
        {/* H2 heading with its own animation */}
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        {/* Tab Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            rowGap: "10px",
            columnGap: "10px",
            marginBottom: "20px",
          }}
        >
          <Nav
            variant="pills"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            style={{ display: "inline-flex" }}
          >
            {projects.map(({ key, title }) => (
              <Nav.Item
                key={key}
                style={{ display: "inline-block", margin: "0 10px" }}
              >
                <Nav.Link
                  className="nav-link-custom"
                  eventKey={key}
                  style={{
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    color: "#fff",
                    whiteSpace: "normal",
                    border: "none",
                  }}
                >
                  {title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        {/* Project Description Card */}
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              key={selectedProject.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 p-4 rounded-3 shadow-lg"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <h3 className="mb-3 text-center">{selectedProject.title}</h3>
              <ul
                className="list-unstyled"
                style={{ lineHeight: "1.6", fontSize: "1.1rem" }}
              >
                {selectedProject.details.map((detail, i) => (
                  <li
                    key={i}
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};