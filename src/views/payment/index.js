import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Button,
  Row,
  Avatar,
  Typography,
  Layout,
  Checkbox,
  Rate,
  Progress,
  Image,
  Card,
  Form,
  Spin,
  Input,
  Select,
  InputNumber,
  TimePicker,
} from "antd";
import { useNavigate, useParams } from "react-router";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { LESSON, PAYMENT, USERS } from "../../config/constants/api";
import { Post } from "../../config/api/post";
import { Get } from "../../config/api/get";
import { RATES, SERVICES } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { SUBJECTS, CONTENT_TYPE } from "../../config/constants/index";
import swal from "sweetalert";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
//icons
import { FaLongArrowAltLeft } from "react-icons/fa";
import { TbCameraPlus } from "react-icons/tb";
import { BsFiles } from "react-icons/bs";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
//icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lesson, setLesson] = useState({});
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);

  useEffect(() => {
    getLessonDetails();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    let data={...values,lesson:id}

    Post(PAYMENT.lessonPayment, data,token)
      .then((response) => {
        setLoading(false);
        console.log("response", response.data);
        if (response?.data?.status) {

         swal("Success!", response?.data?.message ||  response?.response?.data?.message, "success");
         navigate("/dashboard")
        } else {
          swal("Oops!", response?.data?.message ||  response?.response?.data?.message, "error");
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

  const getLessonDetails = async () => {
    try {
      const response = await Get(LESSON.getLessonById + id, token);

      console.log("response", response);
      if (response?.status) {
        setLesson(response?.data?.lesson);
      } else {
        swal("Error", response?.data?.message, "error");
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
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
          {<> Card Details</>}
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
                        label="Cardholder Name*"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your cardholder name!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Enter Cardholder Name"
                          className="ContactFormInput"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Credit / Debit Card No*"
                        name="cardNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please input your card number!",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          size="large"
                          maxLength={16}
                          placeholder="Enter your card number"
                          className="ContactFormInput2 "
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Expiry Date*"
                        name="month"
                        rules={[
                          {
                            required: true,
                            message: "Please select expiry month",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          className="signupSelectBox"
                          placeholder="Month"
                        >
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Expiry Date*"
                        name="year"
                        rules={[
                          {
                            required: true,
                            message: "Please select Expiry Year",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          className="signupSelectBox"
                          placeholder="Year"
                        >
                          {Array.from({ length: 50 }, (_, index) => (
                            <option key={index} value={23 + index}>
                              {23 + index}
                            </option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="CVV*"
                        name="cvv"
                        rules={[
                          {
                            required: true,
                            message: "Please input your CVV!",
                          },
                        ]}
                      >
                        <Input.Password
                          maxLength={3}
                          size="large"
                          placeholder="Enter CVV Number"
                          className="signupFormInput "
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
                      {loading ? "Loading..." : "Proceed"}
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

export default Payment;
