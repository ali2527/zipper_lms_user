import React from "react";

import { Col, Row, Typography, Layout, Card } from "antd";

function AboutUs() {
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
                    We are Turitor.
                    <br /> An online learning community
                  </>
                }
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                {
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing.
                  </>
                }
              </Typography.Text>
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
