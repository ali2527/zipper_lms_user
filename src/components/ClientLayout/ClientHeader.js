import { useState,useEffect } from "react";
import { Image } from "antd";
import {IoIosChatbubbles} from "react-icons/io";
import { CaretDownOutlined } from "@ant-design/icons";
import { MdMenu } from "react-icons/md";
import { Layout, Row, Col, Menu, Button,Badge,Modal, Drawer,Popover,Dropdown, Avatar,Typography, Input,Alert,message } from "antd";
import { useNavigate } from "react-router";
import { FaBars, FaEllipsisV, FaUser, FaSignOutAlt } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import {GoBellFill} from "react-icons/go"
import { UPLOADS_URL,AUTH } from "../../config/constants/api";
import {Get} from "../../config/api/get"
import { useSelector, useDispatch } from "react-redux";
import MainButton from "../MainButton";
import { AiFillCaretDown, AiFillApple } from "react-icons/ai"
import { removeUser } from "../../redux/slice/authSlice";
import socket from "../../config/socket"
// import Link from 'next/link'
import { fetchNotifications } from '../../redux/slice/notificationSlice';
import { incrementCount,addLatestNotification  } from "../../redux/slice/notificationSlice";

const { Header } = Layout;

const ClientHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const notificationsCount = useSelector((state) => state.notification.count);
  const latestNotifications = useSelector((state) => state.notification.latestNotifications);
  const [logoutModal, setLogoutModal] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(token){
      
      socket.connect();

      socket.emit("setup", user);
      dispatch(fetchNotifications(token));
      // socket.on("connected", () => {
      //   console.log("Connected to socket");
      // });
    }
    return () => {
      socket.disconnect();
    };
  }, [token]);


  useEffect(() => {
    socket.on("notification", (notification) => {
      console.log("New Notification", notification);

      // Assuming your notification object contains data to determine if you should increment the count
      const shouldIncrement = true; // You should replace this with your logic

      if (shouldIncrement) {
        dispatch(incrementCount());
      }
      

      dispatch(addLatestNotification(notification));
    });

    // Don't forget to remove the event listener when the component unmounts
    return () => {
      socket.off("notification");
    };
  }, [dispatch]);

  const items = [
    {
      key: "1",
      label: (
        <div
          className="headerDropdown"
          style={{
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            padding: "5px 12px",
          }}
          onClick={() => navigate("/profile")}
        >
          <FaUser style={{ fontSize: "16px" }} /> &nbsp; My Profile
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          style={{
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            padding: "5px 12px",
          }}
          onClick={() => setLogoutModal(true)}
        >
          <FaSignOutAlt style={{ fontSize: "16px" }} />
          &nbsp; Logout
        </div>
      ),
    },
  ];


  const content = (
    <div style={{ width: "350px" }}>
      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Notifications</h3>
        <Alert
          message={`${notificationsCount} New`}
          type="success"
          style={{ fontSize: "12px", padding: "2px 10px", color: "green" }}
        />
      </div>
      <hr
        style={{
          borderLeft: "none",
          borderBottom: "none",
          borderRight: "none",
          borderTop: "1px solid rgb(0 0 0 / 15%)",
        }}
      />
      <div style={{ height: "250px", overflow: "auto" }}>
        {latestNotifications && latestNotifications.length > 0 && latestNotifications.map(item => {
          return(<div style={{ padding: 10,minHeight:"100px", borderBottom:"1px solid #dadada", marginBottom:"5px" }}>
            <Row
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Col xs={4}>
                <div
                  style={{
                    // padding: "10px 10px 10px 10px",
                                    
                    display: "flex",
                    width:'40px',
                    justifyContent:'center',
                    alignItems:"center",
                    height:'40px',
                    backgroundColor: "#385790",
                    borderRadius: "5px",
                  }}
                >
                 <GoBellFill style={{ fontSize: "20px",color:"white", }} />
                </div>
              </Col>
              <Col xs={18}>
              <Typography.Title
                    className="fontFamily1"
                    style={{ fontSize: "14px", color: "black",margin:0 }}
                  >
                   {item.title}
                  </Typography.Title>
  
                  <Typography.Text
                    className="fontFamily1"
                    style={{ fontSize: "12px", color: "black",margin:0 }}
                  >
                   {item?.content?.slice(0,100)} {item.content.length > 100 && "..."}
                  </Typography.Text>
               
              </Col>
            </Row>
          </div>);
        }) }
        

       
      </div>

      <hr
        style={{
          borderLeft: "none",
          borderBottom: "none",
          borderRight: "none",
          borderTop: "1px solid rgb(0 0 0 / 15%)",
        }}
      />

      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button onClick={()=> navigate("/notifications")} type="link">View All</Button>
      </div>
    </div>
  );

  
  const content2 = (
    <div >
     <div
          className="headerDropdown"
          style={{
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            padding: "5px 12px",
            cursor:'pointer'
          }}
          onClick={() => navigate("/signup")}
        >
         Learner
        </div>
        <a href="https://tutor.zipperlearning.com/signup">
        <div
          className="headerDropdown"
          style={{
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            padding: "5px 12px",
            cursor:'pointer',
            color:"black"
          }}
         
        >
          Tutor/Coach
        </div>
        </a>
    </div>
  );

  const logout = () => {
    setLogoutModal(false);

    dispatch(removeUser());
    navigate("/signin");
    socket.disconnect();
  };


  return (
    <Header
      style={{
        height: "auto",
        position: "absolute",
        width: "100%",
        top: 0,
        zIndex:20,
        padding: "20px",
        background: "transparent",
        scrollBehavior: "smooth",
      }}
    >
      <Row
        style={{
          padding: "5px 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={21}>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col
              xs={18}
              md={3}
              xl={4}
              style={{ textAlign: "left" }}
              className="site-header-logo"
            >
              {/* <Link href={"/"}> */}
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={150}
                height={80}
                src="/images/logo-header 1.png"
                style={{ maxWidth: 200 }}
                onClick={()=> navigate("/")}
              />
              {/* </Link> */}
            </Col>
            <Col
              xs={0}
              md={21}
              xl={20}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
        
              }}
              className="hide-on-phone"
            >
              <Menu
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  width:"100%",
                  justifyContent:'flex-end'
                }}
                mode="horizontal"
                className="header-menu"
              >
                {!token && <Menu.Item key="home" className="hover"   onClick={()=> navigate("/")}>
                  Home
                </Menu.Item>}

               {token && <Menu.Item key="home" className="hover"   onClick={()=> navigate("/dashboard")}>
                  Dashboard
                </Menu.Item>}
                <Menu.Item key="about" className="hover"   onClick={()=> navigate("/about-us")}>
                  About
                </Menu.Item>
                <Menu.Item key="tutors" className="hover"   onClick={()=> navigate("/tutor")}>
                  Tutors
                </Menu.Item>
                <Menu.Item key="coaches" className="hover"   onClick={()=> navigate("/coach")}>
                  Coaches
                </Menu.Item>
                <Menu.Item key="courses" className="hover"   onClick={()=> navigate("/course")}>
                  Courses
                </Menu.Item>
                <Menu.Item key="contact_us" className="hover"   onClick={()=> navigate("/contact-us")}>
                  Contact Us
                </Menu.Item>
              </Menu>
              &emsp; &emsp;
             {!token ? <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                }}
                className="header-btn-container"
              >
                <Button
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  onClick={()=> navigate("/signin")}
              
                  ghost
                  size="large"
                >
                  Log In
                </Button>
                &emsp; &emsp;
            
                <Popover
                content={content2}
                placement="bottomRight"
                arrow={false}
                className="headerPopover"
              >
                  <Button
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                 
                  
                  ghost
                  size="large"
                >
                  Join Us 
                </Button>
              </Popover>
              </div> : <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                }}
                className="header-btn-container"
              >
                <IoIosChatbubbles style={{color:"white",fontSize:"30px"}} onClick={()=> navigate("/chat")}/>
                &emsp; &emsp;
                <Popover
                content={content}
                placement="bottomRight"
                arrow={false}
                className="headerPopover"
              >
              <Badge count={notificationsCount} style={{ backgroundColor: "red" }}>
                  <GoBellFill style={{ fontSize: "25px",color:"white", }} />
                </Badge>
              </Popover>
              &emsp; &emsp;
              <div style={{minWidth:'200px',display:'flex',alignItems:"center"}}>
              <Avatar
                size={40}
                src={
                  !user.image ? "/images/avatar.png" : UPLOADS_URL + "/" + user.image
                }
              />
               <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <p
                  style={{
                    marginLeft: 10,
                    fontSize: "16px",
                    textTransform: "capitalize",
                    color:"white",
                  }}
                >
                  {user?.firstName} <AiFillCaretDown fontSize={12} />{" "}
                </p>
              </Dropdown>
              </div>
              </div>}
            </Col>

            <Col
              xs={4}
              md={0}
              style={{ textAlignLast: "right", justifyContent: "right" }}
              className="display-on-phone"
            >
           
                
              <MdMenu
                style={{ fontSize: 26, color: "white" }}
                onClick={()=> setVisible(true)}
                />
         
            </Col>
          </Row>
        </Col>
      </Row>

      <Drawer
        className="drawer"
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        style={{backgroundColor:"#264067"}}
        key={"drawer"}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={150}
                height={80}
                src="/images/logo-header 1.png"
                style={{ maxWidth: 200 }}
              />
              <br/><br/><br/>
        <Menu
          style={{
            fontSize: 18,
            fontWeight: 500,
            backgroundColor: "#264067",
            color:"white"
          }}
          mode="inline"
          className="header-menu-mobile "
        >
    <Menu.Item key="home" className="hover fontFamily1"    onClick={()=> {navigate("/"); setVisible(false)}}>
                  Home
                </Menu.Item>
                <Menu.Item key="about" className="hover fontFamily1"    onClick={()=> {navigate("/about-us"); setVisible(false)}}>
                  About
                </Menu.Item>
                <Menu.Item key="tutors" className="hover fontFamily1"    onClick={()=> {navigate("/tutor"); setVisible(false)}}>
                  Tutors
                </Menu.Item>
                <Menu.Item key="coaches" className="hover fontFamily1"    onClick={()=> {navigate("/coach"); setVisible(false)}}>
                  Coaches
                </Menu.Item>
                <Menu.Item key="courses" className="hover fontFamily1"    onClick={()=> {navigate("/course"); setVisible(false)}}>
                  Course
                </Menu.Item>
                <Menu.Item key="contact_us" className="hover fontFamily1"    onClick={()=> {navigate("/contact-us"); setVisible(false)}}>
                  Contact Us
                </Menu.Item>
        </Menu>
        <br/><br/>
        <Row gutter={[20,20]}>
          <Col span={24}>
          <Button
          block
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  
                  ghost
                  size="large"
                >
                  Log In
                </Button>
          </Col>
          <Col span={24}>
          <Button
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  block
                  ghost
                  size="large"
                  onClick={()=> navigate("/signup")}
                >
                  Register as Learner
                </Button>
                </Col>
                <Col span={24}>

                <a href="https://tutor.zipperlearning.com/signup">
                <Button
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  block
                  ghost
                  size="large"
                >
                  Become a Tutor/Coach
                </Button>
                </a>
               
          </Col>
        </Row>
      </Drawer>

      <Modal
        visible={logoutModal}
        onOk={() => logout()}
        onCancel={() => setLogoutModal(false)}
        okText="Yes"
        className="StyledModal"
        style={{
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
        cancelText="No"
        cancelButtonProps={{
          style: {
            border: "2px solid #385790",
            color: "#385790",
            height: "auto",
            padding: "6px 35px",
            borderRadius: "50px",
            fontSize: "16px",
            marginTop: "15px",
          },
        }}
        okButtonProps={{
          style: {
            backgroundColor: "#385790",
            color: "white",
            marginTop: "15px",
            height: "auto",
            padding: "5px 35px",
            borderRadius: "50px",
            fontSize: "16px",
            border: "2px solid #385790",
          },
        }}
      >
        <Typography.Title level={4} style={{ fontSize: "25px" }}>
          Logout
        </Typography.Title>
        <Typography.Text style={{ fontSize: 16 }}>
          Are You Sure You Want To Logout ?
        </Typography.Text>
      </Modal>


    </Header>

    
  );
};

export default ClientHeader;
