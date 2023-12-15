import React, { useState, useRef } from "react";
import { Col, Row, Typography, Layout, Checkbox, Card } from "antd";
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css"
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

function MyCalendar() {



const localizer = dayjsLocalizer(dayjs)

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
          {<>My Calendar</>}
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
      localizer={localizer}
      events={[
        { title: 'event 1', start: new Date() , end: new Date() },
        { title: 'event 2', start: new Date() , end: new Date() }
      
      ]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
    />
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default MyCalendar;
