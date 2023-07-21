import React,{useState,useRef} from "react";
import { Col, Row, Typography,Button, Layout, Checkbox, Card,DatePicker } from "antd";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import {FcPrevious,FcNext} from "react-icons/fc"
import dayjs from 'dayjs';


const { RangePicker } = DatePicker;


const responsive = {
  0: { items: 2 },
  568: { items: 4 },
  1024: { items: 7 },
};




function Calander() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMonthRange, setSelectedMonthRange] = useState([dayjs(), dayjs().add(15, 'day')]);

  const disabledDate = (current) => {
    return current && current.isBefore(dayjs().endOf('day'));
  };


  const carouselRef = useRef();

  const handleOnSlideChanged = (event) => {
    setCurrentIndex(event.item);
  };


  const handlePrevSlide = () => {
    if (carouselRef.current) {
      const prevIndex = currentIndex - 7;
      carouselRef.current.slideTo(prevIndex >= 0 ? prevIndex : 0);
    }
  };

  const handleNextSlide = () => {
    if (carouselRef.current) {
      const nextIndex = currentIndex + 7;
      carouselRef.current.slideTo(nextIndex < dateObjects.length ? nextIndex : dateObjects.length - 1);
    }
  };

  const handleRangePickerChange = (dates) => {
    setSelectedMonthRange(dates);
  };

  const generateDateObjects = (startDate, endDate) => {
    let currentDate = startDate;
    const dateObjects = [];
    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
      dateObjects.push(currentDate);
      currentDate = currentDate.add(1, 'day');
    }
    return dateObjects;
  };

  const dateObjects = generateDateObjects(selectedMonthRange[0], selectedMonthRange[1]);



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
      

              <RangePicker
          picker="month"
          value={selectedMonthRange}
          onChange={handleRangePickerChange}
          disabledDate={disabledDate}
          format="DD MMM, YYYY"
          renderExtraFooter={() => ` < ${selectedMonthRange[0].format('DD MMM, YYYY')} - ${selectedMonthRange[1].format('DD MMM, YYYY')} >`}
      />

<br />
<br />
<Row className="flex" style={{border:'1px solid #dadada',borderRadius:'10px'}}>
<Col xs={0} md={1} className="flex">

<Button shape="circle" className="flex" onClick={handleNextSlide}>
<FcPrevious style={{fontWeight:'bold'}}/>
        </Button>
</Col>
  <Col xs={24} md={22}>
  <AliceCarousel
          mouseTracking
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          ref={carouselRef}
          controlsStrategy="alternate"
          onSlideChanged={handleOnSlideChanged}
        >
        {dateObjects.map((date, index) => (
         <div style={{width:"100%",height:"80px",borderRight:'1px solid #dadada',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
          <Typography.Title
              className="fontFamily1"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'black',
                textAlign: 'left',
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              {date.format('dddd')}
            </Typography.Title>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: '12px',
                color: 'black',
                textAlign: 'left',
                marginTop: 0,
              }}
            >
              {date.format('MMMM DD, YYYY')}
            </Typography.Text>

      </div>
        ))}
      </AliceCarousel>
  </Col>
  <Col xs={0} md={1} className="flex" >

  <Button className="flex" shape="circle"  onClick={handleNextSlide}>
  <FcNext style={{fontWeight:'bold'}}/>
          </Button>
  </Col>
</Row>
     

      
        


   
      

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
                options={[
                  "07 : 00 PM  to  08: 00 PM",
                  "08 : 00 PM  to  09: 00 PM",
                  "09 : 00 PM  to  10: 00 PM",
                ]}
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

export default Calander;
