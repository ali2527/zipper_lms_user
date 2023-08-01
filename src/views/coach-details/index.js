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
  message,
  Input,
  Select,
  InputNumber,
  TimePicker,
} from "antd";
import { useNavigate,useParams } from "react-router";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { REVIEWS,UPLOADS_URL, USERS } from "../../config/constants/api";
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

function CoachDetails() {
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
  const [coach,setCoach]= useState({})
  const days = ["Sunday","Monday",'Tuesday',"Wednesday","Thursday","Friday","Saturday"]
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState([10, 200]);
  const [review, setReview] = useState({
    averageRating: 0,
    totalReviews: 0
  });
  const [rates, setRates] = useState({
    hourlyRate: 0,
    tutoringRate: 0,
    coachingRate: 0,
  });

  const item = { rating: 4 };

  useEffect(()=>{
    getCoachDetails();
    getReviews();
  },[])



  const getCoachDetails = async () =>{
    try {
      const response = await Get(USERS.getCoachById + id);
      if (response?.status) {
        setCoach(response?.data);
      } else {
        swal("Error", response?.message, "error");
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }



  const getReviews = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await Get(REVIEWS.getAll + id, {
        page: pageNumber
          ? pageNumber.toString()
          : paginationConfig.pageNumber.toString(),
        limit: "5",
      });
      setLoading(false);
      console.log("response", response);
      if (response?.status) {
        setReviews(response?.data);
        setRatings(response.data.ratings)
        setPaginationConfig({
          pageNumber: response?.data?.page,
          limit: response?.data?.limit,
          totalDocs: response?.data?.totalReviews,
          totalPages: response?.data?.totalPages,
        });
      } else {
        message.error("Something went wrong!");
        console.log("error====>", response);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };



  const handlePageChange = (e) => {
    setPaginationConfig({
      ...paginationConfig,
      pageNumber: Number(e.selected) + 1,
    });

    getReviews(Number(e.selected) + 1);
  };


  console.log("review",reviews);


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
          {<> Coach Details</>}
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
                <Image
                  src={coach?.coach?.image ? UPLOADS_URL + "/"+ coach?.coach?.image :  "/images/avatar.png"}
                  height={150}
                  width={150}
preview={false}
                  style={{ borderRadius: "100px", objectFit: "cover" }}
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
                  {coach?.coach?.firstName + " " + coach?.coach?.lastName}
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
                 {coach?.coach?.bio}
                </Typography.Text>
                <Row>
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#0FB3AF",
                    textAlign: "left",
                    marginTop: 5,
                    marginBottom: 0,
                  }}  
                >
                 {coach?.review?.averageRating}
                 
                </Typography.Title>
                &emsp;
                <Rate
                      disabled 
                        allowHalf
                        value={coach?.review?.averageRating}
                        style={{ color: "#FABF35", marginTop: 0,fontSize:18 }}
                      />
                </Row>

               
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold", 
                    color: "black",
                    textAlign: "left",
                    marginTop: 0,
                    marginBottom: 20,
                  }}
                >
                  {coach?.review?.totalReviews} Reviews
                </Typography.Title>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="226"
                  height="41"
                  viewBox="0 0 226 41"
                  fill="none"
                >
                  <path
                    d="M0 0H226L210.031 20.5L226 41H0L16.7292 20.5L0 0Z"
                    fill="#86D6E0"
                  />
                  <text
                    className="fontFamily1"
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="#FFFFFF"
                    font-size="14"
                  >
                    Hourly Rates : ${coach?.rate?.hourlyRate}
                  </text>
                </svg>

                <br />

                {token && <Button
                  type="primary"
                  htmlType="submit"
                  className="loginButton"
                  onClick={() => navigate("/calander/" + coach?.coach?._id)}
                >
                  Book Lesson
                </Button>}
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
                    Bio
                  </Typography.Title>

                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.50)",
                      textAlign: "left",
                      marginTop: 0,
                    }}
                  >
                   {coach?.coach?.bio}
                  </Typography.Text>
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
                    Education
                  </Typography.Title>

                  <Row gutter={[50,50]} style={{display:'flex', height:"auto", flexDirection:'row'}}>
                    {coach?.coach?.education.length > 0 && coach?.coach?.education.map((item,index) => {
                      return(     <Col >
                        <Typography.Title
                          className="fontFamily1"
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "black",
                            textAlign: "left",
                            marginTop: 0,
                          }}
                        >
                          {item.school}
                        </Typography.Title>
                        <Typography.Text
                          className="fontFamily1"
                          style={{
                            fontSize: "14px",
                            color: "rgba(0, 0, 0, 0.50)",
                            textAlign: "left",
                            marginTop: 0,
                            marginBottom:5
                          }}
                        >
                          {item.subject.join(",")}
                        </Typography.Text>
                        <Row>
                        <Typography.Text
                          className="fontFamily1"
                          style={{
                            fontSize: "12px",
                            color: "rgba(0, 0, 0, 0.50)",
                            textAlign: "left",
                            marginTop: 0,
                            marginBottom:0
                          }}
                        >
                          {dayjs(item.start).format("MMM YYYY") + " - " + dayjs(item.end).format("MMM YYYY")}
                        </Typography.Text>
                        </Row>
                      
                      </Col>);
                  
                    }) }
                  </Row>
                </Row>


                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px",
                    background: "#EEFDFF",
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
                    Schedule
                  </Typography.Title>

                  <Row gutter={[50, 30]}>
                    {coach?.schedule?.availability.length > 0 && coach?.schedule?.availability.map((item,index) => {
                      return(   <Col>
                        <Typography.Title
                          className="fontFamily1"
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "black",
                            textAlign: "left",
                            marginTop: 0,
                          }}
                        >
                          {days[item.day]}
                        </Typography.Title>
                        {item.timeSlots.map((subItem,subIndex) =>{
                          return( <Typography.Text
                            className="fontFamily1"
                            style={{
                              fontSize: "14px",
                              color: "rgba(0, 0, 0, 0.50)",
                              textAlign: "left",
                              marginTop: 0,
                            }}
                           >
                          {dayjs(subItem.startTime).format("hh:mm a") + " - " + dayjs(subItem.endTime).format("hh:mm a")}
                           </Typography.Text>);

                        })}
                       
                      </Col>
  );
                    }) }
                                   </Row>
                </Row>
                <br />

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
                    Subject
                  </Typography.Title>

                  <Row gutter={[80, 30]}>
                    {coach?.coach?.subjects.map(item => {return(<Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                      {item[0].toUpperCase() + item.slice(1)}
                      </Typography.Text>
                    </Col>);})}
                    

                   
                  </Row>
                </Row>

                <Row
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "30px  30px 0  30px",

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
                    Average Rating
                  </Typography.Title>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        5 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                      disabled 
                        allowHalf
                        value={5}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={ratings[5]}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        4 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                      disabled 
                        allowHalf
                        value={4}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={ratings[4]}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        3 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                      disabled 
                        allowHalf
                        value={3}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={ratings[3]}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        2 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                      disabled 
                        allowHalf
                        value={2}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={ratings[2]}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <Row
                    gutter={[20, 0]}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 0,
                    }}
                  >
                    <Col>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.50)",
                          textAlign: "left",
                        }}
                      >
                        1 Star
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Rate
                      disabled 
                        allowHalf
                        value={1}
                        style={{ color: "#FABF35", marginTop: -10 }}
                      />
                    </Col>
                    <Col xs={18}>
                      <Progress
                        strokeLinecap="butt"
                        percent={ratings[1]}
                        strokeColor={{ from: "#FABF35", to: "#FABF35" }}
                        style={{ width: "100%", color: "#FABF35" }}
                      />
                    </Col>
                  </Row>

                  <br/>
                  <br/>

                  {reviews?.reviews?.length == 0 && <div className="flex" style={{width:"100%",minHeight:"300px"}}> <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "25px",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                       No Reviews Yet
                      </Typography.Title></div>}
                {reviews?.reviews?.length > 0 && reviews?.reviews?.map((item,index) => {
                  return(   <Row
                    style={{
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      padding: "10px 30px",
                      
                    }}
                  >
                  <div style={{width:"100%",background:"#EEFDFF",borderRadius:"27px",padding:"20px"}}>
                    <Row gutter={20}>
                      <Col xs={4}>
                      <Image
                    src={!item.student.image ? "/images/avatar.png" : UPLOADS_URL + "/" + item.student.image }
                    height={100}
                    width={100}
                    style={{ borderRadius: "100px", objectFit: "cover" }}
                  />
                      </Col>
                      <Col xs={20}>
                      <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "black",
                        textAlign: "left",
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      {item?.student?.firstName + " " + item?.student?.lastName}
                    </Typography.Title>
                    <Row gutter={10} style={{display:"flex",alignItems:"center"}}>
                      <Col>
                      <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "black",
                        textAlign: "left",
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      {item?.rating || 1} Stars
                    </Typography.Title>
                      </Col>
                      <Col>
                      <Rate
                      disabled 
                          value={item?.rating || 1}
                          style={{ fontSize:"12px", color: "#FABF35", marginTop: "-30px" }}
                        />
  
                      </Col>
                      <Col>
                      <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "black",
                        textAlign: "left",
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      {dayjs(item?.createdAt).format("DD MMMM, YYYY")}
                    </Typography.Title>
  
                      </Col>
                    </Row>
                   
                    <Typography.Text
                      className="fontFamily1"
                      style={{
                        fontSize: "12px",
                        color: "rgba(0, 0, 0, 0.50)",
                        textAlign: "left",
                        lineHeight:"12px",
                        marginTop: 0,
                      }}
                    >
                      {item?.comment}
                    </Typography.Text>
                      </Col>
                    </Row>
  
                  </div>
                  </Row>);
                })}
             

                <ReactPaginate
              breakLabel="..."
              nextLabel={<FaArrowRight style={{ color: "grey" }} />}
              pageRangeDisplayed={window.innerWidth > 500 ? 4 : 1}
              marginPagesDisplayed={window.innerWidth > 500 ? 4 : 1} //handle Pa
              onPageChange={handlePageChange}
              pageCount={paginationConfig?.totalPages}
              forcePage={paginationConfig?.pageNumber - 1}
              previousLabel={<FaArrowLeft style={{ color: "grey" }} />}
              renderOnZeroPageCount={null}
              pageClassName="page-item" //m
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="paginationContainer"
              activeClassName="active"
            />

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

export default CoachDetails;
