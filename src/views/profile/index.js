import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Button, Row, Avatar,DatePicker, Typography, Layout, Card,Form,Input,Radio,Upload } from "antd";
import { useNavigate } from "react-router";
import { UPLOADS_URL } from "../../config/constants/api";
import { Post } from "../../config/api/post";
import { AUTH, STUDENT } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import {CONTENT_TYPE} from "../../config/constants/index"
import swal from "sweetalert";
import dayjs from "dayjs"

//icons
import {
  FaArrowRight,
  FaArrowLeft,
  FaUserAlt,
  FaBox,
  FaUsers,
} from "react-icons/fa";
import {TbCameraPlus} from "react-icons/tb"

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.userData);
  const token = useSelector((state) => state.user?.userToken);
  const [loading, setLoading] = useState(false);
  const [editMode,setEditMode] = useState(false);
  const [imageNew,setImageNew] = useState()

  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  console.log("imageNew",imageNew)

  const onFinish = (values) => {
    setLoading(true);
    const formObject = new FormData();

    if(imageNew){
      formObject.append("image",values.image.fileList[0].originFileObj);
    }

    formObject.append("subjects",values.subjects.split(",").map((value) => value.trim()));



    for (const key in values) {
      if (key !== "image" && key !== "subjects") {
        const item = values[key];
        formObject.append(key, item);
      }
    }
   

    Post(STUDENT.updateProfile,formObject,token,null,CONTENT_TYPE.FORM_DATA)
      .then((response) => {
        setLoading(false);
        if (response?.data?.status) {
          console.log(response?.data)
          dispatch(
            addUser({ user: response.data.data, token: token })
          );

          swal("Success!", "Profile Updated Successfully", "success");
          setLoading(false);
          setEditMode(false);
          setImageNew()
        } else {
          swal("Oops!", response.data.message, "error");
        }
      })
      .catch((e) => {

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
          {<> My Profile</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
      
        <Col xs={24} md={18}>
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
              <Form
                layout="vertical"
                name="basic"
                className="contactForm"
                labelCol={{
                  span: 0,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >

             
              <Row>
                <Col xs={24} md={24}>
                  <Row>
                  {editMode ? 
                  
                  
                  <Form.Item
                    
                      name="image"
                     
                    >
                      <Upload
                        name="image"
                        showUploadList={false}
                        style={{position:"relative"}}

                        beforeUpload={(file) => {     
                          setImageNew( URL.createObjectURL(file))                    
                          return false;
                      }}
                      > 
                      <div style={{padding:"8px",position:"absolute",right:-10,zIndex:2, bottom:40,backgroundColor:"#243D62",display:'flex',maxWidth:"fit-content",color:'white',borderRadius:"20px"}}><TbCameraPlus/></div> <Avatar
                      size={180}
                      src={
                        imageNew ? imageNew  :
                        !user?.image
                          ? "/images/avatar.png"
                          : UPLOADS_URL + "/" + user?.image
                      }
                    /></Upload>
                    </Form.Item> : <Avatar
                    size={180}
                    src={
                      !user?.image
                        ? "/images/avatar.png"
                        : UPLOADS_URL + "/" + user?.image
                    }
                  />}
                  </Row>

                  <br />
                  <br />

                  {editMode ? <>
                    <Row gutter={20}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Full Name*"
                      name="firstName"
                      initialValue={user?.firstName}
                      rules={[
                        {
                          required: true,
                          message: "Please input your full name",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Enter Full Name"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                  <Form.Item
                    label="Parent / Guardian Name*"
                    name="parent"
                    rules={[
                      {
                        required: true,
                        message: "Please input parent / Guardian name!",
                      },
                    ]}
                    initialValue={user?.parent}
                  >
                      <Input
                        size="large"
                        placeholder="Enter Parent / Guardian Name"
                        className="signupFormInput"
                      />

                      
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={20}>
                 
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Email*"
                      name="email"
                      
                      rules={[
                        {
                          required: true,
                          message: "Please input your email",
                        },
                      ]}
                      initialValue={user?.email}
                    >
                      <Input
                        size="large"
                        disabled
                        placeholder="Enter Email Address"
                        className="signupFormInput"
                      />

                      
                    </Form.Item>
                  </Col>
                 
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Phone Number*"
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please input phone number",
                        },
                      ]}
                      initialValue={user?.phoneNumber}
                    >
                      <Input
                        size="large"
                        placeholder="Enter Phone Number"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={20}>
                  {/* <Col xs={24} md={12}>
                    <Form.Item
                      label="Home Number*"
                      name="homeNumber"
                      
                      rules={[
                        {
                          required: true,
                          message: "Please input Home Number",
                        },
                      ]}
                      initialValue={user?.homeNumber}
                    >
                      <Input
                        size="large"
                        placeholder="Enter Home Number"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col> */}
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="City*"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "Please input city name",
                        },
                      ]}
                      initialValue={user?.city}
                    >
                      <Input
                        size="large"
                        placeholder="Enter City"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={20}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="State*"
                      name="state"
                      rules={[
                        {
                          required: true,
                          message: "Please input state",
                        },
                      ]}
                      initialValue={user?.state}
                    >
                      <Input
                        size="large"
                        placeholder="Enter State"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={
                        <>
                          Zip Code <span className="redStar">*</span>
                        </>
                      }
                      name="zip"
                      rules={[
                        {
                          required: true,
                          message: "Please input zip code",
                        },
                      ]}
                      initialValue={user?.zip}
                    >
                      <Input
                        size="large"
                        placeholder="Enter Zip Code"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col>
                </Row>

          

                <Row gutter={20}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Grade*"
                      name="gradeLevel"
                      rules={[
                        {
                          required: true,
                          message: "Please input Grade Level",
                        },
                      ]}
                      initialValue={user?.gradeLevel}
                    >
                      <Input
                        size="large"
                        placeholder="Enter Grade Level"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Intrested Subjects*"
                      name="subjects"
                    rules={[
                      {
                        required: true,
                        message: "Enter Intrested Subjects",
                      },
                    ]}
                    initialValue={user?.subjects.join(",")}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Intrested Subjects (comma seperated)"
                        className="signupFormInput"
                      />
                    </Form.Item>
                  </Col>
                </Row>
    
                </> :<>
                <Row>
                     <Col xs={12} sm={6}>
                       <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        First Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                       {user?.firstName}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Age
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.age}
                      </Typography.Text>
                    </Col>
                    <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Grade Level
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.gradeLevel}
                      </Typography.Text>
                    </Col>

                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={8}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                       Parent/ Guardian Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.parent}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={8}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Email Address
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.email}
                      </Typography.Text>
                    </Col>
                 
                  </Row>

                  {/* <Row style={{ marginTop: 40 }}>
                   

                    <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Home Number
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                       {user?.homeNumber}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        School Name
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                       {user?.school}
                      </Typography.Text>
                    </Col>
                  </Row> */}

                  <Row style={{ marginTop: 40 }}>
                  <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Phone Number
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.phoneNumber}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                       City
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.city}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                       State
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.state}
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col xs={12} sm={6}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                        Zip code
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.zip}
                      </Typography.Text>
                    </Col>

                    <Col xs={12} sm={12}>
                      <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                       Interested Subjects
                      </Typography.Title>
                      <Typography.Text
                        className="fontFamily1"
                        style={{
                          fontSize: "14px",
                          color: "grey",
                          textAlign: "left",
                        }}
                      >
                        {user?.subjects.join(" , ")}
                      </Typography.Text>
                    </Col>

                   
                  </Row>
                  </>}
                 

                  <Row style={{ marginTop: 30 }}>
                   {editMode && <> <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                     
                    >
                     Update Profile
                    </Button>&emsp;&emsp;
                    <Button
                      className="fontFamily1"
                      style={{
                        marginTop: "0px",
                        padding: "10px 30px",
                        cursor: "pointer",
                        color: "black",
                        height: "auto",
                        border: "1px solid #203657",
                        fontWeight: "bold",
                      }}
                      ghost
                      size="large"
                      onClick={(e) => {e.preventDefault(); setEditMode(false)}}
                    >
                     Cancel
                    </Button></> }
                 
                  </Row>

                  <Row style={{ marginTop: 30 }}>
                    &emsp;
                    {/* <Button
                      className="fontFamily1"
                      style={{
                        marginTop: "0px",
                        padding: "10px 40px",
                        cursor: "pointer",
                        color: "black",
                        height: "auto",
                        border: "1px solid #203657",
                        fontWeight: "bold",
                      }}
                      ghost
                      size="large"
                    >
                      Join Lesson
                    </Button> */}
                  </Row>
                </Col>
              </Row>
              </Form>

              {!editMode && <><Button
                      type="primary"
                      htmlType="button"
                      className="loginButton"
                      onClick={() => setEditMode(true)}
                    >
                      Edit Profile
                    </Button>   &emsp;&emsp;
                    <Button
                      className="fontFamily1"
                      style={{
                        marginTop: "0px",
                        padding: "10px 30px",
                        cursor: "pointer",
                        color: "black",
                        height: "auto",
                        border: "1px solid #203657",
                        fontWeight: "bold",
                      }}
                      ghost
                      size="large"
                      onClick={()=>   navigate("/change-password")}
                    >
                      Change Password
                    </Button></>}
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Profile;

