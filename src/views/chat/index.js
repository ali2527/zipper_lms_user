import React from "react";

import { Col, Input, Image, Button, Row, Typography, Layout, Card } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import dayjs from "dayjs";

function Chat() {
  const [data, setData] = React.useState([
    {
      name: "Richard David",
      lastMessage: "Lorem ipsum dolor sit amet, consetetur",
      image: "/images/chat1.jpg",
      messages: [
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "Richard David",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat1.jpg",
        },
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "Richard David",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat1.jpg",
        },
      ],
    },
    {
      name: "John Doed",
      lastMessage: "Lorem ipsum dolor sit amet, consetetur",
      image: "/images/chat2.jpg",
      messages: [
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "John Doed",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat2.jpg",
        },
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "John Doed",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat2.jpg",
        },
      ],
    },
    {
      name: "Alex Parker",
      lastMessage: "Lorem ipsum dolor sit amet, consetetur",
      image: "/images/chat3.jpg",
      messages: [
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "Alex Parker",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat3.jpg",
        },
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "Alex Parker",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat3.jpg",
        },
      ],
    },
    {
      name: "Mark",
      lastMessage: "Lorem ipsum dolor sit amet, consetetur",
      image: "/images/chat4.jpg",
      messages: [
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "Mark",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat4.jpg",
        },
        {
          align: "right",
          name: "You",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat5.jpg",
        },
        {
          align: "left",
          name: "Mark",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
          image: "/images/chat4.jpg",
        },
      ],
    },
  ]);
  const [currentChat, setCurrentChat] = React.useState(data[0]);
  const [search, setSearch] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendMessage = () => {
    if (message !== "") {
      let _currentChat = { ...currentChat };

      _currentChat.messages.push({
        align: "right",
        name: "You",
        text: message,
        image: "/images/chat5.jpg",
      });

      setCurrentChat(_currentChat);
      setMessage("")
    }
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
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{ fontSize: "30px", color: "white" }}
        >
          {<> Chat</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={20}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "50px 20px",
            }}
          >
            <Card
              className="chatCard"
              bordered={false}
              style={{
                width: "100%",
                padding: "0px",
              }}
            >
              <Row gutter={20}>
                <Col
                  xs={0}
                  md={6}
                  style={{ borderRight: "1px solid #dadada", padding: "30px" }}
                >
                  <Input
                    className="chatSearch fontFamily1"
                    placeholder="Search Messages"
                    value={search}
                    style={{ fontSize: "14px" }}
                    onChange={(e) => setSearch(e.target.value)}
                    suffix={
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="chatButton"
                      >
                        <AiOutlineSearch />
                      </Button>
                    }
                    size="large"
                  />
                  <br />
                  <br />
                  <div style={{ height: "60vh", overflow: "auto" }}>
                    {data.length > 0 &&
                      data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
                        return (
                          <Row style={{ padding: "10px" }} onClick={()=>setCurrentChat(data[index])}>
                            <Col>
                              <Image
                                src={item.image}
                                height={40}
                                width={40}
                                style={{
                                  borderRadius: "100px",
                                  objectFit: "cover",
                                }}
                                preview={false}
                              />
                              <Typography.Title
                                className="fontFamily1"
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 800,
                                  color: "black",
                                  textAlign: "left",
                                  marginTop: 10,
                                  marginBottom: 0,
                                }}
                              >
                                {item.name}
                              </Typography.Title>
                              <Typography.Text
                                className="fontFamily1"
                                style={{
                                  fontSize: "10px",
                                  color: "grey",
                                  textAlign: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {item.lastMessage}
                              </Typography.Text>
                            </Col>
                          </Row>
                        );
                      })}
                  </div>
                </Col>
                <Col xs={0} md={18} style={{ padding: "30px" }}>
                  <Row>
                    <Image
                      src={currentChat.image}
                      height={40}
                      width={40}
                      style={{ borderRadius: "100px", objectFit: "cover" }}
                      preview={false}
                    />
                    &emsp;
                    <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "14px",
                        fontWeight: 800,
                        color: "black",
                        textAlign: "left",
                        marginTop: 10,
                        marginBottom: 0,
                      }}
                    >
                      {currentChat.name}
                    </Typography.Title>
                  </Row>
                  <br/>
                  <Row>
                    <div
                      style={{
                        height: "60vh",
                        width: "100%",
                        overflow: "auto",
                     
                        justifyContent: "flex-end",
                      }}
                    >
                      {currentChat.messages.length > 0 &&
                        currentChat.messages.map((item, index) => {
                          return (
                            <Row
                              style={{
                                margin: "10px",
                                justifyContent:
                                  item.align == "right"
                                    ? "flex-end"
                                    : "flex-start",
                              }}
                            >
                              <Card
                                className="chatCard"
                                bordered={false}
                                style={{
                                  float: "right",
                                  maxWidth: "60%",
                                  padding: "10px",
                                }}
                              >
                                <Row gutter={30}>
                                  <Col xs={4} md={3}>
                                    <Image
                                      src={item.image}
                                      height={30}
                                      width={30}
                                      style={{
                                        borderRadius: "100px",
                                        objectFit: "cover",
                                      }}
                                      preview={false}
                                    />
                                  </Col>
                                  <Col
                                    xs={20}
                                    md={21}
                                    style={{ minWidth: "300px" }}
                                  >
                                    <Row
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <Col>
                                        <Typography.Title
                                          className="fontFamily1"
                                          style={{
                                            fontSize: "14px",
                                            fontWeight: 800,
                                            color: "black",
                                            textAlign: "left",
                                            marginTop: 0,
                                            marginBottom: 0,
                                          }}
                                        >
                                          {item.name}
                                        </Typography.Title>
                                      </Col>
                                      <Col>
                                        <Typography.Text
                                          className="fontFamily1"
                                          style={{
                                            fontSize: "12px",
                                            color: "black",
                                            textAlign: "center",
                                            justifyContent: "center",
                                            margin: 0,
                                          }}
                                        >
                                          {dayjs().format(
                                            "h:m A  |  MM/DD/YYYY"
                                          )}
                                        </Typography.Text>
                                      </Col>
                                    </Row>

                                    <Typography.Text
                                      className="fontFamily1"
                                      style={{
                                        fontSize: "12px",
                                        color: "grey",
                                        textAlign: "center",
                                        justifyContent: "center",
                                      }}
                                    >
                                      {item.text}
                                    </Typography.Text>
                                  </Col>
                                </Row>
                              </Card>
                            </Row>
                          );
                        })}
                    </div>
                  </Row>
                  
                  <br />
                  <Row>
                    <Input
                      className="chatSearch fontFamily1"
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      suffix={
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="chatButton"
                          onClick={() => sendMessage()}
                        >
                          <FaTelegramPlane />
                        </Button>
                      }
                      size="large"
                    />
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Chat;
