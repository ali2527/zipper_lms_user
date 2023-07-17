import React, { useState } from "react";
import {
  Form,
  Slider,
  Input,
  Col,
  Row,
  Typography,
  Layout,
  Rate,
  Card,
  Tag,Space,Table,
  Button,
  Progress,
  Checkbox,
  Select,
  Image,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";



//icons
import { FaArrowRight ,FaArrowLeft,FaUserAlt,FaBox,FaUsers } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState([10, 200]);
  const item = { rating: 4 };


  const columns = [
    {
      title: 'S No',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <span>0{text}</span>,
     
    },
    {
      title: 'Lesson Id',
      dataIndex: 'lessonId',
      key: 'lessonId',
    },
    {
      title: 'Tutor/Coach Name',
      dataIndex: 'tutor',
      key: 'tutor',
    },
    {
      title: 'Lesson Date',
      dataIndex: 'lessonDate',
      key: 'lessonDate',
    },
    {
      title: 'Lesson Charges',
      dataIndex: 'charge',
      key: 'charge',
    },
    {
      title: 'Lesson Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <BsThreeDotsVertical/>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      lessonId: '#123456',
      tutor: "Jhon",
      lessonDate: "New Learner",
      charge: 50,
      type:"tutoring"
    },
    {
      key: '2',
      lessonId: '#123456',
      tutor: "Jhon",
      lessonDate: "New Learner",
      charge: 50,
      type:"tutoring"
    },
   
  ];


  const onSearch = (value) => console.log(value);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    let data = {
      email: values.email,
      password: values.password,
      devideId: "123456789",
    };
    Post(AUTH.signin, data)
      .then((response) => {
        setLoading(false);
        if (response?.data) {
          console.log("response", response.data.token);
          console.log("response", response.data.user);
          dispatch(
            addUser({ user: response.data.user, token: response.data.token })
          );
          navigate("/", { replace: true });
        } else {
          swal("Oops!", response.response.data.message, "error");
        }
      })
      .catch((e) => {
        console.log(":::;", e);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="blueBackground"
        style={{
          height: "45vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{
            fontSize: "30px",
            color: "white",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {<> Dashboard</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          padding: "50px",
        }}
        gutter={20}
      >
        <Col xs={24} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "10px",
            }}
          >
            <Card className="contactCard2" bordered={false}>
              <Row
                style={{
                  width: "100%",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/tutor2.png"
                  height={150}
                  width={150}
                  style={{ borderRadius: "100px", objectFit: "cover" }}
                  preview={false}
                />
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "black",
                    textAlign: "left",
                    marginTop: 20,
                  }}
                >
                 Olivia Mack
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "12px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </Typography.Text>

                <br />

                <Button
                  type="primary"
                  htmlType="submit"
                  className="upcomingButton"
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                   <FaUserAlt style={{fontSize:'12px',color:"#E86AAF"}}/>

                  </div>}
                >
                 Upcoming Lessons
                </Button>
                <br/>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="completedButton"
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                   <FaBox style={{fontSize:'12px',color:"#649BAB"}}/>

                  </div>}
                >
                 Completed Lessons
                </Button>
                <br/>

                
                <Button
                  type="primary"
                  htmlType="submit"
                  className="messageButton"
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                   <FaBox style={{fontSize:'12px',color:"#649BAB"}}/>

                  </div>}
                >
                Message
                </Button>
                <br/>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="tutorButton"
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                   <FaUsers style={{fontSize:'12px',color:"#649BAB"}}/>

                  </div>}
                >
                My Tutors/Coaches
                </Button>
                <br/>


              </Row>
            </Card>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Row>
              <Card
                className="tutorDetailCard"
                style={{ width: "100%" }}
                bordered={false}
              >
                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px 30px 0 30px",
                  }}
                >
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                    Live Lesson
                  </Typography.Title>

                  <Table columns={columns} dataSource={data} />
                </Row>

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px",
                  }}
                >
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 10,
                    }}
                  >
                    Upcoming Lessons
                  </Typography.Title>

                  <Table columns={columns} dataSource={data} />
                </Row>

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px",
                  }}
                >
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                   My Tutors/Coaches
                  </Typography.Title>

                  <Row gutter={20} justify="center" style={{ margin: "50px 0" }}>
              <Col >
                <Card
                  className="coachCard1"
                  bordered={false}
                  style={{
                    width: "185px",
                    height: "250px",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding:"0 10px"
                    }}
                  >
                    <Col span={14}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={10}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "#7cc059",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        icon={<FaArrowRight style={{ color: "white" }} />}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col >
                <Card
                  bordered={false}
                  className="coachCard2"
                  style={{
                    width: "185px",
                    height: "250px",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding:"0 10px"
                    }}
                  >
                    <Col span={14}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={10}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "#7cc059",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        icon={<FaArrowRight style={{ color: "white" }} />}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col >
                <Card
                  bordered={false}
                  className="coachCard3"
                  style={{
                    width: "185px",
                    height: "250px",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding:"0 10px"
                    }}
                  >
                    <Col span={14}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={10}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "#7cc059",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        icon={<FaArrowRight style={{ color: "white" }} />}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col >
                <Card
                  bordered={false}
                  className="coachCard4"
                  style={{
                    width: "185px",
                    height: "250px",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding:"0 10px"
                    }}
                  >
                    <Col span={14}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={10}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "#7cc059",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        icon={<FaArrowRight style={{ color: "white" }} />}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col >
                <Card
                  bordered={false}
                  className="coachCard5"
                  style={{
                    width: "185px",
                    height: "250px",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding:"0 10px"
                    }}
                  >
                    <Col span={14}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={10}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "#7cc059",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        icon={<FaArrowRight style={{ color: "white" }} />}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button type="primary" htmlType="submit" className="loginButton">
                View All
              </Button>
            </Row>
                </Row>

                

                <br/>
                <br/>

                


              </Card>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Dashboard;
