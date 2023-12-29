import React from "react";
import {Form,Checkbox,Input, Col, Row, Typography, Layout, Card,Button } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { QUERY } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";

//icons
import {IoMdPin} from "react-icons/io";
import {FaEnvelope} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import { FiMail, FiLock } from "react-icons/fi";


function ContactUs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();




  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    Post(QUERY.addQuery, values)
      .then((response) => {
        console.log("response",response)
        setLoading(false);
        if (response?.data?.status) {
          swal("Success!", "Thankyou for your message. Our team will get back to you soon", "success");
          form.resetFields()
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
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{ fontSize: "30px", color: "white",marginTop:20, marginBottom:0 }}
        >
          {<> Contact Us</>}
        </Typography.Title>
        <Typography.Text
          className="fontFamily1"
          style={{ fontSize: "18px", color: "white",margin:10 }}
        >
                {<> We'd love to hear from you.</>}
        </Typography.Text>
      </Row>



      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={10}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "50px 20px",
            }}
          >
            <Card
              className="contactCard1"
              bordered={false}
              style={{
                width: "100%",
                padding: "20px",
              }}
            >
                 <Form
                  layout="vertical"
                  name="basic"
                  form={form}
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
                   <Form.Item
                    label="Full Name*"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Full Name"
                      className="ContactFormInput"
                    
                    />
                  </Form.Item>

                  <Form.Item
                    label="Email*"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Please input valid email!",
                      },
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Email"
                      className="ContactFormInput"
                    
                    />
                  </Form.Item>

                  <Form.Item
                    label="Subject*"
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: "Please input your subject",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Subject"
                      className="ContactFormInput"
                    
                    />
                  </Form.Item>

                  <Form.Item
                    label="Message*"
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Please input your message",
                      },
                    ]}
                  >
                  <Input.TextArea
                      size="large"
                      placeholder="Enter Message"
                      className="ContactFormTextField"
                      rows={4}
                    
                    />
                  </Form.Item>

                  
            
                  <br />

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                    >
                      {loading ? "Loading..." : "Submit"}
                    </Button>
                  </Form.Item>
                </Form>
            </Card>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "50px 20px",
            }}
          >
            <Card
              className="contactCard2"
              bordered={false}

            >
              <Row  style={{
                width: "100%",
                padding: "20px",
                display:'flex',
                flexDirection:"column",
                justifyContent:'center',
                alignItems:'center'
              }}>
 <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "center",
                  marginTop: 0,
                }}
              >
                {
                  <>
                   Get in touch with us today.
                  </>
                }
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "14px", color: "grey", textAlign: "center",justifyContent:"center" }}
              >
We're here to serve and support our learners.              </Typography.Text>


              <Button
                      type="primary"
                      shape="circle"
                      style={{
                        backgroundColor: "#86D6E0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        height: "50px",
                        marginTop:"30px"
                      }}
                      icon={
                        <FaEnvelope
                          style={{ color: "white", fontSize: "20px" }}
                        />
                      }
                    />
                    <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                {
                  <>
               info@zipperlearning.com
                  </>
                }
              </Typography.Text>

              </Row>
              <br/>
              <br/>
             
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default ContactUs;
