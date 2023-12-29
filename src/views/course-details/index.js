import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Button,
  Row, Typography,
  Layout, Image,
  Card,
  Spin, Input,message
} from "antd";
import { useNavigate, useParams } from "react-router";
import { UPLOADS_URL, COURSE } from "../../config/constants/api";
import { Get } from "../../config/api/get";
import swal from "sweetalert";
import "react-alice-carousel/lib/alice-carousel.css";
//icons
import { BsDot } from "react-icons/bs";
//icons

function CourseDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalDocs: 0,
    totalPages: 0,
  });
  const [reviews,setReviews] = useState([])
  const [ratings,setRatings] = useState({})
  const [course,setCourse]= useState({})
  const days = ["Sunday","Monday",'Tuesday',"Wednesday","Thursday","Friday","Saturday"]
  const { Search } = Input;
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [range, setRange] = useState([10, 200]);
  const [review, setReview] = useState({
    averageRating: 0,
    totalReviews: 0
  });
  const [rates, setRates] = useState({
    hourlyRate: 0,
    tutoringRate: 0,
    courseingRate: 0,
  });

  const item = { rating: 4 };

  useEffect(()=>{
    getCourseDetails();
    if(token){
      getMyCourses()
    }

  },[])


  console.log("setCourses",courses)


  const getMyCourses = async (pageNumber, keyword, category) => {
    setLoading(true);
    try {
      const response = await Get(COURSE.getMyCourses,token, {
        limit: "100",
      });
      setLoading(false);
      console.log("response", response);
      if (response?.status) {
        setCourses(response?.data?.courses.map(item => item._id));
       
      } else {
        message.error("Something went wrong!");
        console.log("error====>", response);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const getCourseDetails = async () =>{
    try {
      const response = await Get(COURSE.getCourseById + id);
      if (response?.status) {
        setCourse(response?.data);
      } else {
        swal("Error", response?.message, "error");
       
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  console.log("review",reviews);


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="blueBackground"
        style={{
          height: "50vh",
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
          {<> Course Details</>}
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
        <Col xs={24} md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "10px",
            }}
          >
            <Card className="contactCard2" bordered={false}>
            {loading && <Row style={{minHeight:"30vh"}} className="flex">
              <Spin size="large" />
                </Row>}
             {!loading && <Row
                style={{
                  width: "100%",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Image
                  src={course?.course?.image ? UPLOADS_URL + "/"+ course?.course?.image :  "/images/avatar.png"}
                  height={350}
                  width={"100%"}
preview={false}
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "black",
                    textAlign: "left",
                    marginTop: 30,
                    marginBottom:0,
                  }}
                >
                  {course?.course?.title}
                </Typography.Title>
                <Typography.Text
                                className="fontFamily1"
                                style={{
                                  fontSize: "14px",
                                  // fontWeight: "bold",
                                  color: "black",
                                  textAlign: "left",
                                  marginTop: 0,
                    marginBottom:20,
                                 
                                }}
                              >
                                {course?.course?.hours + " hours " + course?.course?.minutes + " minutes"  }
                              </Typography.Text>


                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "16px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                    textAlign:'justify'
                  }}
                >
                 {course?.course?.description}
                </Typography.Text>
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "black",
                    textAlign: "left",
                    marginTop: 20,
                  }}
                >
                $ {course?.course?.price}
                </Typography.Title>
               

                {/* {course?.course?.features.toString().split(",").map(item => {return( <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "16px",
                    color: "grey",
                    textAlign: "center",
                    display:'flex',
                    alignItems:'center',
                    justifyContent: "center",
                    textAlign:'justify'
                  }}
                >
                 <BsDot style={{fontSize:"30px",margin:0}}/>{item}
                </Typography.Text>)})} */}
               

                <br />
                <br />

                {token && !courses.includes(course?.course?._id) && <Button
                  type="primary"
                  htmlType="submit"
                  className="loginButton"
                  style={{backgroundColor:"#213759"}}
                  onClick={() => navigate("/payment/" + course?.course?._id , {state:{type:"COURSE"}})}
                >
                  Buy this course
                </Button>}

                {!token && <Button
                  type="primary"
                  htmlType="submit"
                  className="loginButton"
                  style={{backgroundColor:"#213759"}}
                  onClick={() => navigate("/signin")}
                >
                  Buy this course
                </Button>}

              </Row>}
            </Card>
          </div>
        </Col>
       
      </Row>
    </Layout>
  );
}

export default CourseDetails;
