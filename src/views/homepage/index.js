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
import {TbBolt} from "react-icons/tb"
import {LiaBrainSolid} from "react-icons/lia"
import swal from "sweetalert";

// import router from "next/router";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

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
      <Row>
        <Col xs={24} md={10}>
          <div className="heroSection">
            <Row style={{ width: "100%", justifyContent: "center" }}>
              <Col xs={20} md={20} className="formWrap">
                <Typography.Title
                  className="fontFamily1"
                  style={{ fontSize: "55px", color: "white" }}
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
                  style={{ fontSize: "20px", color: "white" }}
                >
                  Achieve Your Goals and Thrive in Today's Fast-Paced World.
                  This is Youy Gateway to Success.
                </Typography.Text>
                <br />
                <br />
                <br />
                <Input
                  className="heroSerch"
                  placeholder="Find You tutor & coach"
                  suffix={
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="heroButton"
                    >
                      Search
                    </Button>
                  }
                  size="large"
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={0} sm={0} md={14}>
          <div className="authImageBox">
            <Row style={{ width: "100%", paddingRight: "20px" }} gutter={40}>
              <Col xs={0} sm={6} md={6}>
                <div className="authImage3 " />
              </Col>
              <Col xs={0} sm={6} md={6}>
                <div className="authImage2" />
              </Col>
              <Col xs={0} sm={12} md={12}>
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
        <Col xs={24} md={22}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100vh",
              padding: "20px",
            }}
          >
            <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: "35px",
                fontWeight: 800,
                color: "black",
                textAlign: "center",
              }}
            >
              Discover Your Ideal Tutor or Coach.
            </Typography.Title>

            <Typography.Text
              className="fontFamily1"
              style={{ fontSize: "16px", color: "grey", textAlign: "center" }}
            >
              {
                <>
                  We provide top-notch online tutoring and coaching services for{" "}
                  <br /> K-12 and adult learners like you
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
                    height: "300px",
                    borderRadius: "50px",
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
                    }}
                  >
                    <Col span={12}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={12}
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
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard2"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "50px",
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
                    }}
                  >
                    <Col span={12}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={12}
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
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard3"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "50px",
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
                    }}
                  >
                    <Col span={12}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={12}
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
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard4"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "50px",
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
                    }}
                  >
                    <Col span={12}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={12}
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
              <Col xs={22} sm={12} md={4}>
                <Card
                  bordered={false}
                  className="coachCard5"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "50px",
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
                    }}
                  >
                    <Col span={12}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        Mathematics Course
                      </Typography.Title>
                    </Col>
                    <Col
                      span={12}
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
              <Button type="primary" htmlType="submit" className="heroButton">
                View All
              </Button>
            </Row>
          </div>
        </Col>
      </Row>

      {/* section 3 */}

      <Row
        style={{ backgroundColor: "#f8fbff", justifyContent: "center" }}
      >
        <Col xs={24} md={22}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100vh",
              padding: "20px",
            }}
          >
             <Row style={{ justifyContent: "center",alignItems:'center' }}>
        <Col xs={24} sm={12}>
        <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: "35px",
                fontWeight: 800,
                color: "black",
                textAlign: "left",
                margin:"10px 0"
              }}
            >
              {<>Ignite Your Passion<br/> for Knowledge.</>}
            </Typography.Title>
        </Col>
        <Col xs={24} sm={12}>
        <Typography.Text
              className="fontFamily1"
              style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
            >
              {
                <>
                 We are not just here to help you pass exams- we want to instill a <br/> genuine love for learning that lasts a lifetime. We're all about <br/> building strong , long lasting connetions between learners, turors <br/> and coaches{" "}
                  
                </>
              }
            </Typography.Text>
          </Col>
            </Row>
            <br/><br/>
            <Row gutter={50} style={{ justifyContent: "center",alignItems:'center' }}>
        <Col xs={24} sm={10}>
          <Row>
            <Col xs={24} sm={6} style={{display:"flex",alignItems:'center', justifyContent:"flex-start"}}>
            <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width:"60px",
                          height:"60px"
                        }}
                        icon={<PiMedal style={{ color: "#7cc059",fontSize:'25px' }} />}
                      />
            </Col>
            <Col xs={24} sm={18}>
            <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: "25px",
                fontWeight: 800,
                color: "black",
                textAlign: "left",
                margin:"10px 0"
              }}
            >
              {<>More than just Tutoring<br/> or Coaching</>}
            </Typography.Title>
            <Typography.Text
              className="fontFamily1"
              style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
            >
              {
                <>
                 With our supportive tutor and coaches by your side. you'll gain the confidence to tackel any challange
                  
                </>
              }
            </Typography.Text>
            </Col>
          </Row>
          <br/><br/>
          <Row>
            <Col xs={24} sm={6} style={{display:"flex",alignItems:'center', justifyContent:"flex-start"}}>
            <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width:"60px",
                          height:"60px"
                        }}
                        icon={<TbBolt style={{ color: "#7cc059",fontSize:'25px' }} />}
                      />
            </Col>
            <Col xs={24} sm={18}>
            <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: "25px",
                fontWeight: 800,
                color: "black",
                textAlign: "left",
                margin:"10px 0"
              }}
            >
              {<>Adaptable Learning</>}
            </Typography.Title>
            <Typography.Text
              className="fontFamily1"
              style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
            >
              {
                <>
                 Enjoy a learning that fits your style, and learn at your own pace
                  
                </>
              }
            </Typography.Text>
            </Col>
          </Row>
          <br/><br/>
          <Row>
            <Col xs={24} sm={6} style={{display:"flex",alignItems:'center', justifyContent:"flex-start"}}>
            <Button
                        type="primary"
                        shape="circle"
                        style={{
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width:"60px",
                          height:"60px"
                        }}
                        icon={<LiaBrainSolid style={{ color: "#7cc059",fontSize:'30px' }} />}
                      />
            </Col>
            <Col xs={24} sm={18}>
            <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: "25px",
                fontWeight: 800,
                color: "black",
                textAlign: "left",
                margin:"10px 0"
              }}
            >
              {<>Prepare for the Future</>}
            </Typography.Title>
            <Typography.Text
              className="fontFamily1"
              style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
            >
              {
                <>
                We're commited to preparing you for success in the real world
                </>
              }
            </Typography.Text>
            </Col>
          </Row>
          
       
        </Col>
        <Col xs={24} sm={14}>
  
          </Col>
            </Row>

          

           
         
          </div>
        </Col>
      </Row>

    </Layout>
  );
}

export default Homepage;
