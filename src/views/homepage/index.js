import React from "react";
// import AuthLayout from "../../components/";
import {
  Col,
  Row,
  Typography,
  List,
  Form,
  Layout,
  Input,
  Button,
  Card,
  Tabs,
  Table,
  Image,
  Divider,
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { FiMail, FiLock } from "react-icons/fi";
import swal from "sweetalert";

// import router from "next/router";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  // useEffect if user is already logged in
  React.useEffect(() => {
    if (user && token) {
      navigate("/", { replace: true });
    }
  }, [user, token]);

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
    <Layout className="AuthBackground" style={{ minHeight: "100vh" }}>
      <Row>
        <Col xs={24} md={10}>
          <div className="heroSection">
            <Row style={{ width: "100%", justifyContent: "center" }}>
              <Col xs={20} md={20} className="formWrap">

                <Typography.Title
                  className="fontFamily1"
                  style={{ fontSize: "55px", color: "white" }}
                >
                  {
                    <>
                      {" "}
                      Unlock Your True Potential with <br /> Zipper Learning
                    </>
                  }
                </Typography.Title>

                <Typography.Text
                  className="fontFamily1"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  Achieve Your Goals and Thrive in Today's Fast-Paced World.
                  This is Youy Gateway to Success.
                </Typography.Text>
                <br />
                <br />
                <br />
                <Input
                  className="heroSerch"
                  placeholder="Find You tutor & coach"
                  suffix={
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="heroButton"
                    >
                      Search
                    </Button>
                  }
                  size="large"
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={0} sm={0} md={14}>
          <div className="authImageBox">
            <Row style={{ width: "100%", paddingRight: "20px" }} gutter={40}>
              <Col xs={0} sm={6} md={6}>
                <div className="authImage3 " />
              </Col>
              <Col xs={0} sm={6} md={6}>
                <div className="authImage2" />
              </Col>
              <Col xs={0} sm={12} md={12}>
                <div className="authImage1" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* section 2 */}
      <Row className="whiteBackground" style={{backgroundColor:"white",justifyContent:"center" }}>
        <Col xs={24} md={22}>
            <div  style={{display:"flex", justifyContent:"center", flexDirection:'column',height:"100vh",padding:"20px"}}>
            <Typography.Title
                  className="fontFamily1"
                  style={{ fontSize: "35px",fontWeight:800, color: "black",textAlign:'center' }}
                >            
                     Discover Your Ideal Tutor or Coach. 
                </Typography.Title>

                <Typography.Text
                  className="fontFamily1"
                  style={{ fontSize: "16px", color: "black",textAlign:'center' }}
                >
                  {<>We provide top-notch online tutoring and coaching services for <br/> K-12 and adult learners like you</>}
                </Typography.Text>
                <br/>
                <Row>
                    <Col xs={22} sm={12} md={4}>
                    <Card
    title="Card title"
    bordered={false}
    style={{
      width: "100%",
    }}
  ></Card>
                    </Col>
                </Row>
            </div>
         
            
          
        </Col>
      </Row>

    </Layout>
  );
}

export default Homepage;
