import React, { useState, useRef } from "react";
import { Col, Row, Typography, Layout, Checkbox, Card } from "antd";

import Calander from "../../components/Calander";

import dayjs from "dayjs";

const schedule = [
  {
    day: 0,
    dayOfWeek: "Sunday",
    timeSlots: [
      {
        startTime: "12:00",
        endTime: "13:00",
        _id: "64be2fd9f0feaad4d88a2731",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        _id: "64be2fd9f0feaad4d88a2732",
      },
    ],
  },
  {
    day: 5,
    dayOfWeek: "Friday",
    timeSlots: [
      {
        startTime: "12:00",
        endTime: "13:00",
        _id: "64be2fd9f0feaad4d88a2734",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        _id: "64be2fd9f0feaad4d88a2735",
      },
    ],
  },
  {
    day: 6,
    dayOfWeek: "Saturday",
    timeSlots: [
      {
        startTime: "12:00",
        endTime: "13:00",
        _id: "64be2fd9f0feaad4d88a2737",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        _id: "64be2fd9f0feaad4d88a2738",
      },
    ],
  },
];

function BookingCalander() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMonthRange, setSelectedMonthRange] = useState([
    dayjs(),
    dayjs().add(15, "day"),
  ]);
  const [selectedDate, setSelectedDate] = useState();
  const [timeSlots, setTimeSlots] = useState([
    {
      startTime: "12:00",
      endTime: "13:00",
      _id: "64be2fd9f0feaad4d88a2737",
    },
    {
      startTime: "13:00",
      endTime: "14:00",
      _id: "64be2fd9f0feaad4d88a2738",
    },
  ]);

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
              <Calander schedule={schedule} selectedDate ={selectedDate} setSelectedDate={setSelectedDate} />

              <br />
              <br />

              <Typography.Title
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
                  return item.startTime + " to " + item.endTime;
                })}
                style={{
                  display: "flex",
                  columnGap: "50px",
                }}
              />
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default BookingCalander;
