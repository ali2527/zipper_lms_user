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
          {<> Consulting</>}
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
                   Novice Teacher Survival
                  </>
                }
              </Typography.Title>
              </Row>
              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

Our educational consultants advise and support novice teachers during their first year of teaching. Consultants conduct weekly classroom observations and collaborate with teachers and administrators to create performance improvement plans to help teachers acquire the essential skills to become effective classroom teachers.
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
Consulting for K-12 Schools                  </>
                }
              </Typography.Title>
              </Row>




              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

We train and advise faculty. <br/>
We collaborate with administrators to help improve school learning environments and overall school performance.<br/>
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
Consulting for families                 </>
                }
              </Typography.Title>
              </Row>




              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

We partner with families to help prepare students for admission processes at different colleges and universities.<br/>
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
Consulting for Education Companies               </>
                }
              </Typography.Title>
              </Row>




              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

We partner with education companies to help develop learning products and educational software for K-12 and adult learners.              </Typography.Text>
              </Row>


              <br/>

              <Row style={{marginBottom:"10px"}}>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >

 Contact us at info@zipperlearning.com if you are interested in our consulting services.
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
