import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import FormfacadeEmbed from "@formfacade/embed-react";

export const Contact = () => {

  const handleFormSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} 
                  alt="Contact Us" 
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div id="ff-compose">
                  <FormfacadeEmbed

  formFacadeURL="https://formfacade.com/include/104389145976982667447/form/1FAIpQLSf3oUO2GThHDgBUC10Xw_D9Lf6UOdA5C3EkV0Z85CybsDFyrA/classic.js?div=ff-compose"


onSubmitForm={() => console.log('Form submitted')}

/>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}