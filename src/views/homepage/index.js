import React from "react";
// import AuthLayout from "../../components/";
import {
  Col,
  Row,
  Typography,
  List,
  Form,
  Layout,
  Input,
  Button,
  Card,
  Tabs,
  Table,
  Image,
  Divider,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { PiMedal } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { TbBolt } from "react-icons/tb";
import { LiaBrainSolid } from "react-icons/lia";
import swal from "sweetalert";

// import router from "next/router";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");


  // useEffect if user is already logged in
  React.useEffect(() => {
    if (user && token) {
      navigate("/", { replace: true });
    }
  }, [user, token]);

  
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
    <Layout className="AuthBackground" style={{ minHeight: "100vh" }}>
      <Row className="AuthBackground">
        <Col xs={24} md={10}>
          <div className="heroSection">
            <Row style={{ width: "100%", justifyContent: "center" }}>
              <Col xs={20} md={20} className="formWrap">
                <Typography.Title
                  className="fontFamily1"
                  style={{ fontSize: "45px", color: "white" }}
                >
                  {
                    <>
                      {" "}
                      Unlock Your True Potential with <br /> Zipper Learning
                    </>
                  }
                </Typography.Title>

                <Typography.Text
                  className="fontFamily1"
                  style={{ fontSize: "18px", color: "white" }}
                >
                  Achieve Your Goals and Thrive in Today's Fast-Paced World.
                  This is Your Gateway to Success.
                </Typography.Text>
                <br />
                <br />
                <br />
                <Input
                  className="heroSerch"
                  placeholder="Find your tutor or coach"
                  suffix={
                    <a href="https://zipperlearning.com/tutor">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="heroButton"
                      onClick={() => navigate()}
                    >
                      Search
                    </Button>
                    </a>
                  }
                  size="large"
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={0} sm={0} md={14}>
          <div className="authImageBox">
            <Row style={{ width: "100%", paddingRight: "20px",display:"flex",justifyContent:"flex-end" }} gutter={40}>
              <Col xs={0} sm={8} md={8} lg={8} xl={7}>
                <div className="authImage3 " />
              </Col>
              <Col xs={0} sm={8} md={8} lg={8} xl={7}>
                <div className="authImage2" />
              </Col>
              <Col xs={0} sm={8} md={8} lg={8} xl={7}>
                <div className="authImage1" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: "35px",
                fontWeight: 600,
                color: "black",
                textAlign: "center",
              }}
            >
              Discover Your Ideal Tutor or Coach
            </Typography.Title>

            <Typography.Text
              className="fontFamily1"
              style={{ fontSize: "16px", color: "grey", textAlign: "center" }}
            >
              {
                <>
                 We're here to instill a love of lifelong learning. We prioritize building long term <br/>and strong connections with  our learners.
                 
                </>
              }
            </Typography.Text>
            <Row gutter={20} justify="center" style={{ margin: "50px 0" }}>
              <Col xs={22} sm={12} md={4}>
                <Card
                  className="coachCard1"
                  bordered={false}
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  
                </Card>
              </Col>
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard2"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  
                </Card>
              </Col>
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard3"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  
                </Card>
              </Col>
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard4"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  
                </Card>
              </Col>
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard5"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  
                </Card>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button type="primary" htmlType="submit" className="heroButton"   onClick={()=> navigate("/tutor")}>
                View All
              </Button>
            </Row>
          </div>
        </Col>
      </Row>

      {/* section 3 */}

      <Row style={{ backgroundColor: "#f8fbff", justifyContent: "center" }}>
        <Col xs={24} md={20}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
              <Row gutter={50} style={{ justifyContent: "center", alignItems: "center" }}>
              <Col xs={24} sm={12}>
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "35px",
                    fontWeight: 600,
                    color: "black",
                    textAlign: "left",
                    margin: "10px 0",
                  }}
                >
                  {
                    <>
                      Ignite Your Passion
                      <br /> for Learning
                    </>
                  }
                </Typography.Title>
              </Col>
              <Col xs={24} sm={12}>
                <Typography.Text
                  className="fontFamily1"
                  style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
                >
                  {
                    <>
                      We’re here to instill a genuine love for learning that lasts a lifetime. We
prioritize building long-term, reciprocal connections between learners, tutors, and
coaches
                    </>
                  }
                </Typography.Text>
              </Col>
            </Row>
            <br />
            <br />
            <Row
              gutter={50}
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Col xs={24} sm={10}>
                <Row>
                  <Col
                    xs={24}
                    sm={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      type="primary"
                      shape="circle"
                      style={{
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "60px",
                        height: "60px",
                      }}
                      icon={
                        <PiMedal
                          style={{ color: "#7cc059", fontSize: "25px" }}
                        />
                      }
                    />
                  </Col>
                  <Col xs={24} sm={18}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "25px",
                        fontWeight: 600,
                        color: "black",
                        textAlign: "left",
                        margin: "10px 0",
                      }}
                    >
                      {
                        <>
                          Tutors & Coaches
                        </>
                      }
                    </Typography.Title>
                    <Typography.Text
                      className="fontFamily1"
                      style={{
                        fontSize: "16px",
                        color: "grey",
                        textAlign: "left",
                      }}
                    >
                      {
                        <>
                          Our Experts will help you gain the knowledge, skill and confidence to tackle any challange and achieve your goals.
                        </>
                      }
                    </Typography.Text>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col
                    xs={24}
                    sm={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      type="primary"
                      shape="circle"
                      style={{
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "60px",
                        height: "60px",
                      }}
                      icon={
                        <TbBolt
                          style={{ color: "#7cc059", fontSize: "25px" }}
                        />
                      }
                    />
                  </Col>
                  <Col xs={24} sm={18}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "25px",
                        fontWeight: 600,
                        color: "black",
                        textAlign: "left",
                        margin: "10px 0",
                      }}
                    >
                      {<>Personalized Learning</>}
                    </Typography.Title>
                    <Typography.Text
                      className="fontFamily1"
                      style={{
                        fontSize: "16px",
                        color: "grey",
                        textAlign: "left",
                      }}
                    >
                      {
                        <>
                          We carefully design our lessons to accommodate the specific needs of each learner.
                        </>
                      }
                    </Typography.Text>
                  </Col>
                </Row>
                <br />
                <br />
                {/* <Row>
                  <Col
                    xs={24}
                    sm={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      type="primary"
                      shape="circle"
                      style={{
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "60px",
                        height: "60px",
                      }}
                      icon={
                        <LiaBrainSolid
                          style={{ color: "#7cc059", fontSize: "30px" }}
                        />
                      }
                    />
                  </Col>
                  <Col xs={24} sm={18}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "25px",
                        fontWeight: 600,
                        color: "black",
                        textAlign: "left",
                        margin: "10px 0",
                      }}
                    >
                      {<>Prepare for the Future</>}
                    </Typography.Title>
                    <Typography.Text
                      className="fontFamily1"
                      style={{
                        fontSize: "16px",
                        color: "grey",
                        textAlign: "left",
                      }}
                    >
                      {
                        <>
                          We're commited to preparing you for success in the
                          real world
                        </>
                      }
                    </Typography.Text>
                  </Col>
                </Row> */}
              </Col>
              <Col
                xs={24}
                sm={12}
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className="videoBox"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "50px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <video autoPlay={true} muted loop className="homeVideo">
                    <source src={"/images/vdo.mp4"} type="video/mp4" />
                  </video>
                </div>
                {/* <div
                  style={{
                    position: "absolute",
                    height: "100px",
                    top: "-50px",
                    backgroundColor: "#7cc059",
                    borderRadius: "20px",
                    display: "flex",
                    padding: "0px 50px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Row>
                    <Col>
                      <Row
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography.Title
                          className="fontFamily1"
                          style={{
                            fontSize: "40px",
                            fontWeight: "normal",
                            color: "white",
                            textAlign: "left",
                            margin: "10px 0",
                          }}
                        >
                          10
                        </Typography.Title>
                        &emsp;
                        <Typography.Text
                          className="fontFamily1"
                          style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            color: "white",
                            textAlign: "left",
                          }}
                        >
                          {
                            <>
                              YEARS <br /> EXPERIANCE
                            </>
                          }
                        </Typography.Text>
                        &emsp;
                        <Typography.Text
                          className="fontFamily1"
                          style={{
                            fontSize: "40px",
                            fontWeight: "normal",
                            color: "white",
                            textAlign: "left",
                            margin: "10px 0",
                          }}
                        >
                          |
                        </Typography.Text>
                        &emsp;
                        <Typography.Title
                          className="fontFamily1"
                          style={{
                            fontSize: "40px",
                            fontWeight: "normal",
                            color: "white",
                            textAlign: "left",
                            margin: "10px 0",
                          }}
                        >
                          250
                        </Typography.Title>
                        &emsp;
                        <Typography.Text
                          className="fontFamily1"
                          style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            color: "white",
                            textAlign: "left",
                          }}
                        >
                          {
                            <>
                              TYPES OF <br /> COURSES
                            </>
                          }
                        </Typography.Text>
                      </Row>
                    </Col>
                  </Row>
                </div> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>


{/* section 4 */}
<Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: "35px",
                fontWeight: 600,
                color: "black",
                textAlign: "center",
              }}
            >
              Join Us
            </Typography.Title>

          
            <Row gutter={30} justify="center" style={{ margin: "50px 0" }}>
            
              <Col xs={24} sm={10}>
                <Card
                  className="joinCard1"
                  bordered={false}
                  style={{
                    width: "100%",
                    height: "500px",
                    borderRadius: "50px",
                    display: "flex",
                    padding:"20px",
                    flexDirection: "column",
                  }}
                >
                   <div class="animation-blue">
                                <img class="cirlce-small" src="/images/cirlce-small-blue.png" alt="" />
                                <img class="circle" src="/images/circle.png" alt=""/>
                                <img class="kaju" src="/images/kaju-blue.png" alt=""/>
                            </div>
                  
                  {" "}
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                 
                 <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: window.innerWidth < 500 ? "25px" :"35px",
                          fontWeight: 600,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        {<>Become a Tutor <br/> or Coach</>}
                      </Typography.Title>
                      {window.innerWidth < 500 ? 
                      <Typography.Text
                  className="fontFamily1"
                  style={{fontSize: "12px", color: "white", textAlign: "left" }}
                >
                  {
                    <>
                   Are you ready to make a positive <br/> impact on learner's lives?</>
                  }
                </Typography.Text> :                      <Typography.Text
                  className="fontFamily1"
                  style={{fontSize: "18px", color: "white", textAlign: "left" }}
                >
                  {
                    <>
                     Are you ready to make a positive <br/> impact on learner's lives?</>
                  }
                </Typography.Text> }
                
                  </Row>
                  <br/>
                  <Row>
                  <a href="https://tutor.zipperlearning.com/signup">
                <Button
                        style={{
                          marginTop: "10px",
                          padding: "15px 40px",
                          cursor: "pointer",
                          height:"auto",
                          borderWidth:"2px"
                        }}
                      
                        ghost
                        size="large"
                      >
                        Apply Now
                      </Button>
                      </a>
                </Row>
             
                </Card>
             
              </Col>
              <Col xs={24} sm={10}>
                <Card
                  bordered={false}
                  className="joinCard2"
                  style={{
                    width: "100%",
                    height: "500px",
                    borderRadius: "50px",
                    display: "flex",
                    padding:"20px",
                    flexDirection: "column",
                    
                  }}
                >
                     <div class="animation-blue">
                                <img class="cirlce-small" src="/images/cirlce-small-blue.png" alt="" />
                                <img class="circle" src="/images/circle.png" alt=""/>
                                <img class="kaju" src="/images/kaju-blue.png" alt=""/>
                            </div>
                  
                  {" "}
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                 
                 <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: window.innerWidth < 500 ? "25px" :"35px",
                          fontWeight: 600,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        {<>Your Personalized <br/> Learning Path</>}
                      </Typography.Title>

                {window.innerWidth < 500 ? 
                      <Typography.Text
                  className="fontFamily1"
                  style={{fontSize: "12px", color: "white", textAlign: "left" }}
                >
                  {
                    <>
                   Step into a world full of opportunities where <br /> we always support and celebrate <br /> your growth and achievements.</>
                  }
                </Typography.Text> :                      <Typography.Text
                  className="fontFamily1"
                  style={{fontSize: "18px", color: "white", textAlign: "left" }}
                >
                  {
                    <>
                     Step into a world full of opportunities where we always support and celebrate your growth and achievements.</>
                  }
                </Typography.Text> }
                
                  </Row>
                  <br/>
                  <Row>
                 
                <Button
                        style={{
                          marginTop: "10px",
                          padding: "15px 40px",
                          cursor: "pointer",
                          height:"auto",
                          borderWidth:"2px"
                        }}
                        onClick={()=> navigate("/signup")}
                        ghost
                        size="large"
                      >
                        Register
                      </Button>
                     
                </Row>
             
                </Card>
              </Col>
            </Row>
           
          </div>
        </Col>
      </Row>

    </Layout>
  );
}

export default Homepage;
