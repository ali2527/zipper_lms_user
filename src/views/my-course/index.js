import React, { useState } from "react";
import {
  message,
  Slider,
  Input,
  Col,
  Row,
  Typography,
  Layout,
  Card,
  Button,
  Tag,
  Skeleton,
  Select,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";
import { Get } from "../../config/api/get";
import {
  COURSE,
  CATEGORIES,
  RATES,
  REVIEWS,
  UPLOADS_URL,
} from "../../config/constants/api";
import { SUBJECTS } from "../../config/constants";
//icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
const { CheckableTag } = Tag;



function Course() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [range, setRange] = useState([10, 200]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("1")
  const [selectedTags, setSelectedTags] = useState(['Books']);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalDocs: 0,
    totalPages: 0,
  });


  useEffect(() => {
    getMyCourses();
  }, []);

  const getMyCourses = async (pageNumber, keyword, category) => {
    setLoading(true);
    try {
      const response = await Get(COURSE.getMyCourses,token, {
        page: pageNumber
          ? pageNumber.toString()
          : paginationConfig.pageNumber.toString(),
        limit: "9",
      });
      setLoading(false);
      console.log("response", response);
      if (response?.status) {
        setCourses(response?.data?.courses);
        // setRatings(response.data.ratings)
        setPaginationConfig({
          pageNumber: response?.data?.pageInfo?.page,
          limit: response?.data?.pageInfo?.limit,
          totalDocs: response?.data?.pageInfo?.totalDocs,
          totalPages: response?.data?.pageInfo?.totalPages,
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

    getMyCourses(Number(e.selected) + 1);
  };


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
          {<>My Courses</>}
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
       
        <Col xs={24} md={20}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <br/>
            <br/>

            {loading && 
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight:"500px"
              }}
            >
              <Skeleton active />
              <br />
            </div>}

            <Row gutter={[30, 30]}>

            {courses.length == 0 && !loading && <div style={{width:"100%",minHeight:"400px",display:'flex',justifyContent:'center',alignItems:"center"}}>
              
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
                              No Courses Found
                              </Typography.Title>
                              </div>}



              {courses.length > 0 && !loading &&
                courses.map((item, index) => {
                  console.log("item", item);
                  return (
                    <Col xs={24} sm={12} lg={8}>
                      <Card
                        className="tutorCard"
                        cover={
                          <img
                            alt="example"
                            style={{
                              height: "300px",
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
                              &nbsp;&nbsp;
                              <Typography.Text
                                className="fontFamily1"
                                style={{
                                  fontSize: "14px",
                                  margin:0,
                                  color: "black",
                                  textAlign: "left",
                                 
                                }}
                              >
                               ({item?.category?.title})
                              </Typography.Text>
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
                               {item?.description.slice(0,100)} {item?.description.length > 100 && "..."}
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
                              onClick={() => navigate("/my-course-details/"+item._id)}
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

          {courses.length > 0 && paginationConfig?.totalPages > 1 &&   <ReactPaginate
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
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Course;
