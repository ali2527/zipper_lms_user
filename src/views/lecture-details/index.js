import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Button,
  Row, Typography,
  Layout, Image,
  Card,
  Spin, Input,message
} from "antd";
import { useNavigate, useParams } from "react-router";
import { UPLOADS_URL, COURSE, LECTURE } from "../../config/constants/api";
import { Get } from "../../config/api/get";
import swal from "sweetalert";
import VideoPlayer from "../../components/VideoPlayer";

import "react-alice-carousel/lib/alice-carousel.css";
//icons
import { BsDot } from "react-icons/bs";
//icons

function LectureDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalDocs: 0,
    totalPages: 0,
  });
  const [reviews,setReviews] = useState([])
  const [ratings,setRatings] = useState({})
  const [lecture,setLecture]= useState({})
  const days = ["Sunday","Monday",'Tuesday',"Wednesday","Thursday","Friday","Saturday"]
  const { Search } = Input;
  const [loading, setLoading] = useState(true);
  const [lectures, setLectures] = useState([]);
  const [range, setRange] = useState([10, 200]);
  const [review, setReview] = useState({
    averageRating: 0,
    totalReviews: 0
  });


  const item = { rating: 4 };

  useEffect(()=>{
    getLectureDetails();
  },[])



  const getLectureDetails = async () =>{
    try {
      const response = await Get(LECTURE.getLectureById + id,token);
      if (response?.status) {
        setLecture(response?.data);
      } else {
        swal("Error", response?.message, "error");
       
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  console.log("review",reviews);


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
          {<> Lecture Details</>}
        </Typography.Title>
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
        <Col xs={24} md={20} lg={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "10px",
            }}
          >
            <Card className="contactCard2" bordered={false}>
            {loading && <Row style={{minHeight:"30vh"}} className="flex">
              <Spin size="large" />
                </Row>}
             {!loading && <Row
                style={{
                  width: "100%",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {/* <Image
                  src={lecture?.lecture?.image ? UPLOADS_URL + "/"+ lecture?.lecture?.image :  "/images/avatar.png"}
                  height={350}
                  width={"100%"}
preview={false}
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                /> */}
                 <VideoPlayer data={lecture?.lecture}/>

                <Typography.Title
                  className="fontFamily1"
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "black",
                    textAlign: "left",
                    marginTop: 30,
                  }}
                >
                  {lecture?.lecture?.title}
                </Typography.Title>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "14px",
                    color: "grey",
                    textAlign: "center",
                    justifyContent: "center",
                    textAlign:'justify'
                  }}
                >
                 {lecture?.lecture?.description}
                </Typography.Text>

               

               
               

                <br />
                <br />

                {token && lectures.includes(lecture?.lecture?._id) && <Button
                  type="primary"
                  htmlType="submit"
                  className="loginButton"
                  onClick={() => navigate("/payment/" + lecture?.lecture?._id , {state:{type:"COURSE"}})}
                >
                  Register Now
                </Button>}
              </Row>}
            </Card>
          </div>
        </Col>
       
      </Row>
    </Layout>
  );
}

export default LectureDetails;
