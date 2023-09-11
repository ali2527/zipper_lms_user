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
import { useNavigate,useParams } from "react-router";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { LESSON,UPLOADS_URL, CHAT } from "../../config/constants/api";
import { Post } from "../../config/api/post";
import { Get } from "../../config/api/get";
import { RATES,SERVICES } from "../../config/constants/api";
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
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function LessonDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lesson,setLesson]= useState({});
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);


  useEffect(()=>{
    getLessonDetails();
  },[])


  const createChat = () => {
    try {
      Post(CHAT.createChat,{ student:user._id,
      coach:lesson?.coach?._id},token)
      .then((response) => {
        if (response?.data?.status) { 
          navigate('/chat')
        } else {
          swal("Oops!", response.data.message, "error");
        }
      })
      .catch((e) => {
        setLoading(false);
      });
    
    } catch (err) {
      console.log(err);
    }
  }



  const getLessonDetails = async () =>{

    try {
      const response = await Get(LESSON.getLessonById + id,token);

      console.log("response",response)
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
  }



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
          {<> Lesson Detail</>}
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
              {loading && <Row style={{minHeight:"50vh"}} className="flex">
              <Spin size="large" />
                </Row>}
             {!loading && <Row>
                <Col xs={24} md={22}>
                  <Row>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson ID
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {lesson?.lessonId}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        No. of Lessons
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {lesson?.noOfLesson}
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Type
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {lesson.lessonType}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Service/ Subject Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {lesson?.subject &&
                          lesson?.subject[0].toUpperCase() +
                            lesson?.subject.slice(1)}
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Date
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {dayjs(lesson?.LessonDate).format("DD/MM/YYYY")}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Time
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {lesson?.slots?.length > 0 &&
                          lesson?.slots.map((item) => {
                            return (
                              <>
                                {dayjs(item.lessonStartTime).format("hh:mm a") +
                                  " to " +
                                  dayjs(item.lessonEndTime).format("hh:mm a")}
                              </>
                            );
                          })}
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={5}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Lesson Charge
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        ${lesson.charges}
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Typography.Text
                      className="fontFamily1"
                      style={{
                        fontSize: "18px",
                        textDecoration: "underline",
                        color: "grey",
                        textAlign: "left",
                      }}
                    >
                      Coach/ Tutor General Information
                    </Typography.Text>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      {" "}
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Coach/ Tutor Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {lesson?.coach?.firstName +
                          " " +
                          lesson?.coach?.lastName}
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 20 }}>
                    <Button
                      className="fontFamily1"
                      style={{
                        marginTop: "0px",
                        padding: "10px 30px",
                        cursor: "pointer",
                        color: "black",
                        height: "auto",
                        border: "1px solid #203657",
                        fontWeight: "bold",
                      }}
                      onClick={() => {lesson.lessonType == "COACHING" ? navigate("/coach-details/" + lesson.coach._id) : navigate("/tutor-details/" + lesson.coach._id)}}
                      ghost
                      size="large"
                    >
                      View Profile
                    </Button>
                  </Row>

                 {(lesson.status == "UPCOMING") &&  <Row style={{ marginTop: 30 }}>
                    {lesson.isPaid ? (
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="loginButton"
                        onClick={() => createChat()}
                      >
                        View Chat
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="loginButton"
                        onClick={() => navigate("/payment/"+id)}
                      >
                        Make Payment
                      </Button>
                    )}
                    &emsp;
                  </Row>}
                </Col>
                <Col xs={0} md={2}>
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                    {
                      <>
                        Status: <span style={{ color: "red" }}>{lesson?.status}</span>
                      </>
                    }
                  </Typography.Title>
                </Col>
              </Row>}
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default LessonDetail;
