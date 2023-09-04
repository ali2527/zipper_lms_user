import React, { useEffect,useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Input, Image, Button, Row, Typography, Layout, Card } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import dayjs from "dayjs";
import { CHAT, MESSAGE,SOCKET_URL, UPLOADS_URL } from "../../config/constants/api";
import { Get } from "../../config/api/get";
import { Post } from "../../config/api/post";
import socket from "../../config/socket"


var selectedChatCompare;

function Chat() {
  const chatContainerRef = useRef(null);
  const [chats,setChats]= React.useState([])
  const [currentChat, setCurrentChat] = React.useState();
  const [search, setSearch] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messages,setMessages] = React.useState([])
  const [socketConnected,setSocketConnected] = React.useState(false)
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalDocs: 0,
    totalPages: 0,
  });




  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom when component mounts or when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  useEffect(()=>{
    getMyChats()
  },[user])

  useEffect(() => {
    socket.on("message", (newMessageRecieved) => {
     
      let _chats = [...chats]
      let index = _chats.findIndex(item => item._id == newMessageRecieved.chatId);

      console.log("index",index)

      if(index > -1){
        _chats[index].latestMessage = {content:newMessageRecieved.content}
      }


      setChats(_chats)
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare !== newMessageRecieved.chatId
      ) {
        // if (!notification.includes(newMessageRecieved)) {
        //   setNotification([newMessageRecieved, ...notification]);
        //   setFetchAgain(!fetchAgain);
        // }
      } else {
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });


  const handleScroll = () => {
    if (chatContainerRef.current.scrollTop === 0 && messages.length < paginationConfig.totalDocs) {

      getMoreChatMessages()
    }
  };



  const getMyChats = (keyword) =>{
    try {
      Get(CHAT.getMyChats, token,{type:"student",keyword:keyword ? keyword : ""}).then((response) => {
        if (response?.status) {
          setChats(response.data?.docs)

        } else {
          console.log("response", response);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }


  const getChatMessages = (chatId) =>{
    try {
      Get(MESSAGE.getChatMessages + (chatId ? chatId :  currentChat._id), token).then((response) => {
        console.log("ssss",response)
        if (response?.status) {
          const reversedMessages = [...response?.data?.docs].reverse();
          setMessages(reversedMessages)
           setPaginationConfig({
            pageNumber: response?.data?.page,
            limit: response?.data?.limit,
            totalDocs: response?.data?.total,
            totalPages: response?.data?.pages,
        });
      

        } else {
          console.log("response", response);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  const getMoreChatMessages= () =>{
    try {
      Get(MESSAGE.getChatMessages + currentChat._id , token,{page:(paginationConfig.pageNumber + 1).toString()}).then((response) => {
        console.log("ssss",response)
        if (response?.status) {
          const reversedMessages = [...response?.data?.docs].reverse();
          setMessages([ ...reversedMessages,...messages ])
           setPaginationConfig({
          pageNumber: response?.data?.page,
          limit: response?.data?.limit,
          totalDocs: response?.data?.total,
          totalPages: response?.data?.pages,
        });

        } else {
          console.log("response", response);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  const sendMessage = () => {
    let _chats = [...chats]
    let data = {
      senderType:"user",
      content:message,
      chatId:currentChat._id
    }
    let _messages = [...messages]

    let index = _chats.findIndex(item => item._id == currentChat._id)
    try {
      Post(MESSAGE.createMessage,data, token).then((response) => {

        console.log("responssse",response)
        if (response?.data?.status) {
          socket.emit("new message",{...data,sender:user._id,reciever:currentChat?.coach._id})
          _messages.push({...data,sender:user,reciever:currentChat?.coach})
          
        _chats[index].latestMessage = {content:message}
        setMessages(_messages)
          setMessage("")
          setChats(_chats)
        } else {
          console.log("response", response);
        }
      });
    } catch (error) {
      console.log("error", error);
    }


    // if (message !== "") {
    //   let _currentChat = { ...currentChat };

    //   _currentChat.messages.push({
    //     align: "right",
    //     name: "You",
    //     text: message,
    //     image: "/images/chat5.jpg",
    //   });

    //   setCurrentChat(_currentChat);
    //  
    // }
  };

  const selectChat = (index) =>{
    setCurrentChat(chats[index]);
    getChatMessages(chats[index]._id);
    socket.emit("join chat",chats[index]._id);
    selectedChatCompare = chats[index]._id;
    
  }


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
                  md={8}
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
                        onClick={() => getMyChats(search)}
                      >
                        <AiOutlineSearch />
                      </Button>
                    }
                    size="large"
                  />
                  <br />
                  <br />
                  <div style={{ height: "60vh", overflowY: "auto",overflowX: "hidden" }}>
                    {chats.length > 0 &&
                      chats.map((item, index) => {
                        return (
                            <Row gutter={10} style={{ padding: "10px",cursor:"pointer", borderBottom:"1px solid #dadada" }} onClick={()=>selectChat(index)}>
                      <Col>
                      <Image
                                src={item?.coach?.image ? UPLOADS_URL + "/" + item?.coach?.image: "./images/avatar.png"}
                                height={40}
                                width={40}
                                style={{
                                  borderRadius: "100px",
                                  objectFit: "cover",
                                }}
                                preview={false}
                              />
                      </Col>
                              
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
                                {item?.coach?.firstName + " " + item?.coach?.lastName}
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
                                {item?.latestMessage?.content}
                              </Typography.Text>
                              </Col>
                          </Row>
                        );
                      })}
                  </div>
                </Col>
                <Col xs={0} md={16} style={{ padding: "30px" }}>
                  {currentChat ? <>
                    <Row>
                    <Image
                      src={currentChat?.coach?.image ? UPLOADS_URL + "/" + currentChat?.coach?.image : "./images/avatar.png"}
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
                      {currentChat.coach?.firstName + " " + currentChat.coach?.lastName }
                    </Typography.Title>
                  </Row>
                  <br/>
                  <Row>
                    <div
                    className="custom-scrollbar"
                    ref={chatContainerRef}
                    onScroll={handleScroll}
                      style={{
                        height: "60vh",
                        width: "100%",
                        overflowY: "auto",overflowX: "hidden",
                     
                        justifyContent: "flex-end",
                      }}
                    >
                      {messages.length > 0 &&
                        messages.map((item, index) => {
                          return (
                            <Row
                              style={{
                                margin: "10px",
                                justifyContent:
                                item.sender._id == user._id
                                    ? "flex-end"
                                    : "flex-start",
                              }}
                            >
                              <Card
                                className="chatCard"
                                bordered={false}
                                style={{
                                  borderRadius:item.sender._id == user._id ? "10px 0px 10px 10px": "0px 10px 10px 10px",
                                  float: "right",
                                  maxWidth: "60%",
                                  padding: "10px",
                                  backgroundColor:item.sender._id == user._id
                                  ? "#d5f3d3"
                                  : "white",
                                }}
                              >
                                <Row gutter={30}>
                                  <Col xs={4} md={3}>
                                    <Image
                                      src={item?.sender?.image ? UPLOADS_URL + "/" + item?.sender?.image : "./images/avatar.png" }
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
                                            {item.sender._id == user._id ? "You" :item.sender.firstName + " " + item.sender.lastName  }
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
                                          {dayjs(item.createdAt).format(
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
                                      {item?.content}
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
                  </> : <>
                  <div style={{width:"100%",height:"100%",display:'flex',justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
                    <Image
                      src={"./images/noChats.png"}
                      height={100}
                      width={100}
                      style={{ borderRadius: "100px", objectFit: "cover" }}
                      preview={false}
                    />
                    &emsp;
                    <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#7cc059",
                        textAlign: "left",
                        marginTop: 10,
                        marginBottom: 0,
                      }}
                    >
                     No Chats Selected
                    </Typography.Title>
                    </div>
                  </>}
                 
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
