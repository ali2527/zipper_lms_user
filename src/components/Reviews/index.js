import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, message, Spin, Image } from "antd";
import { useRouter } from "next/router";
import { PORTFOLIO, REVIEWS } from "../../config/constants/api";
import { Get } from "../../config/api";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Reviews = ({
  title,
  secondTitle,
  text,
  hideButton,
  category = "LogoDesign",
  showAll,
  titleStyles,
  secondTitleStyles,
  priceLabel,
}) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        color: "white",
        fontSize: 55,
      }}
      spin
    />
  );
  const key = Object.keys(PORTFOLIO.categroy).find((key) => key === category);
  const catgoryId = PORTFOLIO.categroy[key];
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [reviews, setReviews] = useState([]);
  const [loadCount, setLoadCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  const [planLoadCount, setPlanLoadCount] = useState(0);
  const plansView = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setPlanLoadCount(planLoadCount + 1);
  }, [plansView.inView]);

  useEffect(() => {
    getReviews();
  }, []);
  const getReviews = () => {
    setLoading(true);
    try {
      let path = `${REVIEWS.getByCategory}/${catgoryId}`;
      path += !showAll ? `?limit=${10}` : "";
      Get(path).then((response) => {
        setLoading(false);
        if (response.status) {
          setReviews(response.data);
        } else {
          message.error(
            response.message ? response.message : "Something went wrong"
          );
        }
      });
    } catch (error) {
      setLoading(false);
      message.error(error.message ? error.message : "Something went wrong");
    }
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};



  return (
    <>
      {(title || secondTitle || text) && (
        <Row
          style={{
            alignItems: "center",
            padding: "50px 0 30px",
            justifyContent: "center",
            backgroundColor: "#ad0103",
          }}
          ref={ref}
        >
          <Col
            span={20}
            style={{ maxWidth: 810 }}
            className={inView && loadCount < 3 ? "zoom-in" : ""}
          >
            <div style={{ textAlign: "center" }}>
             {title && <Typography.Title
              level={3}
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 0,
                  ...titleStyles,
                }}
              >
                {title}
              </Typography.Title>}
              {secondTitle && (
                <Typography.Title
                level={4}
                  style={{
                    color: "#000",
                    fontSize: 36,
                    fontWeight: 600,
                    marginTop: 0,
                    ...secondTitleStyles,
                  }}
                >
                  {secondTitle}
                </Typography.Title>
              )}
              {text && (
                <Typography.Text
                  style={{
                    color: "#414141",
                    fontSize: 16,
                    fontWeight: 400,
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  {text}
                </Typography.Text>
              )}
            </div>
          </Col>
        </Row>
      )}

      <Row
        style={{
          justifyContent: "center",
          marginTop: 0,
          backgroundColor: "#ad0103",
        }}
        ref={plansView.ref}
      >
        <Col xs={24} md={24} lg={20}>
          <Row gutter={24} style={{ alignItems: "center" }} justify="center">
          <Col xs={24} md={6} style={{textAlign:'center'}}>
          <Typography.Title
          level={4}
                          style={{
                            color: "white",

                            fontSize: 30,
                            fontWeight: 550,
                            marginBottom: 10,
                          }}
                        >
                          Excellent
                        </Typography.Title>
          <Image  preview={false} alt={"Failed to load image"} width={250} src={"/images/review.png"} />
          <Typography.Title
          level={5}
                          style={{
                            color: "white",

                            fontSize: 14,
                            fontWeight: "bold",
                            margin: 10,
                          }}
                        >
                          Based on Reviews of
                        </Typography.Title>
                        <Image  preview={false} alt={"Failed to load image"} width={250} src={"/images/trust.png"} />
          </Col>
          <Col xs={24} md={18}>
          <Row className="mobile_margin_top_20" gutter={10} style={{ alignItems: "center" }} justify="center">
          {loading && <Spin indicator={antIcon} />}
          {!loading && <AliceCarousel
          
        mouseTracking
        // disableDotsControls
        disableButtonsControls
        // items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    >
      {reviews?.map((item, index) => {
              const classes = [];
              if (inView && loadCount < 3) classes.push("zoom-in");
              return (
                <div
                key={index}
  style={{
    textAlign: "center",
    border: "1px solid lightgrey",
    padding: "30px",
    borderRadius: "10px",
    margin: "0 5px",
    backgroundColor: "#fff",
  }}
> <div>
                      <Row className="custom-scroll"
                      style={{
                        height: 70,
                        overflowY: "auto",

                      }}>
                        <Typography.Title
                        level={4}
                          style={{
                            color: "#ad0103",
                            textAlign:'left',
                            fontSize: 18,
                            fontWeight: 600,
                            marginBottom: 0,
                          }}
                        >
                          {item.title}
                        </Typography.Title>
                      </Row>
                     

                      <Row className="custom-scroll"
                      style={{
                        height: 150,
                        overflowY: "auto",
                        // minHeight: 200,
                      }}>
                        <Typography.Title
                        level={4}
                          style={{
                            color: "grey",
                            fontSize: 12,
                            textAlign: "left",
                            fontWeight: "normal",
                            marginBottom: 0,
                          }}
                        >
                          {item.content}
                        </Typography.Title>
                      </Row>

                      <Row>
                        <Typography.Title
                        level={4}
                          style={{
                            color: "#061a61",
                            fontSize: 14,
                            fontWeight: "bold",
                            display:'block',
                            textAlign:'left',
                            marginBottom: 5,
                          }}
                        >
                          {item.customer}
                        </Typography.Title>
                      
                      </Row>
                       <Row style={{marginBottom:'0px'}}>
                       
                        <Image  preview={false} alt={"Failed to load image"} width={100} src={"/images/review.png"} />
                      </Row>
                    </div></div>
              )})}
    </AliceCarousel>}
          
            </Row>
          </Col>
          </Row>
        </Col>
      </Row>
      {!hideButton && (
        <Row
          style={{
            alignItems: "center",
            padding: "25px 0",
            backgroundColor: "#ad0103",
          }}
          justify="space-evenly"
        >
          {/* <Col xs={22} md={10} style={{ textAlign: "center", marginTop: 25 }}>
            <MainButton
              style={{
                fontSize: 17,
                padding: "12px 40px",
                height: "auto",
                fontWeight: 500,
                marginLeft: 10,
              }}
              onClick={() => router.push("/plans")}
            >
              View All reviews
            </MainButton>
          </Col> */}
        </Row>
      )}
    </>
  );
};

export default Reviews;
