import React, { useState } from "react";
import {
  Form,
  Slider,
  Input,
  Col,
  Row,
  Typography,
  Layout,
  Card,
  Button,
  Checkbox,
  Select,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";

//icons
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function Tutor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState([10, 200]);

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
          {<> Tutor</>}
        </Typography.Title>
        <Search
          size="large"
          className="searchBar"
          style={{ width: "350px", color: "green" }}
          placeholder="Search Tutor"
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
                  options={[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ]}
                  defaultValue={[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ]}
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
                  defaultValue="all"
                  style={{
                    width: "100%",
                    fontSize: "14px",
                  }}
                  size="large"
                  //   onChange={handleChange}
                  options={[
                    {
                      value: "all",
                      label: "All Subjects",
                    },
                    {
                      value: "maths",
                      label: "Maths",
                    },
                    {
                      value: "physics",
                      label: "Physics",
                    },
                    {
                      value: "chemistry",
                      label: "Chemistry",
                    },
                    {
                      value: "biology",
                      label: "Biology",
                    },
                    {
                      value: "history",
                      label: "History",
                    },
                    {
                      value: "geography",
                      label: "Geography",
                    },
                  ]}
                />
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
            <Row gutter={[30,30]} >
            {
                [{name:"one",rating:5},{name:"two",rating:4},{name:"three",rating:3},{name:"one",rating:5},{name:"two",rating:2},{name:"three",rating:1}].map((item,index) => {
                    return(
                    <Col xs={24} sm={12} lg={8}>

                        <Card className="tutorCard" cover={<img alt="example" style={{height:"300px",objectFit:"cover",backgroundPosition:'center'}} src="/images/tutor.png" />}>
                        <Row style={{justifyContent:'space-between'}}>
                            <Col>
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
                  Jackson (Physics)
                </Typography.Title>

                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#0FB3AF",
                    textAlign: "left",
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  {item.rating} <AiFillStar style={{fontSize:16,color:item.rating >= 1 ? "#FABF35" :"#e5e5e5"}}/> <AiFillStar style={{fontSize:16,color:item.rating >= 2 ? "#FABF35" :"#e5e5e5"}}/> <AiFillStar style={{fontSize:16,color:item.rating >= 3 ? "#FABF35" :"#e5e5e5"}}/>  <AiFillStar style={{fontSize:16,color:item.rating >= 4 ? "#FABF35" :"#e5e5e5"}}/> <AiFillStar style={{fontSize:16,color:item.rating >= 5 ? "#FABF35" :"#e5e5e5"}}/>
                </Typography.Title>
                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "left",
                    marginTop: 0,
                  }}
                >
                  33 Ratings
                </Typography.Title>

                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "22px",
                    color: "black",
                    textAlign: "left",
                    marginTop: 10,
                  }}
                >
                  $300 / Hour
                </Typography.Text>
                            </Col>

                            <Col style={{display:"flex", alignItems:"flex-end"}}>
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
                        onClick={() => navigate("/tutor-details")}
                        icon={<FaArrowRight style={{ color: "white" }} />}
                      />
                            </Col>
                        </Row>
                       

                
                        </Card>

                    </Col>
                    )
                })
            }
            </Row>    

             <br/>
            
            <ReactPaginate
              breakLabel="..."
              nextLabel={<FaArrowRight style={{ color: "grey" }} />}
              pageRangeDisplayed={window.innerWidth > 500 ? 4 : 1}
              marginPagesDisplayed={window.innerWidth > 500 ? 4 : 1} //handle Pa
              pageCount={3}
              forcePage={1}
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
              
         
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Tutor;
