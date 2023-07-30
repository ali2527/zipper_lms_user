import React from "react";
import { Post } from "../../config/api/post";
import { useSelector, useDispatch } from "react-redux";
import { STUDENT } from "../../config/constants/api";
import { useNavigate,useLocation } from "react-router";
import { Col, Row, Typography, Layout, Card,Form,  Input,
  Button } from "antd";
import { FiMail, FiLock } from "react-icons/fi";
import swal from "sweetalert";

function ChangePassword() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const user = useSelector((state) => state.user?.userData);
  const token = useSelector((state) => state.user?.userToken);
  const [loading, setLoading] = React.useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    Post(STUDENT.changePassword, values,token)
      .then((response) => {
        setLoading(false);
        if (response?.data?.status) {
          swal("Success", response?.data?.message, "success");
          form.resetFields();
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
          {<>Change Password</>}
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
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "35px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                
                 Reset Password
                
              </Typography.Title>

              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                Set New Password for your Account
              </Typography.Text>

              <br/>
              <br/>

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
                    label="Old Password*"
                    name="old_password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your current password!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      prefix={<FiLock />}
                      placeholder="Enter Current Password"
                      className="signupFormInput"
                    />
                  </Form.Item>

                  <Form.Item
                    label="New Password*"
                    name="new_password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your new password!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      prefix={<FiLock />}
                      placeholder="Enter New Password"
                      className="signupFormInput"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password*"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your new password!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      prefix={<FiLock />}
                      placeholder="Confirm New Password"
                      className="signupFormInput"
                    />
                  </Form.Item>
                  <br />

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                    >
                      {loading ? "Loading..." : "Update Password"}
                    </Button>
                  </Form.Item>
                </Form>
        
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default ChangePassword;
