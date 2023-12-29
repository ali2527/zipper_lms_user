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
          {<> Educational Consulting</>}
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

<Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

We offer consulting services to help reduce teacher turnover rates and improve teacher and student performance in K-12 schools. 
              </Typography.Text>
              </Row>
<br/>
              <Row>
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                {
                  <>
                   Services
                  </>
                }
              </Typography.Title>
              </Row>

              <Row>
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                {
                  <>
                   Novice Teacher Survival (Two-Year Program)
                  </>
                }
              </Typography.Title>
              </Row>
              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

Our educational consultants advise and support novice teachers during their first and second years teaching in the classroom. Consultants' responsibilities are conducting weekly classroom observations and providing helpful feedback, collaborating with teachers and administrators to create improvement action plans, and facilitating professional development training in targeted areas.
              </Typography.Text>
              </Row>
              <br/>
              <Row>
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                {
                  <>
                   Professional Development Training
                  </>
                }
              </Typography.Title>
              </Row>


              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

Importance of Relationship-Building & Family Engagement <br/>
Effective Lesson Planning & Classroom Management<br/>
Curricula Implementation <br/>
Diversity, Equity, and Inclusion<br/>
Team Collaboration 
              </Typography.Text>
              </Row>

              <br/>

              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

 Contact us at info@zipperlearning.com to request a meeting if you are interested in our consulting services.
              </Typography.Text>
              </Row>

           
              <br /> <br />
              <Card
                className="consulting"
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
