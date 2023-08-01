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
  Checkbox,
  Rate,
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
  USERS,
  AUTH,
  RATES,
  REVIEWS,
  UPLOADS_URL,
} from "../../config/constants/api";
import { SUBJECTS } from "../../config/constants";
//icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";

function Coach() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [coaches, setCoaches] = useState([]);
  const [range, setRange] = useState([10, 200]);
  const [availability, setAvailability] = useState(0, 1, 2, 3, 4, 5, 6);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalDocs: 0,
    totalPages: 0,
  });

  const [searchFilter,setSearchFilter]=useState({
    keyword:"",
    subjects:null,
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    })




    
const handleFilter = () =>{
  let _days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let days = searchFilter?.days?.map(item => _days.indexOf(item)).join(",") || null
  let _subjects =searchFilter?.subjects ? searchFilter?.subjects.join(",") : null

  getAllCoaches(1,searchFilter.keyword,range[1],range[0],_subjects,days)
}

const handleClear = () => {
  setSearchFilter({
    keyword:"",
    subjects:null,
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    });
    setRange([0,200]);
    getAllCoaches(1)
}
  const onSearch = (value) => {
    setSearchFilter({...searchFilter,keyword:value})
    getAllCoaches(1,value)
  };

  useEffect(() => {

    getAllCoaches();
  }, []);

  const getAllCoaches = async (pageNumber, keyword, max, min, sbj, days) => {
    setLoading(true);
    try {
      const response = await Get(USERS.getAllCoaches,null, {
        page: pageNumber
          ? pageNumber.toString()
          : paginationConfig.pageNumber.toString(),
        limit: "9",
        keyword: keyword ? keyword : "",
        maxHourlyRate: max ? max.toString() : null,
        minHourlyRate: min ? min.toString() : null,
        subjects: sbj ? sbj : null,
        daysToFilter: days ? days : null,
      });
      setLoading(false);
      console.log("response", response);
      if (response?.status) {
        setCoaches(response?.data?.docs);
        // setRatings(response.data.ratings)
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

    getAllCoaches(Number(e.selected) + 1);
  };


  console.log("coaches", coaches);

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
          {<> Coaches</>}
        </Typography.Title>
        <Search
          size="large"
          className="searchBar"
          style={{ width: "350px", color: "green" }}
          placeholder="Search Coach"
          onSearch={onSearch}
          enterButton
        />
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
        <Col xs={24} md={5}>
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
                  alignItems: "flex-start",
                }}
              >
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "black",
                    textAlign: "left",
                    marginTop: 0,
                  }}
                >
                  Filters
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    marginBottom: 10,
                  }}
                >
                  Hourly Rates:
                </Typography.Text>

                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "12px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  ${range[0]} - ${range[1]}
                </Typography.Text>

                <Slider
                  className="rangeSlider"
                  style={{ width: "100%" }}
                  range={{
                    draggableTrack: true,
                  }}
                  min={10}
                  max={1000}
                  step={10}
                  onChange={(e) => setRange(e)}
                  defaultValue={range}
                />

                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    marginBottom: 10,
                  }}
                >
                  Avalibility
                </Typography.Text>

                <Checkbox.Group
                
                  className="avaliblityGroup"
                  onChange={(e)=>setSearchFilter({...searchFilter,days:e})}
                  options={[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ]}
                  value={searchFilter.days}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                />

                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    marginTop: 20,
                    marginBottom: 10,
                  }}
                >
                  Subjects
                </Typography.Text>

                <Select
                    onChange={(e)=>setSearchFilter({...searchFilter,subjects:e})}
                    value={searchFilter.subjects ? searchFilter.subjects : [] }
                  mode="multiple"
                  placeholder="Select Subjects"
                  maxTagCount= 'responsive'
                  style={{
                    width: "100%",
                    fontSize: "14px",
                  }}
                  size="large"
                  //   onChange={handleChange}
                  options={SUBJECTS.map(item => { return({
                    value:item,
                    label:item[0].toUpperCase() + item.slice(1)
                  })} )}
                />
              </Row>
              <Row gutter={10}>
                <Col xs={24} md={12}>
                <Button
                  type="primary"
                  size="large"
                  block
                  style={{backgroundColor:"#7ec25d"}}
                  onClick={()=>handleFilter()}
                  >
                Filter
                </Button>
                </Col>
                <Col xs={24} md={12}>
                <Button
                onClick={()=>handleClear()}
                  type="primary"
                  size="large"
                  block
                  ghost
                  style={{borderColor:"#7ec25d",color:"#7ec25d"}}
                  >
                Clear
                </Button>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        <Col xs={24} md={19}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Row gutter={[30, 30]}>

            {coaches.length == 0 && <div style={{width:"100%",minHeight:"400px",display:'flex',justifyContent:'center',alignItems:"center"}}>
              
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
                              No Coaches Found
                              </Typography.Title>
                              </div>}



              {coaches.length > 0 &&
                coaches.map((item, index) => {
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
                            minHeight: "150px",
                          }}
                        >
                          <Col
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Row>
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
                                {item?.firstName + " " + item?.lastName}
                              </Typography.Title>
                            </Row>

                            <Row
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {item.totalReviews > 0 && (
                                <>
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
                                      {item.averageRating}
                                    </Typography.Title>
                                    &emsp;
                                    <Rate
                                      disabled
                                      allowHalf
                                      value={item.averageRating}
                                      style={{
                                        color: "#FABF35",
                                        marginTop: 0,
                                        fontSize: "16px",
                                      }}
                                    />
                                  </Row>

                                  <Typography.Title
                                    className="fontFamily1"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      color: "black",
                                      textAlign: "left",
                                      marginTop: 10,
                                    }}
                                  >
                                    {item.totalReviews} Reviews
                                  </Typography.Title>
                                </>
                              )}
                            </Row>

                            <Row>
                              <Typography.Text
                                className="fontFamily1"
                                style={{
                                  fontSize: "22px",
                                  color: "black",
                                  textAlign: "left",
                                  marginTop: 20,
                                }}
                              >
                                ${item.hourlyRate} / Hour
                              </Typography.Text>
                            </Row>
                          </Col>

                          <Col
                            style={{ display: "flex", alignItems: "flex-end" }}
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
                              onClick={() => navigate("/coach-details/"+item._id)}
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

          {coaches.length > 0 &&   <ReactPaginate
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

export default Coach;
