import React from "react";
import {Form,Checkbox,Input, Col, Row,Select, Typography, Layout, Card,Button } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";

//icons
import {IoMdPin} from "react-icons/io";
import {FaEnvelope} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import { FiMail, FiLock } from "react-icons/fi";

function Signup() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const { Option } = Select;
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (user && token) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, token]);


  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
   
    const day = parseInt(values.birthday);
const month = parseInt(values.birthmonth) - 1; // Months are zero-based in JavaScript (0-11)
const year = parseInt(values.birthyear);

const birthday = new Date(year, month, day);

    let data = {
      firstName:values.firstName,
      lastName:"",
      email: values.email,
      password: values.password,
      city:values.city,
      age: values.age,
      parent:values.parent,
      phoneNumber:values.phone,
      homeNumber:"",
      school:values.school,
      gradeLevel:values.grade,
      city:values.city,
      state:values.state,
      zip:values.zip,
      subjects:values.subjects.split(",").map((value) => value.trim()),      
    };
    Post(AUTH.signup, data)
      .then((response) => {
        setLoading(false);

        console.log(response,"response;;;")


        if (response?.data?.status) {
          swal("Success", response?.data?.message, "success");
          navigate("/signin", { replace: true });
        } else {
          swal("Oops!", response?.data?.message || response?.response?.data?.message, "error");
        }
      })
      .catch((e) => {
        console.log(e,"ww")
        swal("Oops!","internal server error", "error");
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
          {<> Register</>}
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
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Personal Information
              </Typography.Title>

              <Form
                  layout="vertical"
                  name="basic"
                  className="contactForm"
                  labelCol={{
                    span: 0,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Learner's Name*"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Full Name"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                    {/* <Col xs={24} md={12}>
                    <Form.Item
                    label="Last Name*"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter LastName"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col> */}
                       <Col xs={24} md={12}>
                    <Form.Item
                    label="Parent / Guardian Name* (Type N/A if you are the learner)"
                    name="parent"
                    rules={[
                      {
                        required: true,
                        message: "Please input parent / Guardian name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Parent / Guardian Name"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                    
                  </Row>
{/* 
                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Date of Birth*"
                    name="birthmonth"
                    rules={[
                      {
                        required: true,
                        message: "Please select birth month",
                      },
                    ]}
                  >
                    <Select size="large" className="signupSelectBox" placeholder="Select Month">
                    <option value="01">January</option>
  <option value="02">February</option>
  <option value="03">March</option>
  <option value="04">April</option>
  <option value="05">May</option>
  <option value="06">June</option>
  <option value="07">July</option>
  <option value="08">August</option>
  <option value="09">September</option>
  <option value="10">October</option>
  <option value="11">November</option>
  <option value="12">December</option>
      </Select>
                  </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                    <Row gutter={20}>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label=" "
                    name="birthday"
                    rules={[
                      {
                        required: true,
                        message: "Please select birth day",
                      },
                    ]}
                  >
                    <Select size="large" className="signupSelectBox" placeholder="Select Day">
                    <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  <option value="16">16</option>
  <option value="17">17</option>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="22">22</option>
  <option value="23">23</option>
  <option value="24">24</option>
  <option value="25">25</option>
  <option value="26">26</option>
  <option value="27">27</option>
  <option value="28">28</option>
  <option value="29">29</option>
  <option value="30">30</option>
  <option value="31">31</option>
      </Select>
                  </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label=" "
                    name="birthyear"
                    rules={[
                      {
                        required: true,
                        message: "Please select birth year",
                      },
                    ]}
                  >
                    <Select size="large" className="signupSelectBox" placeholder="Select Year">
                      
                    {Array.from({ length: 2024 - 1980 }, (_, index) => (
    <option key={index} value={1980 + index}>
      {1980 + index}
    </option>
  ))}
      </Select>
                  </Form.Item>
                    </Col>
                    </Row>
                   
                    </Col>
                  </Row> */}

                  <Row gutter={20}>
                    
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Email Address*"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Email Address"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Grade Level*"
                    name="grade"
                    rules={[
                      {
                        required: true,
                        message: "Please input grade Level",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Grade"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Phone Number*"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input Phone Number!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Phone Number"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                    {/* <Col xs={24} md={12}>
                    <Form.Item
                    label="Home Number*"
                    name="homeNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input home Number",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Home Number"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col> */}
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                      {
                        required: true,
                        message: "Please input Age",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Age"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                  </Row>

     

                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="City*"
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Please input city name",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter City"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="State*"
                    name="state"
                    rules={[
                      {
                        required: true,
                        message: "Please input state",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter State"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Zip"
                    name="zip"
                    rules={[
                      {
                        required: true,
                        message: "Please input zip code",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Zip Code"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Interested Subjects*"
                    name="subjects"
                    rules={[
                      {
                        required: true,
                        message: "Enter Interested Subjects",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Interested Subjects (comma separated)"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                  </Row>

       


<br/>
                  <Row>
                  <Form.Item
                        name="remember"
                        valuePropName="checked"
                        style={{ marginBottom: 0, color: "white" }}
                      >
                        <Checkbox style={{ marginBottom: 0, color: "grey" }}>
                          {" "}
                          <p className="fontFamily1" style={{ margin: 0 }}>
                          By checking this box, you are confirming that you have read and agree to Zipper Learning’s <span style={{cursor:'pointer', color:"#1677ff"}} onClick={() => navigate("/terms-and-conditions")}>Terms and Conditions</span> and <span style={{cursor:'pointer', color:"#1677ff"}} onClick={() => navigate("/privacy-policy")}>Privacy Policy</span>. 
                          </p>
                        </Checkbox>
                      </Form.Item>


                      
                  </Row>
                  <br/>

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
                Login Credentials
              </Typography.Title>

              <Row gutter={20}>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Password*"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                    
                      placeholder="Enter password"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label="Confirm Password*"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password",
                      },
                    ]}
                  >
                   <Input.Password
                      size="large"
                    
                      placeholder="Re-enter password"
                      className="signupFormInput"
                    
                    />
                  </Form.Item>
                    </Col>
                  </Row>
                                   
            
                  <br />

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                    >
                      {loading ? "Loading..." : "Register"}
                    </Button>
                  </Form.Item>
                </Form>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
                    color: "#3C3C3B",
                    textAlign: "left",
                    marginTop: 0,
                    marginBottom: 30,
                  }}
                >
                  <>Already have an account <span onClick={()=> navigate("/signin")} style={{cursor:'pointer',fontWeight:'bold',textDecoration:"underline"}}>Login Now</span></>
                </Typography.Text>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Signup;
