import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Button, Row,Avatar, Typography, Layout, Card } from "antd";
import { useNavigate } from "react-router";
import { UPLOADS_URL } from "../../config/constants/api";
import dayjs from "dayjs"


function Profile() {
const navigate = useNavigate()
const user = useSelector((state) => state.user.userData);
const token = useSelector((state) => state.user.userToken);


React.useEffect(() => {
  if (!token) {
    navigate("/");
  }
}, [token]);


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
          {<> My Profile</>}
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
                <Col xs={24} md={24}>

                  <Row>
                  <Avatar
                size={200}
                src={
                  !user.image ? "/images/avatar.png" : UPLOADS_URL + user.image
                }
              />
                  </Row>

                  <br/>
                  <br/>
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
                        First Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                       {user.firstName}
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
                        Last Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.lastName}
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
                      Date of Birth
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {dayjs(user?.birthday).format("MM/DD/YYYY")}
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={10}>
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
                       Name of Parent/ Guardian
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.parent}
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
                        Email Address
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.email}
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
                        Phone Number
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.phoneNumber}
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
                        Home Number
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                       {user?.homeNumber}
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
                        School Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                       {user?.school}
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
                        Grade Level
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.gradeLevel}
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
                       City
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.city}
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
                       State
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.state}
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
                        Zip Codes
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.zip}
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
                       Interested Subjects
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.subjects.join(" , ")}
                      </Typography.Text>
                    </Col>

                   
                  </Row>

                  {/* <Row style={{ marginTop: 30 }}>
                  <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                      disabled
                 
                    >
                     Edit Profile
                    </Button>
                    &emsp;&emsp;
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
                      Change Password
                    </Button>
                  </Row> */}

                  <Row style={{ marginTop: 30 }}>
                    
                    &emsp;
                    {/* <Button
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
                    </Button> */}
                  </Row>
                </Col>
              
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Profile;
