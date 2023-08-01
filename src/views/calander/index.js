import React, { useState, useEffect } from "react";
import { Col, Row, Typography, Layout, Checkbox, Card } from "antd";
import {SCHEDULE} from "../../config/constants/api"
import Calander from "../../components/Calander";
import { Get } from "../../config/api/get";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";




function BookingCalander() {
  const {id} = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [schedule,setSchedule] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMonthRange, setSelectedMonthRange] = useState([
    dayjs(),
    dayjs().add(15, "day"),
  ]);
  const [selectedDate, setSelectedDate] = useState();
  const [timeSlots, setTimeSlots] = useState([]);


  useEffect(() => {
    getCoachSchedule()
  },[])

  const getCoachSchedule = () => {
    try {
      Get(SCHEDULE.getScheduleByCoachId + id, token).then((response) => {
        console.log("response", response);
        if (response?.status) {
          setSchedule(response?.data)
          console.log("updated days", response.data);
        } else {
          console.log("response", response);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSelect = (date) => {
    setSelectedDate(new Date(date));
    let day = schedule.find(item => item.dayOfWeek.toLowerCase() == date.format("dddd").toLowerCase());
    setTimeSlots(day.timeSlots)
    console.log(day);
  }


  return (
    <Layout style={{ minHeight: "80vh" }}>
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
          {<>Calander</>}
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
              <Calander schedule={schedule} selectedDate ={selectedDate} setSelectedDate={setSelectedDate} handleSelect={handleSelect} />

              <br />
              <br />

             {timeSlots.length > 0 && <> <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                From
              </Typography.Title>
              <br />

              <Checkbox.Group
                className="avaliblityGroup"
                options={timeSlots.map((item) => {
                  return dayjs(item.startTime).format("hh:mm a") + "  to  "  + dayjs(item.endTime).format("hh:mm a") ;
                })}
                style={{
                  display: "flex",
                  columnGap: "50px",
                }}
              /></>}
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default BookingCalander;
