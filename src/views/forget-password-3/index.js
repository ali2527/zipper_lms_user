import React from "react";
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
  // import router from "next/router";

  
function ForgetPassword() {

    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

      

  return (

<Layout style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <Row>
          <Col xs={24} md={12} className="formMainWrap">
            <Row
              style={{
                position: "absolute",
                top: 0,
                left: 50,
                padding: "30px 60px",
                textAlign: "left",
              }}
            >
              <Col xs={0} md={24}>
                <Image src={"/images/logo.png"} alt="" preview={false} />
              </Col>
            </Row>

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

                <h2 class="authFormHeading">Password Recovery</h2>
                <p>Enter your new Password.</p>
                <br />
                <Form
                  layout="vertical"
                  name="basic"
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
                    label="New Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input New password!",
                      },
                      {
                        type: "string",
                        min: 8,
                        message: "password must be atleast 8 characters!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Enter New Password"
                      style={{
                        borderRadius: "100px",
                        fontSize: "14px",
                        padding: "10px 20px",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input New password!",
                      },
                      {
                        type: "string",
                        min: 8,
                        message: "password must be atleast 8 characters!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Confirm New Password"
                      style={{
                        borderRadius: "100px",
                        fontSize: "14px",
                        padding: "10px 20px",
                      }}
                    />
                  </Form.Item>
       
                  <br />

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{
                        fontSize: "16px",
                        backgroundColor: "#385790",
                        padding: "10px",
                        height: "auto",
                        borderRadius: "100px",
                      }}
                    >
                      Continue
                    </Button>
                  </Form.Item>
                </Form>
                <Row
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Button
                    type="link"
                    style={{
                      textAlign: "center",
                      color: "#385790",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      fontSize: "14px",
                    }}
                    // onClick={() => router.push("/signin")}
                  >
                    Back To Login
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={12}>
            <div
              className="loginScreenContentWrapper"
              style={{ position: "relative" }}
            >
              <div class="loginScreenContent">
                <h2 class="authHeading">Explore Your Services</h2>
                <p class="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing a
                </p>
              </div>
              <div className="loginProp loginProp1">
                <Image src={"/images/loginProp1.png"} alt="" preview={false} />
              </div>
              <div className="loginProp loginProp2">
                <Image src={"/images/loginProp2.png"} alt="" preview={false} />
              </div>
              <div className="loginProp loginProp3">
                <Image src={"/images/loginProp3.png"} alt="" preview={false} />
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
      
     
  );
}

export default ForgetPassword;
