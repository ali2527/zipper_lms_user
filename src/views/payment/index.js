import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Button,
  Row,
  Avatar,
  Typography,
  Layout,
  Checkbox,
  Rate,
  Progress,
  Image,
  Card,
  Form,
  Spin,
  Input,
  Select,
  InputNumber,
  TimePicker,
} from "antd";
import { useNavigate, useParams,useLocation } from "react-router";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { LESSON, PAYMENT, USERS } from "../../config/constants/api";
import { Post } from "../../config/api/post";
import { Get } from "../../config/api/get";
import { RATES, SERVICES } from "../../config/constants/api";
import { addUser, removeUser } from "../../redux/slice/authSlice";
import { SUBJECTS, CONTENT_TYPE } from "../../config/constants/index";
import swal from "sweetalert";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
//icons
import { FaLongArrowAltLeft } from "react-icons/fa";
import { TbCameraPlus } from "react-icons/tb";
import { BsFiles } from "react-icons/bs";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
import PaymentComp from "../../components/Payment"
//icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";





function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lesson, setLesson] = useState({});
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const {state} = useLocation();


  useEffect(() => {
    getLessonDetails();
  }, []);


  console.log("LLLL",state)


  const getLessonDetails = async () => {
    try {
      const response = await Get(LESSON.getLessonById + id, token);

      console.log("response", response);
      if (response?.status) {
        setLesson(response?.data?.lesson);
      } else {
        swal("Error", response?.data?.message, "error");
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
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
          {<> Card Details</>}
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
         
         <PaymentComp type={state.type} />              
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Payment;