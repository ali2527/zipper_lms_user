import React from "react";

import { Col, Button, Row, Typography, Layout, Card } from "antd";

function LessonDetail() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="blueBackground"
        style={{
          height: "45vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{ fontSize: "30px", color: "white" }}
        >
          {<> Lesson Detail</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={16}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "50px 20px",
            }}
          >
            <Card
              className="infoBox"
              bordered={false}
              style={{
                width: "100%",
                padding: "20px",
              }}
            >
              <Row>
                <Col xs={24} md={22}>
                  <Row>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson ID
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        #123456
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        No. of Lessons
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        1
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Type
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        Coaching
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Service/ Subject Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        English
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Date
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        MM/DD/YYYY
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Time
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        12:00 PM - 12:30 PM
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Charge
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        $100
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Typography.Text
                      className="fontFamily1"
                      style={{
                        fontSize: "18px",
                        textDecoration: "underline",
                        color: "grey",
                        textAlign: "left",
                      }}
                    >
                      Coach/ Tutor General Information
                    </Typography.Text>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      {" "}
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Coach/ Tutor Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        Jhon
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 20 }}>
                    <Button
                      className="fontFamily1"
                      style={{
                        marginTop: "0px",
                        padding: "10px 30px",
                        cursor: "pointer",
                        color: "black",
                        height: "auto",
                        border: "1px solid #203657",
                        fontWeight: "bold",
                      }}
                      ghost
                      size="large"
                    >
                      View Profile
                    </Button>
                  </Row>

                  <Row style={{ marginTop: 30 }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                    >
                      View Chat
                    </Button>
                    &emsp;
                    <Button
                      className="fontFamily1"
                      style={{
                        marginTop: "0px",
                        padding: "10px 40px",
                        cursor: "pointer",
                        color: "black",
                        height: "auto",
                        border: "1px solid #203657",
                        fontWeight: "bold",
                      }}
                      ghost
                      size="large"
                    >
                      Join Lesson
                    </Button>
                  </Row>
                </Col>
                <Col xs={0} md={2}>
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                    {
                      <>
                        Status: <span style={{ color: "red" }}>Live</span>
                      </>
                    }
                  </Typography.Title>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default LessonDetail;
