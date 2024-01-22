import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import RestaurantReservation from "../assets/img/Restaurant-Project.png";
import OLP from "../assets/img/OLP-Project.png";
import TicketBooking from "../assets/img/Ticket-booking.jpg";
import Gym from "../assets/img/Gym.png";
import Bank from "../assets/img/Bank-Project.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Online Learning Platform",
      category: "UI/UX",
      description: "Design & Development",
      imgUrl: OLP,
      link: " https://online-learning-platform-ten.vercel.app/",
    },
    {
      title: "Restaurant Reservation Website",
      category: "UI/UX",
      description: "Design & Development",
      imgUrl: RestaurantReservation,
      link: " https://restaurant-reservation-rouge.vercel.app/",
    },
    {
      title: "Fitness Coaching Service Website",
      category: "UI/UX",
      description: "Design & Development",
      imgUrl: Gym,
      link: " https://fitness-coaching-service-website.vercel.app/",
    },
    {
      title: "Ticket Booking Website",
      category: "UI/UX",
      description: "Design & Development",
      imgUrl: TicketBooking,
      link: " https://ticket-booking-case-study.vercel.app/",
    },
    {
      title: "Online Learning Platform",
      category: "Front-End",
      description: "Design & Development",
      imgUrl: OLP,
      link: " https://online-learning-platform-website.vercel.app/",
    },
    {
      title: "Restaurant Reservation Webite",
      category: "Front-End",
      description: "Design & Development",
      imgUrl: RestaurantReservation,
      link: "https://restaurant-reservation-website-orpin.vercel.app/",
    },
    {
      title: "Fitness Coaching Service Website",
      category: "Front-End",
      description: "Design & Development",
      imgUrl: Gym,
      link: "https://fitness-project-pi.vercel.app/",
    },
    {
      title: "Bank Money Transfer",
      category: "Front-End",
      description: "Design & Development",
      imgUrl: Bank,
      link: "https://bank-transfer-pink.vercel.app/",
    },
   
  ];

  const filterProjects = (category) => {
    return projects.filter((project) => project.category === category);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore our portfolio featuring a blend of UI/UX design and
                    front-end development projects. From intuitive user
                    interfaces to responsive web applications, each project
                    reflects a commitment to thoughtful design and functional
                    code
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="UI/UX">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="UI/UX">UI/UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Front-End">Front-End</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="UI/UX">
                        <Row>
                          {filterProjects("UI/UX").map((project, index) => (
                            <Col key={index} md={4} className="mb-4">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                           
                                <ProjectCard {...project} />
                              </a>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="Front-End">
                        <Row>
                          {filterProjects("Front-End").map((project, index) => (
                            <Col key={index} md={4} className="mb-4">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                             

                                <ProjectCard {...project} />
                              </a>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
