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
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function CoachDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState([10, 200]);
  const item = { rating: 4 };

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
          {<> Coach Details</>}
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
                  src="/images/tutor.png"
                  height={150}
                  width={150}
preview={false}
                  style={{ borderRadius: "100px", objectFit: "cover" }}
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
                  Jackson (Physics)
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

                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#0FB3AF",
                    textAlign: "left",
                    marginTop: 10,
                    marginBottom: 0,
                  }}
                >
                  {item.rating}{" "}
                  <AiFillStar
                    style={{
                      fontSize: 16,
                      color: item.rating >= 1 ? "#FABF35" : "#e5e5e5",
                    }}
                  />{" "}
                  <AiFillStar
                    style={{
                      fontSize: 16,
                      color: item.rating >= 2 ? "#FABF35" : "#e5e5e5",
                    }}
                  />{" "}
                  <AiFillStar
                    style={{
                      fontSize: 16,
                      color: item.rating >= 3 ? "#FABF35" : "#e5e5e5",
                    }}
                  />{" "}
                  <AiFillStar
                    style={{
                      fontSize: 16,
                      color: item.rating >= 4 ? "#FABF35" : "#e5e5e5",
                    }}
                  />{" "}
                  <AiFillStar
                    style={{
                      fontSize: 16,
                      color: item.rating >= 5 ? "#FABF35" : "#e5e5e5",
                    }}
                  />
                </Typography.Title>
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "left",
                    marginTop: 0,
                    marginBottom: 20,
                  }}
                >
                  33 Ratings
                </Typography.Title>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="226"
                  height="41"
                  viewBox="0 0 226 41"
                  fill="none"
                >
                  <path
                    d="M0 0H226L210.031 20.5L226 41H0L16.7292 20.5L0 0Z"
                    fill="#86D6E0"
                  />
                  <text
                    className="fontFamily1"
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="#FFFFFF"
                    font-size="14"
                  >
                    Hourly Rates : $350
                  </text>
                </svg>

                <br />

                <Button
                  type="primary"
                  htmlType="submit"
                  className="loginButton"
                >
                  Book Lesson
                </Button>
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
                    Bio
                  </Typography.Title>

                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.50)",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing.
                  </Typography.Text>
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
                    Education
                  </Typography.Title>

                  <Row gutter={50}>
                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Instutation ABCD
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Instutation ABCD
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Instutation ABCD
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>
                  </Row>
                </Row>

                <br />

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px",
                    background: "#EEFDFF",
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
                    Schedule
                  </Typography.Title>

                  <Row gutter={[50, 30]}>
                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Sunday:
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        12:00 pm - 03:00 pm, 12:00 pm - 03:00 pm
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Monday:
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        12:00 pm - 03:00 pm
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Tuesday:
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        12:00 pm - 03:00 pm
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Wednesday:
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        12:00 pm - 03:00 pm
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Thursday:
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        12:00 pm - 03:00 pm
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Friday:
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        12:00 pm - 03:00 pm
                      </Typography.Text>
                    </Col>
                  </Row>
                </Row>
                <br />

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
                    Subject
                  </Typography.Title>

                  <Row gutter={[80, 30]}>
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>

                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Subject ABCD
                      </Typography.Text>
                    </Col>
                  </Row>
                </Row>

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px  30px 0  30px",

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
                    Average Rating
                  </Typography.Title>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        5 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                        allowHalf
                        value={5}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={50}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        4 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                        allowHalf
                        value={4}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={40}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        3 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                        allowHalf
                        value={3}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={30}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        2 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                        allowHalf
                        value={2}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={20}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        1 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                        allowHalf
                        value={1}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={10}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>
                </Row>

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "10px 30px",
                    
                  }}
                >
                <div style={{width:"100%",background:"#EEFDFF",borderRadius:"27px",padding:"20px"}}>
                  <Row gutter={20}>
                    <Col xs={4}>
                    <Image
                  src="/images/tutor.png"
                  height={100}
                  width={100}
                  style={{ borderRadius: "100px", objectFit: "cover" }}
                />
                    </Col>
                    <Col xs={20}>
                    <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    Grace Oram
                  </Typography.Title>
                  <Row gutter={10} style={{display:"flex",alignItems:"center"}}>
                    <Col>
                    <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    4 Stars
                  </Typography.Title>
                    </Col>
                    <Col>
                    <Rate
                        value={4}
                        style={{ fontSize:"12px", color: "#FABF35", marginTop: "-30px" }}
                      />

                    </Col>
                    <Col>
                    <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                   May 5, 2022
                  </Typography.Title>

                    </Col>
                  </Row>
                 
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "12px",
                      color: "rgba(0, 0, 0, 0.50)",
                      textAlign: "left",
                      lineHeight:"12px",
                      marginTop: 0,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing.
                  </Typography.Text>
                    </Col>
                  </Row>

                </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "10px 30px",
                    
                  }}
                >
                <div style={{width:"100%",background:"#EEFDFF",borderRadius:"27px",padding:"20px"}}>
                  <Row gutter={20}>
                    <Col xs={4}>
                    <Image
                  src="/images/tutor.png"
                  height={100}
                  width={100}
                  style={{ borderRadius: "100px", objectFit: "cover" }}
                />
                    </Col>
                    <Col xs={20}>
                    <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    Grace Oram
                  </Typography.Title>
                  <Row gutter={10} style={{display:"flex",alignItems:"center"}}>
                    <Col>
                    <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    4 Stars
                  </Typography.Title>
                    </Col>
                    <Col>
                    <Rate
                        value={4}
                        style={{ fontSize:"12px", color: "#FABF35", marginTop: "-30px" }}
                      />

                    </Col>
                    <Col>
                    <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                   May 5, 2022
                  </Typography.Title>

                    </Col>
                  </Row>
                 
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "12px",
                      color: "rgba(0, 0, 0, 0.50)",
                      textAlign: "left",
                      lineHeight:"12px",
                      marginTop: 0,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing.
                  </Typography.Text>
                    </Col>
                  </Row>

                </div>
                </Row>

                <ReactPaginate
              breakLabel="..."
              nextLabel={<FaArrowRight style={{ color: "grey" }} />}
              pageRangeDisplayed={window.innerWidth > 500 ? 4 : 1}
              marginPagesDisplayed={window.innerWidth > 500 ? 4 : 1} //handle Pa
              pageCount={3}
              forcePage={1}
              previousLabel={<FaArrowLeft style={{ color: "grey" }} />}
              renderOnZeroPageCount={null}
              pageClassName="page-item" //m
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="paginationContainer"
              activeClassName="active"
            />

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

export default CoachDetails;
