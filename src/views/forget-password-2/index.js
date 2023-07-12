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
  InputNumber,
  Checkbox,
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
import { FiMail, FiLock } from "react-icons/fi";
import swal from "sweetalert";


// import router from "next/router";
const onFinish = (values) => {
  console.log("Success:", values);
  // router.push("/forget-password-2")
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function ForgetPassword2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);
  return (
     
    <Layout className="AuthBackground" style={{ minHeight: "100vh" }}>
      <Row>
        <Col xs={0} sm={0} md={14}>
        <div className="authImageBox">
          <Row style={{width:'100%',paddingRight:'20px'}} gutter={40}>
            <Col xs={0} sm={6} md={6}>
             <div className="authImage1" />
            </Col>
            <Col xs={0} sm={6} md={6}>
            <div className="authImage2" />
            </Col>
            <Col xs={0} sm={12} md={12}>
            <div className="authImage3" />
            </Col>
          </Row>
          </div>
        </Col>

        <Col xs={24} md={10}>
          <div className="authFormBox">
            <Row style={{ width: "100%", justifyContent: "center" }}>
              <Col xs={20} md={20} className="formWrap">
                <Row style={{ width: "100%", textAlign: "center" }}>
                  <Col xs={24} md={0}>
                    <Image
                      src={"/images/logo.png"}
                      style={{ maxWidth: "200px" }}
                      alt=""
                      preview={false}
                    />
                  </Col>
                </Row>

                <Typography.Title
                  className="fontFamily1"
                  style={{ fontSize: "30px", color: "white" }}
                >
                  Forgot Password
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{ fontSize: "14px", color: "white" }}
                >
                 An email has been sent to you with a verification code. Please enter it here.
                </Typography.Text>
                <br /> <br /><br />
                <Form
                  layout="vertical"
                  name="basic"
                  className="loginForm"
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
                    label="Verification Code*"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter verification code",
                      },
                    ]}
                  >
                    <InputNumber
                      size="large"
                      className="AuthFormInput"
                      style={{width:'50px'}}
                      placeholder="."
                    />
                    &emsp;
                     <InputNumber
                      size="large"
                      className="AuthFormInput"
                      style={{width:'50px'}}
                    />
                      &emsp;
                     <InputNumber
                      size="large"
                      className="AuthFormInput"
                      style={{width:'50px'}}
                    />
                      &emsp;
                     <InputNumber
                      size="large"
                      className="AuthFormInput"
                      style={{width:'50px'}}
                    />
                  </Form.Item>

                  
                  

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                      // onClick={() => navigate("/forgot-password-2")}
                    >
                      {loading ? "Loading..." : "Continue"}
                    </Button>
                  </Form.Item>
                </Form>
                <Row>
                    <Col xs={24} md={12}>
                      <Button
                        type="link"
                        style={{
                    
                          color: "white",
                          fontWeight: "bold",
                          textDecoration: "underline",
                          fontSize: "14px",
                        }}
                        onClick={() => navigate("/signin")}
                      >
                        <p className="fontFamily1" style={{ margin: 0 }}>
                          Back to Login
                        </p>
                      </Button>
                    </Col>
                  </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default ForgetPassword2;
