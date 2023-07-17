import { Col,Typography, Layout, Row, List, Input, Button } from "antd";
import {
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";
import { useNavigate } from "react-router";

const { Footer } = Layout;
const { TextArea } = Input;

const ClientFooter = () => {
  const navigate = useNavigate
  return (
    <Footer className="footer" style={{ height: "auto", padding: "0" }}>
      <Row
        style={{
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <Col xs={24} md={20}>
          <Row style={{ justifyContent: "center" }}>
            <Col
              xs={24}
              md={10}
              style={{ padding: "30px 0", fontFamily: "Lato" }}
              className={"footer-column"}
            >
              <Row>
                <Col xs={24} md={18}>
                  <div style={{ padding: "10px 30px 0px 10px" }}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{ color: "white", fontSize: 30 }}
                    >
                      About
                    </Typography.Title>
                    <Typography.Text
                      className="fontFamily1"
                      style={{ color: "white", fontSize: 16 }}
                    >
                      We're a passionate group of educators working together to
                      create the best online learning experiences for K-12 and
                      adult learners like you.
                    </Typography.Text>
                    <br />
                    <br />
                    <Row>
                      <Col xs={6} lg={3}>
                        <BiLogoLinkedin
                          style={{
                            color: "white",
                            fontSize: 25,
                            cursor: "pointer",
                          }}
                        />
                      </Col>
                      <Col xs={6} lg={3}>
                        <BiLogoTwitter
                          style={{
                            color: "white",
                            fontSize: 25,
                            cursor: "pointer",
                          }}
                        />
                      </Col>
                      <Col xs={6} lg={3}>
                        <BiLogoYoutube
                          style={{
                            color: "white",
                            fontSize: 25,
                            cursor: "pointer",
                          }}
                        />
                      </Col>
                      <Col xs={6} lg={3}>
                        <BiLogoInstagram
                          style={{
                            color: "white",
                            fontSize: 25,
                            cursor: "pointer",
                          }}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Button
                        style={{
                          marginTop: "10px",
                          padding: "0px 30px",
                          cursor: "pointer",
                        }}
                        onClick={()=> navigate("/signup")}
                        ghost
                        size="large"
                      >
                        Register Now
                      </Button>
                      &emsp;
                      <Button
                        style={{
                          marginTop: "10px",
                          padding: "0px 30px",
                          cursor: "pointer",
                        }}
                        ghost
                        size="large"
                      >
                        Apply Now
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              xs={24}
              md={6}
              style={{ padding: "30px 0", fontFamily: "Lato" }}
              className={"footer-column"}
            >
              <div style={{ padding: "10px 30px 0px 10px" }}>
                <Typography.Title
                  className="fontFamily1"
                  style={{ color: "white", fontSize: 30 }}
                >
                  Services
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    color: "white",
                    fontSize: 18,
                    textDecoration: "underline",
                  }}
                >
                  Tutoring
                </Typography.Text>
                <List
                  className="footer-list"
                  size="small"
                  style={{ fontSize: 18 }}
                >
                  <List.Item key="elementary_tutoring" className="footerLink">
                    Elementary Tutoring
                  </List.Item>
                  <List.Item
                    key="middle_school_tutoring"
                    className="footerLink"
                  >
                    Middle School Tutoring
                  </List.Item>
                  <List.Item key="high_school_tutoring" className="footerLink">
                    High School Tutoring
                  </List.Item>
                  <List.Item key="adult_tutoring" className="footerLink">
                    Adult Tutoring
                  </List.Item>
                </List>
                <br />

                <Typography.Text
                  className="fontFamily1"
                  style={{
                    color: "white",
                    fontSize: 18,
                    textDecoration: "underline",
                  }}
                >
                  Coaching
                </Typography.Text>
                <List
                  className="footer-list"
                  size="small"
                  style={{ fontSize: 18 }}
                >
                  <List.Item key="academic_coaching" className="footerLink">
                    Academic Coaching
                  </List.Item>
                  <List.Item key="career_coaching" className="footerLink">
                    Career Coaching
                  </List.Item>
                  <List.Item key="mindset_coaching" className="footerLink">
                    Mindset Coaching
                  </List.Item>
                  <List.Item key="conflict_coaching" className="footerLink">
                    Conflict Coaching
                  </List.Item>
                  <List.Item
                    key="goal_achievement_coaching"
                    className="footerLink"
                  >
                    Goal Achievement Coaching
                  </List.Item>
                  <List.Item key="focus_coaching" className="footerLink">
                    Focus Coaching
                  </List.Item>
                </List>
              </div>
            </Col>
            <Col
              xs={24}
              md={6}
              style={{ padding: "30px 0", fontFamily: "Lato" }}
              className={"footer-column"}
            >
              <div style={{ padding: "10px 30px 0px 10px" }}>
                <Typography.Title
                  className="fontFamily1"
                  style={{ color: "white", fontSize: 30 }}
                >
                  Navigation
                </Typography.Title>
                <List
                  className="footer-list"
                  size="small"
                  style={{ fontSize: 18 }}
                >
                  <List.Item key="home" className="footerLink">
                    Home
                  </List.Item>
                  <List.Item key="about" className="footerLink">
                    About
                  </List.Item>
                  <List.Item key="services" className="footerLink">
                    Services
                  </List.Item>
                  <List.Item key="book_online" className="footerLink">
                    Book Online
                  </List.Item>
                  <List.Item key="contact_us" className="footerLink">
                    Contact Us
                  </List.Item>
                </List>
                <br />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Col xs={24} md={18}>
          <Row>
            <Col xs={24} md={14}>
              <p className="footerLink">
                All Rights Reserved. Proudly Designed by{" "}
                <a style={{ color: "white", textDecoration: "underline" }}>
                  stategix design
                </a>
              </p>
            </Col>
            <Col xs={24} md={10}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  placeContent: "center",
                }}
              >
                <p className="footerLink">Terms & Conditions</p>
                &emsp;
                <p className="footerLink">Privacy Policy</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default ClientFooter;
