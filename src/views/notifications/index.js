import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Row,
  Typography,
  List,
  Card,
  Input,
  Modal,
  Button,
  Popover,
  Layout,
  Checkbox,
  Skeleton,
  Avatar,
  Spin,
  Select,
  Image,
  Pagination,
  DatePicker,
} from "antd";
import { useNavigate } from "react-router";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { UPLOADS_URL } from "../../config/constants/api";
import { UserOutlined } from "@ant-design/icons";
import { Post } from "../../config/api/post";
import { Get } from "../../config/api/get";
import { NOTIFICATION, COMISSSION } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { SUBJECTS, CONTENT_TYPE } from "../../config/constants/index";
import swal from "sweetalert";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { incrementCount,decrementCount,addLatestNotification  } from "../../redux/slice/notificationSlice";
//icons
import socket from "../../config/socket"

import { FaRegBell } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { BsClockFill, BsFillCalendarFill,BsBell } from "react-icons/bs";
import {AiOutlineNotification} from "react-icons/ai";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function Notifications() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalDocs: 0,
    totalPages: 0,
  });

  const [filter, setFilter] = useState({
    status: "",
  });

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const handleSearch = (value) => {
    setFilter({
      ...filter,
      keyword: value,
    });
  };

  const startIndex =
    (paginationConfig.pageNumber - 1) * paginationConfig.limit + 1;
  const endIndex = Math.min(
    startIndex + paginationConfig.limit - 1,
    paginationConfig.totalDocs
  );
  const message = `Showing records ${endIndex} of ${paginationConfig.totalDocs}`;

  const handlePageChange = (pageNumber) => {
    setPaginationConfig({
      ...paginationConfig,
      pageNumber: pageNumber,
    });

    getAllNotifications(pageNumber);
  };


  const toggleNotification = (item,index) => {
    try {
      let _notifications = [...notifications]

      Post(NOTIFICATION?.toggleNotification + item._id,{}, token).then((response) => {
        if (response?.data?.status) {

          if(_notifications[index].isRead){
            dispatch(incrementCount());
          }else{
            dispatch(decrementCount());
            
          }

          _notifications[index].isRead = !_notifications[index].isRead

          setNotifications(_notifications)
        } 
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleFrom = (date) => {
    setFilter({
      ...filter,
      from: date,
    });
  };

  const handleTo = (date) => {
    setFilter({
      ...filter,
      to: date,
    });
  };

  const handleStatusChange = (value) => {
    console.log("value",value)
    getAllNotifications(paginationConfig.pageNumber,paginationConfig.limit,value)
    setFilter({
      ...filter,
      status: value,
    });
  };

  const resetFilter = () => {
    setFilter({
      status: null,
      keyword: "",
      from: null,
      to: null,
    });
    getAllNotifications(
      paginationConfig.pageNumber,
      paginationConfig.limit,
      "",
      true
    );
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  useEffect(() => {
    socket.on("notification", (notification) => {
      getAllNotifications();
    });

    // Don't forget to remove the event listener when the component unmounts
    return () => {
      socket.off("notification");
    };
  }, []);



  const getAllNotifications = (pageNumber, pageSize, status) => {
    setLoading(true)
    try {
      Get(NOTIFICATION?.getAllMyNotifications, token, {
        page: pageNumber
          ? pageNumber.toString()
          : paginationConfig.pageNumber.toString(),
        limit: pageSize
          ? pageSize.toString()
          : paginationConfig.limit.toString(),
          status: status ? status : null,
      }).then((response) => {
        console.log("ssssss", response);
        if (response?.status) {
          setNotifications(response?.data?.docs);
          setPaginationConfig({
            pageNumber: response?.data?.page,
            limit: response?.data?.limit,
            totalDocs: response?.data?.totalDocs,
            totalPages: response?.data?.totalPages,
          });
        } else {
          console.log("response", response);
        }
        setLoading(false)
      });
    } catch (error) {
      console.log("error", error);
      setLoading(false)
    }
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
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{ fontSize: "30px", color: "white" }}
        >
          {<> Notifications</>}
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
              <Row style={{ padding: "10px 20px" }}>
                <Col
                  xs={24}
                  md={6}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Select
                    size={"large"}
                    className="filterSelectBox"
                    placeholder="Select Status"
                    value={filter.status}
                    onChange={(e) => handleStatusChange(e)}
                    style={{
                      width: "100%",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                    options={[
                      { value: "", label: "All" },
                      { value: "read", label: "Read" },
                      { value: "unread", label: "Unread" },
                    ]}
                  />
                </Col>
              </Row>
              <Row style={{ padding: 20, overflow: "auto" }}>
                {loading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Skeleton active />
                    <br />
                  </div>
                ) : (
                  <>
                    {notifications.length == 0 && (
                      <div
                        style={{
                          width: "100%",
                          minHeight: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Title
                          className="fontFamily1"
                          style={{ fontSize: "20px", color: "black" }}
                        >
                          {<> No Notifications Found</>}
                        </Typography.Title>
                      </div>
                    )}

                    {notifications.length > 0 && (
                      <div
                        style={{
                          width: "100%",
                          minHeight: "200px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {notifications.map((item, index) => {
                          return (
                            <Row style={{ width: "100%", padding: "10px" }}>
                              <Card style={{ width: "100%",background:item.isRead ? "white" :"#fafafa" }}>
                                <Row>
                                  <Col
                                    xs={24}
                                    sm={4}
                                    md={2}
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-start",
                                      alignItems: "center",
                                    }}
                                  >
                                   {item.type == "NOTIFICATION" ? <Avatar style={{backgroundColor:"#e7faff"}} size={64} icon={<FaRegBell style={{marginBottom:4, fontSize:20,color:'#27436B'}} />} /> :   item.type == "ANNOUNCEMENT" ?  <Avatar style={{backgroundColor:"#fffacd"}} size={64} icon={<AiOutlineNotification style={{marginBottom:4, fontSize:20,color:'#ffba00'}} />} /> : <Avatar style={{backgroundColor:"#ffc2cc"}} size={64} icon={<FiAlertTriangle style={{marginBottom:4, fontSize:20,color:'#d01b24'}} />} />}
                                   
                                  </Col>
                                  <Col
                                    xs={24}
                                    sm={16}
                                    md={18}
                                    style={{
                                      display: "flex",

                                      flexDirection: "column",
                                    }}
                                  >
                                    <Typography.Title
                                      className="fontFamily1"
                                      style={{
                                        fontSize: "16px",
                                        color: "black",
                                      }}
                                    >
                                      {item.title}
                                    </Typography.Title>
                                    <Typography.Text
                                      className="fontFamily1"
                                      style={{
                                        color: "#5F5E61",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {item.content}
                                    </Typography.Text>

                                    <Row
                                      style={{
                                        marginTop: 10,
                                        alignItems: "center",
                                        color: item.isRead
                                          ? "#77838F"
                                          : "#79BD57",
                                        fontSize: "12px",
                                      }}
                                    >
                                      <BsClockFill />
                                      &nbsp;&nbsp;
                                      {dayjs(item.createdAt).fromNow()}
                                      &emsp; | &emsp;
                                      <BsFillCalendarFill />
                                      &nbsp;&nbsp;
                                      {dayjs(item.createdAt).format(
                                        "DD / MM / YYYY"
                                      )}
                                    </Row>
                                  </Col>
                                  <Col
                                    xs={24}
                                    md={4}
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      alignItems: "center",
                                    }}
                                  >
                                    {item.isRead ?  <Button
                                      style={{
                                        color: "#77838F",
                                        fontSize: "14px",
                                        textDecoration: "underline",
                                        borderBottom:"2px solid grey",
                                        width:"auto",
                                        borderRadius:0,
                                        padding:0
                                      }}
                                      type="link"
                                      block
                                      onClick={()=> toggleNotification(item,index)}
                                    >
                                      Mark as unread
                                    </Button> :  <Button
                                      style={{
                                        color: "#77838F",
                                        fontSize: "14px",
                                        textDecoration: "underline",
                                        borderBottom:"2px solid grey",
                                        width:"auto",
                                        borderRadius:0,
                                        padding:0
                                      }}
                                      type="link"
                                      block
                                      onClick={()=> toggleNotification(item,index)}
                                    >
                                      Mark as read
                                    </Button> }
                                  </Col>
                                </Row>
                              </Card>
                            </Row>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </Row>
              <Row style={{ padding: "10px 20px" }}>
                <Col xs={24} md={12}>
                  <p className="fontFamily1" style={{ color: "#999" }}>
                    {message}
                  </p>
                </Col>
                <Col
                  xs={24}
                  md={12}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Pagination
                    className="styledPagination"
                    onChange={(e) => handlePageChange(e)}
                    current={parseInt(paginationConfig.pageNumber)}
                    pageSize={paginationConfig.limit}
                    total={paginationConfig.totalDocs}
                    itemRender={itemRender}
                  />
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Notifications;
