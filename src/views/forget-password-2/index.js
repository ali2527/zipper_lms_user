import React,{useRef} from "react";
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
  InputNumber,
  Checkbox,
  Tabs,
  Table,
  Image,
  Divider,
} from "antd";
import { useNavigate,useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { FiMail, FiLock } from "react-icons/fi";
import swal from "sweetalert";




function ForgetPassword2() {
  const {state} = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
    let input_1 = useRef();
  let input_2 = useRef();
  let input_3 = useRef();
  let input_4 = useRef();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);
   let [codeData, setCodeData] = React.useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  console.log("state",state)
  // import router from "next/router";
  const onFinish = () => { 

    let code = codeData.input1 + codeData.input2 + codeData.input3 + codeData.input4

    if(codeData.input1 == "" || codeData.input2 == "" || codeData.input3 == "" || codeData.input4 == "" ){
      swal("Error","Incomplete Code" ,"error");
    }
    Post(AUTH.verifyCode, {code,email:state.email})
      .then((response) => {
        setLoading(false);
        if (response?.data?.status) {
          swal("Success", response?.data?.message, "success");
          navigate("/forgot-password-3", { replace: true,state:{code,email:state.email} });
        } else {
          swal("Oops!", response?.data?.message || response?.response?.data?.message, "error");
        }
      })
      .catch((e) => {
        console.log(e,"ww")
        swal("Oops!","internal server error", "error");
        setLoading(false);
      });
  };

    function handleInputChange(name, value) {
    setCodeData({ ...codeData, [name]: value });
  }


  return (
     
    <Layout className="AuthBackground" style={{ minHeight: "100vh" }}>
      <Row>
        <Col xs={0} sm={0} md={14}>
        <div className="authImageBox">
          <Row style={{width:'100%',paddingRight:'20px'}} gutter={40}>
            <Col xs={0} sm={6} md={6}>
             <div className="authImage1" />
            </Col>
            <Col xs={0} sm={6} md={6}>
            <div className="authImage2" />
            </Col>
            <Col xs={0} sm={12} md={12}>
            <div className="authImage3" />
            </Col>
          </Row>
          </div>
        </Col>

        <Col xs={24} md={10}>
          <div className="authFormBox">
            <Row style={{ width: "100%", justifyContent: "center" }}>
              <Col xs={20} md={20} className="formWrap">
                <Row style={{ width: "100%", textAlign: "center" }}>
                  <Col xs={24} md={0}>
                    <Image
                      src={"/images/logo.png"}
                      style={{ maxWidth: "200px" }}
                      alt=""
                      preview={false}
                    />
                  </Col>
                </Row>

                <Typography.Title
                  className="fontFamily1"
                  style={{ fontSize: "30px", color: "white" }}
                >
                  Forgot Password
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{ fontSize: "14px", color: "white" }}
                >
                 An email has been sent to you with a verification code. Please enter it here.
                </Typography.Text>
                <br /> <br />
              
                 
                  <div>
                    <Row gutter={10}>
                      <Col>
                      <input autoFocus type="text" pattern="\d*" maxlength="1" className="codeInput" onChange={(text) => {
                    input_1.focus();
                    handleInputChange("input1", text.target.value.toLowerCase());
                  }} />
                      </Col>
                      <Col>
                      <input type="text" maxlength="1" className="codeInput" ref={(val) => (input_1 = val)} onChange={(text) => {
                    input_2.focus();
                    handleInputChange("input2", text.target.value.toLowerCase());
                  }} />
                      </Col>
                      <Col>
                      <input type="text" maxlength="1" className="codeInput" ref={(val) => (input_2 = val)} onChange={(text) => {
                    input_3.focus();
                    handleInputChange("input3", text.target.value.toLowerCase());
                  }} />
                      </Col>
                      <Col>
                      <input type="text" maxlength="1" className="codeInput" ref={(val) => (input_3 = val)} onChange={(text) => {
                    handleInputChange("input4", text.target.value.toLowerCase());
                  }} />
                      </Col>
                    </Row>
                

                
                   


                  </div>
<br />

                    


                  

                  
                  

                
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginButton"
                      onClick={() => onFinish()}
                    >
                      {loading ? "Loading..." : "Continue"}
                    </Button>
                    <br/>  <br/>
                  
                <Row>
                    <Col xs={24} md={12}>
                      <Button
                        type="link"
                        style={{
                    
                          color: "white",
                          fontWeight: "bold",
                          textDecoration: "underline",
                          fontSize: "14px",
                        }}
                        onClick={() => navigate("/signin")}
                      >
                        <p className="fontFamily1" style={{ margin: 0 }}>
                          Back to Log In
                        </p>
                      </Button>
                    </Col>
                  </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default ForgetPassword2;
