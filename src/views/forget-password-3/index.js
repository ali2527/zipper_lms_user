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
  Checkbox,
  Tabs,
  Table,
  Image,
  Divider,
} from "antd";
import { useNavigate,useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { FiMail, FiLock } from "react-icons/fi";
import swal from "sweetalert";

// import router from "next/router";

function ForgotPassword3() {
  const {state} = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      password: values.password,
      confirmPassword:values.confirmPassword,
      email:state.email,
      code:state.code
    };
    Post(AUTH.resetPassword, data)
      .then((response) => {
        setLoading(false);
        if (response?.data?.status) {
          swal("Success", response?.data?.message, "success");
          navigate("/signin", { replace: true });
        } else {
          swal("Oops!", response?.data?.message || response?.response?.data?.message, "error");
        }
      })
      .catch((e) => {
        swal("Oops!","internal server error", "error");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
            <Col xs={0} sm={6} md={6}>
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
                Set New Password for your Account
                </Typography.Text>
                <br /> <br />
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
                      prefix={<FiLock />}
                      placeholder="Enter password"
                      className="AuthFormInput"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password*"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      prefix={<FiLock />}
                      placeholder="Re-enter password"
                      className="AuthFormInput"
                    />
                  </Form.Item>
                  <br />

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                    >
                      {loading ? "Loading..." : "Update"}
                    </Button>
                  </Form.Item>
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
                          Back to Log In
                        </p>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default ForgotPassword3;
