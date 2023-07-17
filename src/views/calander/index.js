import React from "react";
import { Col, Row, Typography, Layout,Checkbox, Card } from "antd";

function Calander() {
  return (
    <Layout style={{ minHeight: "80vh" }}>
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
          {<>Calander</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={20}>
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
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >

                   {"< 15 May, 2023 - 21 May, 2023 >"}

              </Typography.Title>
              <br/>
              <div>
                <Row style={{border:"1px solid #dadada",justifyContent:'center', borderRadius:"10px"}}>
                    <Col xs={3} style={{padding:20, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',borderRight:"1px solid #dadada"}}>
                    <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                   Monday
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "12px",
              
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                   March 22, 2023
              </Typography.Text>
                    </Col>

                    <Col xs={3} style={{padding:20, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center', borderRight:"1px solid #dadada"}}>
                    <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                   Tuesday
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "12px",
              
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                   March 23, 2023
              </Typography.Text>
                    </Col>

                    <Col xs={3} style={{padding:20, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',borderRight:"1px solid #dadada"}}>
                    <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                   Wednesday
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "12px",
              
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                   March 24, 2023
              </Typography.Text>
                    </Col>

                    <Col xs={3} style={{padding:20, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',borderRight:"1px solid #dadada"}}>
                    <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                   Thursday
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "12px",
              
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                   March 25, 2023
              </Typography.Text>
                    </Col>

                    <Col xs={3} style={{padding:20, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',borderRight:"1px solid #dadada"}}>
                    <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                   Friday
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "12px",
              
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                   March 26, 2023
              </Typography.Text>
                    </Col>

                    <Col xs={3} style={{padding:20, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',borderRight:"1px solid #dadada"}}>
                    <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                   Saturday
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "12px",
              
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                   March 27, 2023
              </Typography.Text>
                    </Col>

                    <Col xs={3} style={{padding:20, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                    <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                   Sunday
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "12px",
              
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                   March 28, 2023
              </Typography.Text>
                    </Col>


                </Row>
                </div>

                <br/>
                <br/>


              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >

                   From

              </Typography.Title>
              <br/>

              <Checkbox.Group
                  className="avaliblityGroup"
                  options={[
                    "07 : 00 PM  to  08: 00 PM",
                    "08 : 00 PM  to  09: 00 PM",
                    "09 : 00 PM  to  10: 00 PM",
                  ]}
                 
                  style={{
                    display: "flex",
                    columnGap: "50px",
                  }}
                />

            



            
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Calander;
