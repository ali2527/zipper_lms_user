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
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { FiMail, FiLock } from "react-icons/fi";
import swal from "sweetalert";

// import router from "next/router";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  // useEffect if user is already logged in
  // React.useEffect(() => {
  //   if (user && token) {
  //     navigate("/", { replace: true });
  //   }
  // }, [user, token]);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    let data = {
      email: values.email,
      password: values.password,
    };
    Post(AUTH.signin, data)
      .then((response) => {

        console.log(response,"#####")
        setLoading(false);
        if (response?.data?.status) {
          navigate("/dashboard", { replace: true });

          dispatch(
            addUser({ user: response.data.data.user, token: response.data.data.token })
          );
          swal("Success", response.data.message, "success");
         
        } else {
          
          console.log("response", response);
          swal("Oops!", response.data.message, "error");
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
        <Col xs={0} sm={0} md={14}>
          <div className="authImageBox">
            <Row style={{ width: "100%", paddingRight: "20px" }} gutter={40}>
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
                  Log Into Zipper Learning
                </Typography.Title>
                <br />
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
                    label="Email Address*"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Please input valid email!",
                        // warningOnly: true,
                      },
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Email Address"
                      className="AuthFormInput"
                      prefix={<FiMail />}
                    />
                  </Form.Item>

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
                      placeholder="Enter Password"
                      className="AuthFormInput"
                    />
                  </Form.Item>
                  <Row>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        style={{ marginBottom: 0, color: "white" }}
                      >
                        <Checkbox style={{ marginBottom: 0, color: "white" }}>
                          {" "}
                          <p className="fontFamily1" style={{ margin: 0 }}>
                            Remember Me
                          </p>
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Button
                        type="link"
                        style={{
                          float: "right",
                          color: "white",
                          fontWeight: "bold",
                          textDecoration: "underline",
                          fontSize: "14px",
                        }}
                        onClick={() => navigate("/forgot-password")}
                      >
                        <p className="fontFamily1" style={{ margin: 0 }}>
                          Forgot Password?
                        </p>
                      </Button>
                    </Col>
                  </Row>
                  <br />

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                    >
                      {loading ? "Loading..." : "Log In"}
                    </Button>
                  </Form.Item>
                </Form>
              
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textAlign: "left",
                    marginTop: 0,
                    marginBottom: 30,
                  }}
                >
                  <>Not a User? <span onClick={()=> navigate("/signup")} style={{cursor:'pointer',fontWeight:'bold',textDecoration:"underline"}}>Register</span></>
                </Typography.Text>

              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Signin;
