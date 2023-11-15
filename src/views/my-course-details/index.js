import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Button,
  Row, Typography,
  Layout, Image,
  Card,
  Spin,Skeleton, Input,message
} from "antd";
import { useNavigate, useParams } from "react-router";
import { UPLOADS_URL, LECTURE,COURSE } from "../../config/constants/api";
import { Get } from "../../config/api/get";
import ReactPaginate from "react-paginate";

import swal from "sweetalert";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "react-alice-carousel/lib/alice-carousel.css";
//icons
import { BsDot } from "react-icons/bs";
//icons

function MyCourseDetails() {
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
  const [loading2, setLoading2] = useState(true);
  const [lectures, setLectures] = useState([]);
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
    getMyCourseDetails();
    getCourseLectures()
  },[])


  const handlePageChange = (e) => {
    setPaginationConfig({
      ...paginationConfig,
      pageNumber: Number(e.selected) + 1,
    });

    getCourseLectures(Number(e.selected) + 1);
  };


  const getCourseLectures = async (pageNumber, keyword, category) => {
    setLoading2(true);
    try {
      const response = await Get(LECTURE.getAllLecturesByCourse + id,token, {
        page: pageNumber
          ? pageNumber.toString()
          : paginationConfig.pageNumber.toString(),
        limit: "9",
      });
      setLoading2(false);
      console.log("response", response);
      if (response?.status) {
        setLectures(response?.data?.docs);
        // setRatings(response.data.ratings)
        setPaginationConfig({
          pageNumber: response?.data?.page,
          limit: response?.data?.limit,
          totalDocs: response?.data?.totalDocs,
          totalPages: response?.data?.totalPages,
        });
      } else {
        message.error("Something went wrong!");
        console.log("error====>", response);
      }
    } catch (error) {
      console.log(error.message);
      setLoading2(false);
    }
  };



  const getMyCourseDetails = async () =>{
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
        <Col xs={24} md={8}>
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
                  height={300}
                  width={"100%"}
preview={false}
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "black",
                    textAlign: "left",
                    marginTop: 30,
                  }}
                >
                  {course?.course?.title}
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
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
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "black",
                    textAlign: "left",
                    marginTop: 20,
                  }}
                >
                 Features
                </Typography.Title>
               

                {course?.course?.features.toString().split(",").map(item => {return( <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
                    color: "grey",
                    textAlign: "center",
                    display:'flex',
                    alignItems:'center',
                    justifyContent: "center",
                    textAlign:'justify'
                  }}
                >
                 <BsDot style={{fontSize:"30px",margin:0}}/>{item}
                </Typography.Text>)})}
               

              
              </Row>}
            </Card>
          </div>
        </Col>
        <Col xs={24} md={16}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "10px",
            }}
          >
            <Card className="contactCard2" style={{padding:"20px"}} bordered={false}>
            {loading2 && 
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight:"350px"
              }}
            >
              <Skeleton active />
              <br />
            </div>}

            <Row gutter={[30, 30]}>

            {lectures.length == 0 && !loading2 && <div style={{width:"100%",minHeight:"400px",display:'flex',justifyContent:'center',alignItems:"center"}}>
              
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
                              No Lectures Found
                              </Typography.Title>
                              </div>}



              {lectures.length > 0 && !loading2 &&
                lectures.map((item, index) => {
                  console.log("item", item);
                  return (
                    <Col xs={24} sm={12} lg={8}>
                      <Card
                        className="tutorCard"
                        cover={
                          <img
                            alt="example"
                            style={{
                              height: "250px",
                              objectFit: "cover",
                              backgroundPosition: "center",
                            }}
                            src={
                              item.image
                                ? UPLOADS_URL + "/" + item.image
                                : "/images/avatar.png"
                            }
                          />
                        }
                      >
                        <Row
                          style={{
                            justifyContent: "space-between",
                            minHeight: "120px",
                          }}
                        >
                          <Col
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                            span={20}
                          >
                            <Row style={{display:"flex" ,alignItems:"center"}}>
                            <Typography.Text
                                className="fontFamily1"
                                style={{
                                  fontSize: "14px",
                                  margin:0,
                                  color: "black",
                                  textAlign: "left",
                                 
                                }}
                              >
                               ({item?.lectureNo})
                              </Typography.Text>
                              &nbsp;&nbsp;
                              <Typography.Title
                                className="fontFamily1"
                                style={{
                                  fontSize: "25px",
                                  fontWeight: "bold",
                                  color: "black",
                                  textAlign: "left",
                                  margin:0
                                 
                                }}
                              >
                                {item?.title}
                              </Typography.Title>
                             
                              
                            </Row>
                            <br/>

                            <Row>
                            <Typography.Text
                                className="fontFamily1"
                                style={{
                                  fontSize: "14px",
                                  
                                  color: "black",
                                  textAlign: "left",
                                  marginTop: 0,
                                }}
                              >
                               {item?.description.slice(0,50)} {item?.description.length > 50 && "..."}
                              </Typography.Text>
                            </Row>

                            

               
                          </Col>

                          <Col
                            style={{ display: "flex", alignItems: "flex-end",justifyContent:'flex-end' }}
                            span={4}
                          >
                            <Button
                              type="primary"
                              shape="circle"
                              size="large"
                              style={{
                                backgroundColor: "#7cc059",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              onClick={() => navigate("/lecture-details/"+item._id)}
                              icon={<FaArrowRight style={{ color: "white" }} />}
                            />
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
            <br />

          {lectures.length > 0 && paginationConfig?.totalPages > 1 &&   <ReactPaginate
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
            />}
        
            </Card>
          </div>
        </Col>
       
      </Row>
    </Layout>
  );
}

export default MyCourseDetails;
