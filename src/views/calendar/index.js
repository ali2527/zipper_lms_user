import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Typography,
  Button,
  Layout,
  Select,
  Checkbox,
  Card,
} from "antd";
import { SCHEDULE, USERS } from "../../config/constants/api";
import Calendar from "../../components/Calendar";
import { Get } from "../../config/api/get";
import { Post } from "../../config/api/post";
import { LESSON } from "../../config/constants/api";
import dayjs from "dayjs";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";



function BookingCalendar() {
  const { id } = useParams();
  const {state} = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState();
  const [schedule, setSchedule] = useState([]);
  const [selectedTimeSlots,setSelectedTimeSlots] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const [selectedMonthRange, setSelectedMonthRange] = useState([
    dayjs(),
    dayjs().add(15, "day"),
  ]);
  const [selectedDate, setSelectedDate] = useState();
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    getCoachSchedule();
    getCoachDetails();
  }, []);

  const getCoachSchedule = () => {
    try {
      Get(SCHEDULE.getScheduleByCoachId + id, token).then((response) => {
        console.log("response", response);
        if (response?.status) {
          setSchedule(response?.data);
          console.log("updated days", response.data);
        } else {
          console.log("response", response);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCoachDetails = async () => {
    try {
      const response = await Get(USERS.getCoachById + id);
      if (response?.status) {
        setSubjects(response?.data?.coach?.subjects);
      } else {
        console.log("Error", response?.message, "error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSelect = (date) => {
    setSelectedDate(new Date(date));
    setSelectedTimeSlots([]);
    setSelectedSubject();
    let day = schedule.find(
      (item) =>
        item.dayOfWeek.toLowerCase() == date.format("dddd").toLowerCase()
    );
    setTimeSlots(day.timeSlots);
    console.log(day);
  };

  const bookLesson = () => {
    try {
      setLoading(true);



      if(state.type == "RESCHEDULE"){

        let data = 
        {
          subject:selectedSubject,
          rescheduler:"STUDENT",
          lessonDate:selectedDate,
          slots:selectedTimeSlots.map(item => {return({
            lessonStartTime:item.startTime,
            lessonEndTime:item.endTime
        });})     
      };


        Post(LESSON.rescheduleLesson + state.lesson, data,token)
        .then((response) => {
          setLoading(false);
          console.log("response",response);
          if (response?.data?.status) {
              
            swal("Success", response.data.message, "success");
            navigate("/dashboard")
           
          } else {
            
            console.log("response", response);
            swal("Oops!", response?.data?.message || response?.response?.data?.message, "error");
          }
        })
      }else{

        let data = 
        {
          subject:selectedSubject,
          lessonType:state.type,
          lessonDate:selectedDate,
          coachId:id,
          studentId:user._id,
          slots:selectedTimeSlots.map(item => {return({
            lessonStartTime:item.startTime,
            lessonEndTime:item.endTime
        });})     
      };
        Post(LESSON.bookLesson, data,token)
        .then((response) => {
          setLoading(false);
          console.log("response",response);
          if (response?.data?.status) {
              
            swal("Success", response.data.message, "success");
            navigate("/dashboard")
           
          } else {
            
            console.log("response", response);
            swal("Oops!", response?.data?.message || response?.response?.data?.message, "error");
          }
        })
      }

    
    } catch (error) {

      console.log("error",error)
      swal("Oops!", error?.message || "Internal server error", "error");
    }
  }

  return (
    <Layout style={{ minHeight: "80vh" }}>
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
          {<>Calendar</>}
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
              className="infoBox"
              bordered={false}
              style={{
                width: "100%",
                padding: "20px",
              }}
            >
              <Calendar
                schedule={schedule}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleSelect={handleSelect}
              />

              <br />
              <br />

              {timeSlots.length > 0 && (
                <>
                  {" "}
                  <Typography.Title
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "black",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    From
                  </Typography.Title>
                  <br />
                  <Checkbox.Group
                    className="avaliblityGroup"
                    value={selectedTimeSlots}
                    onChange={(e) => setSelectedTimeSlots(e)}
                    options={timeSlots.map(item => {return({label:
                      dayjs(item.startTime).format("hh:mm a") +
                      "  to  " +
                      dayjs(item.endTime).format("hh:mm a"),
                    value: item});})}
                    style={{
                      display: "flex",
                      columnGap: "50px",
                    }}
                  />
                </>
              )}
              <br />

              {/* {
                          label:
                            dayjs(item.startTime).format("hh:mm a") +
                            "  to  " +
                            dayjs(item.endTime).format("hh:mm a"),
                          value: "item",
                        } */}

              {selectedTimeSlots.length > 0 && (
                <Row>
                  <Col xs={24} md={4}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "black",
                        textAlign: "left",
                        marginTop: 10,
                        marginBottom: 0,
                      }}
                    >
                      Subject
                    </Typography.Title>
                    <br />
                    <Select
                      value={selectedSubject }
                      placeholder="Select Subject"
                      maxTagCount="responsive"
                      style={{
                        width: "100%",
                        fontSize: "14px",
                      }}
                      size="large"
                        onChange={(e)=> setSelectedSubject(e)}
                      options={subjects.map((item) => {
                        return {
                          value: item,
                          label: item[0].toUpperCase() + item.slice(1),
                        };
                      })}
                    />
                  </Col>
                </Row>
              )}

              <br />

              {selectedSubject && (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="loginButton"
                  onClick={() => bookLesson()}
                >
                 {state.type == "RESCHEDULE" ? "Reschedule Lesson" : "Book Lesson"}
                </Button>
              )}
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default BookingCalendar;
