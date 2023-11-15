import React from "react";

import { Col, Row, Typography, Layout, Card } from "antd";

function AboutUs() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="blueBackground"
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{ fontSize: "30px", color: "white" }}
        >
          {<> About Us</>}
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
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "35px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                {
                  <>
                    Our Mission
                  </>
                }
              </Typography.Title>
              </Row>
              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

Our Mission is to provide exceptional online tutoring and coaching services for K-12 and adult
learners, empowering them to thrive in a rapidly evolving world.
              </Typography.Text>
              </Row>

              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

We've handpicked a diverse team of experts who share a passion for transforming how people
learn. With their diverse backgrounds, extensive experience, and unwavering dedication, they'll
help you develop a growth mindset, embrace continuous learning, and unlock new levels of
achievement and personal growth.
              </Typography.Text>
              </Row>

           
              <br /> <br />
              <Card
                className="aboutCard1"
                bordered={false}
                style={{
                  width: "100%",
                  height: "350px",
                }}
              ></Card>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default AboutUs;
