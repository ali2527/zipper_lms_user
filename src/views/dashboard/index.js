import React, { useEffect, useState } from "react";
import {
  Form,
  Slider,
  Input,
  Col,
  Row,
  Typography,
  Layout,
  Rate,
  Card,
  Tag,Space,Table,
  Button,
  Progress,
  message,
  Avatar,
  Image,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import { Get } from "../../config/api/get";
import ReactPaginate from "react-paginate";
import { UPLOADS_URL,AUTH,LESSON, STUDENT } from "../../config/constants/api";
import dayjs from "dayjs";
import {AiOutlineEye} from "react-icons/ai";
import {BiSolidMessageAltDetail} from "react-icons/bi"


//icons
import { FaArrowRight ,FaArrowLeft,FaUserAlt,FaBox,FaUsers } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [upcomingLessons,setUpcomingLessons] = useState([]);
  const [liveLessons,setLiveLessons] = useState([]);
  const [tutors,setTutors] = useState([]);
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState([10, 200]);
  const item = { rating: 4 };


  useEffect(()=>{
    getUpcomingLessons()
    getLiveLessons()
    getMyTutors()
  },[])


  const columns = [
    {
      title: "S. No.	",
      dataIndex: "key",
      key: "key",
      width: 100,
      render: (value, item, index) => (index < 9 && "0") + (index + 1),
    },
    {
      title: "Lesson ID",
      dataIndex: "lessonId",
      key: "lessonId",
    },
    {
      title: "Tutor/Coach Name",
      dataIndex: "coach",
      key: "coach",
      render: (item) => <span>{item.firstName + " " + item.lastName}</span>,
    },
    {
      title: "Lesson Date",
      dataIndex: "lessonDate",
      key: "lessonDate",
      render: (item) => <span>{dayjs(item).format("M/D/YYYY")}</span>,
    },
    {
      title: "Lesson Charge",
      dataIndex: "charges",
      key: "charges",
      render: (item) => <span>${item}</span>,
    },
    {
      title: "Lesson Type",
      dataIndex: "lessonType",
      key: "lessonType",
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (item) => (
        <AiOutlineEye
          style={{ fontSize: "18px", color: "grey",  cursor: "pointer" }}
             onClick={() => navigate("/lesson-detail/"+item )}
        />
      ),
    },
  ];



  const columns2 = [
    {
      title: "S. No.	",
      dataIndex: "key",
      key: "key",
      width: 100,
      render: (value, item, index) => (index < 9 && "0") + (index + 1),
    },
    {
      title: "Lesson ID",
      dataIndex: "lessonId",
      key: "lessonId",
    },
    {
      title: "Tutor/Coach Name",
      dataIndex: "coach",
      key: "coach",
      render: (item) => <span>{item.firstName + " " + item.lastName}</span>,
    },
    {
      title: "Lesson Date",
      dataIndex: "lessonDate",
      key: "lessonDate",
      render: (item) => <span>{dayjs(item).format("M/D/YYYY")}</span>,
    },
    {
      title: "Lesson Charge",
      dataIndex: "charges",
      key: "charges",
      render: (item) => <span>${item}</span>,
    },
    {
      title: "Lesson Type",
      dataIndex: "lessonType",
      key: "lessonType",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Payment",
      dataIndex: "isPaid",
      key: "isPaid",
      render: (item) => <span style={{color:item ? "#76ba53" : "red"}}>{item ? "Paid" : "Pending"}</span>,
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (item) => (
        <AiOutlineEye
          style={{ fontSize: "18px", color: "grey",  cursor: "pointer" }}
             onClick={() => navigate("/lesson-detail/"+item )}
        />
      ),
    },
  ];


  const getMyTutors = async (pageNumber, pageSize, search, reset = false) => {
    setLoading(true);
    try {
      const response = await Get(STUDENT.getMyCoaches, token, {
        page: "1",
        limit: 5
      });
      setLoading(false);
      console.log("response", response);
      if (response?.status) {
        setTutors(response?.data);
      } else {
        // message.error(response.message);
        console.log("error====>", response);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };


  const getUpcomingLessons = async (pageNumber, pageSize, search, reset = false) => {
    setLoading(true);
    try {
      const response = await Get(LESSON.getUpcomingLessons, token, {
        page:"1",
        limit: 5,
      });
      setLoading(false);
      console.log("response", response);
      if (response?.status) {
        setUpcomingLessons(response?.data?.docs);
      } else {
        // message.error(response.message);
        console.log("error====>", response);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const getLiveLessons = async (pageNumber, pageSize, search, reset = false) => {
    setLoading(true);
    try {
      const response = await Get(LESSON.getLiveLessons, token, {
        page: "1",
        limit: 5
      });
      setLoading(false);
      console.log("response", response);
      if (response?.status) {
        setLiveLessons(response?.data?.docs);
      } else {
        // message.error(response.message);
        console.log("error====>", response);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };



  const onSearch = (value) => console.log(value);

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
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="blueBackground"
        style={{
          height: "45vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{
            fontSize: "30px",
            color: "white",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {<> Dashboard</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          padding: "50px",
        }}
        gutter={20}
      >
        <Col xs={24} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "10px",
            }}
          >
            <Card className="contactCard2" bordered={false}>
              <Row
                style={{
                  width: "100%",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                 <Avatar
                size={200}
                src={
                  !user.image ? "/images/avatar.png" : UPLOADS_URL + "/" + user.image
                }
              />
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "black",
                    textAlign: "left",
                    marginTop: 20,
                  }}
                >
               {user?.firstName + " " + user?.lastName } 
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "12px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  {user?.bio}
                </Typography.Text>

                <br />

                <Button
                  type="primary"
                  htmlType="submit"
                  className="upcomingButton"
                  onClick={() => navigate("/upcoming-lessons")}
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                   <FaUserAlt style={{fontSize:'12px',color:"#E86AAF"}}/>

                  </div>}
                >
                 Upcoming Lessons
                </Button>
                <br/>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="completedButton"
                  onClick={() => navigate("/completed-lessons")}
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                   <FaBox style={{fontSize:'12px',color:"#649BAB"}}/>

                  </div>}
                >
                 Completed Lessons
                </Button>
                <br/>

                
                <Button
                  type="primary"
                  htmlType="submit"
                  className="messageButton"
                  onClick={() => navigate("/chat")}
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                    <BiSolidMessageAltDetail style={{fontSize:'14px',color:"#6FAF4D"}}/>


                  </div>}
                >
                Message
                </Button>
                <br/>
                {/* <Button
                  type="primary"
                  htmlType="submit"
                  className="tutorButton"
                  icon={<div style={{backgroundColor:"white",borderRadius:"20px",padding:7}}>
                   <FaUsers style={{fontSize:'12px',color:"#649BAB"}}/>

                  </div>}
                >
                My Tutors/Coaches
                </Button> */}
                <br/>


              </Row>
            </Card>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Row>
              <Card
                className="tutorDetailCard"
                style={{ width: "100%" }}
                bordered={false}
              >
                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px 30px 0 30px",
                  }}
                >
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                    Live Lesson
                  </Typography.Title>

                  <Table pagination={false} className="styledTable2" columns={columns} dataSource={liveLessons} />
                </Row>

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px",
                  }}
                >
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 10,
                    }}
                  >
                    Upcoming Lessons
                  </Typography.Title>

                  <Table pagination={false} className="styledTable2" columns={columns2} dataSource={upcomingLessons} />
                </Row>

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px",
                  }}
                >
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                   My Tutors/Coaches
                  </Typography.Title>

                  <Row gutter={20} justify="flex-start" style={{ margin: "20px 0" }}>
           {tutors.length > 0 && tutors.map(item => {
            return(<Col >
              <Card
                bordered={false}
                style={{
                  background:`Url(${UPLOADS_URL + "/" + item.image})`,
                  backgroundSize:"cover",
                  backgroundPosition:"center",
                  width: "185px",
                  filter:"gray saturate(0%) brightness(70%) contrast(1000%)",
                  height: "250px",
                  borderRadius: "25px",
                  display: "flex",
                  padding:"20px 5px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                 <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)", // You can adjust the opacity here
        zIndex: 1,
        borderRadius: "25px",
        display: "flex",
        padding:"20px 5px",
        flexDirection:"column",
        justifyContent: "flex-end",
      }}
    >
 <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding:"0 10px"
                  }}
                >
                  <Col span={14}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "white",
                        textAlign: "left",
                        zIndex:3
                      }}
                    >
                     {item.firstName + " " + item.lastName}
                    </Typography.Title>
                  </Col>
                  <Col
                    span={10}
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
                      onClick={()=> {(item.applicationType == "COACHING" || item.applicationType == "BOTH")  ? navigate("/coach-details/"+item._id) : navigate("/tutor-details/"+item._id)}}
                      icon={<FaArrowRight style={{ color: "white" }} />}
                    />
                  </Col>
                </Row>
    </div>
               
              </Card>
            </Col>);
           })}
           
              
           
            </Row>
            {/* <Row style={{ justifyContent: "center" }}>
              <Button type="primary" htmlType="submit" className="loginButton">
                View All
              </Button>
            </Row> */}
                </Row>

                

                <br/>
                <br/>

                


              </Card>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Dashboard;
