import { useState } from "react";
import { Image } from "antd";
import { BsPhone, BsChatLeftDots } from "react-icons/bs";
import { CaretDownOutlined } from "@ant-design/icons";
import { MdMenu } from "react-icons/md";
import { Layout, Row, Col, Menu, Button, Drawer, Input } from "antd";
import { useNavigate } from "react-router";

import MainButton from "../MainButton";
// import Link from 'next/link'

const { Header } = Layout;

const ClientHeader = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);


  const getColorMobile = (uri) => {
    // if (path == uri) {
    //   return "#ad0103";
    // } else {
    //   return "transparent";
    // }

    return "transparent";
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
              md={7}
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
              />
              {/* </Link> */}
            </Col>
            <Col
              xs={0}
              md={17}
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
                }}
                mode="horizontal"
                className="header-menu"
              >
                <Menu.Item key="home" className="hover"   onClick={()=> navigate("/")}>
                  Home
                </Menu.Item>
                <Menu.Item key="about" className="hover"   onClick={()=> navigate("/about-us")}>
                  About
                </Menu.Item>
                <Menu.Item key="tutors" className="hover"   onClick={()=> navigate("/tutor")}>
                  Tutors
                </Menu.Item>
                <Menu.Item key="coaches" className="hover"   onClick={()=> navigate("/coach")}>
                  Coaches
                </Menu.Item>
                <Menu.Item key="contact_us" className="hover"   onClick={()=> navigate("/contact-us")}>
                  Contact Us
                </Menu.Item>
              </Menu>
              &emsp; &emsp;
              <div
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
                  Login
                </Button>
                &emsp; &emsp;
                <Button
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  onClick={()=> navigate("/signup")}
                  
                  ghost
                  size="large"
                >
                  Register
                </Button>
              </div>
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
    <Menu.Item key="home" className="hover fontFamily1" >
                  Home
                </Menu.Item>
                <Menu.Item key="about" className="hover fontFamily1">
                  About
                </Menu.Item>
                <Menu.Item key="tutors" className="hover fontFamily1">
                  Tutors
                </Menu.Item>
                <Menu.Item key="coaches" className="hover fontFamily1">
                  Coaches
                </Menu.Item>
                <Menu.Item key="contact_us" className="hover fontFamily1">
                  Contact Us
                </Menu.Item>
        </Menu>
        <br/><br/>
        <Row gutter={20}>
          <Col span={12}>
          <Button
          block
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  
                  ghost
                  size="large"
                >
                  Login
                </Button>
          </Col>
          <Col span={12}>
          <Button
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  block
                  ghost
                  size="large"
                >
                  Register
                </Button>
          </Col>
        </Row>
      </Drawer>
    </Header>
  );
};

export default ClientHeader;
