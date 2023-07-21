import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, message, Spin, Image } from "antd";
import { useRouter } from "next/router";
import { UPLOADS_URL, PORTFOLIO,REVIEWS } from "../../config/constants/api";
import { Get } from "../../config/api";
import { ImQuotesLeft } from "react-icons/im";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Reviews = ({
  title,
  secondTitle,
  text,
  hideButton,
  category = "reviews",
  showAll,
  titleStyles,
  secondTitleStyles,
  priceLabel,
}) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        color: "#ad0103",
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
    getPackages();
  }, []);
  const getPackages = () => {
    setLoading(true);
    try {
      let path = `${REVIEWS.getByCategory}/${catgoryId}`;
      path += !showAll ? `?limit=${6}` : "";
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
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <>
      <Row
        style={{
          justifyContent: "center",
          marginTop: 0,
          paddingTop: "50px",
          backgroundColor: "#ad0103",
        }}
        ref={plansView.ref}
      >
        <Col xs={24} md={24} lg={20}>
          <Row
            className="mobile_margin_top_20"
            gutter={10}
            style={{ alignItems: "center" }}
            justify="center"
          >
            {loading && <Spin indicator={antIcon} />}
            {!loading && (
              <AliceCarousel
                mouseTracking
                infinite={true}
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

                        padding: "10px",
                        margin: "0 10px",
                      }}
                    >
                      <Row gutter={20}>
                        <Col xs={24} md={24} lg={12} stlye={{padding:'30px'}}>
                          <Image
                            src={`${UPLOADS_URL}/${item.image}`}
                            style={{ width: "100%" }}
                            preview={false}
                            alt={"Failed to load image"}
                          />
                        </Col>
                        <Col
                          xs={24}
                          md={24}
                          lg={12}
                          style={{ display:'flex',justifyContent:'center',alignItems:'center' }}
                        >
                          <div style={{ padding: "20px" }}>
                            <Row
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                textAlign: "left",
                              }}
                            >
                              <div style={{ flex: "1" }}>
                                <ImQuotesLeft
                                  style={{ fontSize: "40px", color: "white" }}
                                />
                              </div>
                              &emsp;
                              <div style={{ flex: "10" }}>
                               {item.title && <Typography.Title
                                  level={3}
                                  style={{
                                    color: "white",

                                    textAlign: "left",
                                    fontSize: "25px",
                                    fontWeight: 600,
                                    marginBottom: 0,
                                  }}
                                >
                                  {item.title}
                                </Typography.Title>}
                              </div>
                            </Row>

                            <br />
                            <br />
                            <br />
                            <Row>
                             {item.content && <Typography.Title
                                level={4}
                                style={{
                                  color: "white",
                                  fontSize: 16,
                                  marginLeft: "50px",
                                  textDecoration:"italic",
                                  textAlign: "justify",
                                  fontWeight: "normal",
                                  marginBottom: 10,
                                }}
                              >
                                {item.content}
                              </Typography.Title>}
                            </Row>
                            {(item.customer != "undefined" && item.customer) && <Row>
                              <Typography.Title
                              level={4}
                                style={{
                                  color: "white",
                                  marginTop:'10px',
                                  marginLeft: "50px",
                                  fontSize: 18,
                                  fontWeight: "bold",
                                  display: "block",
                                  textAlign: "left",
                                  marginBottom: 5,
                                }}
                              >
                                - {item.customer}
                              </Typography.Title>
                            </Row>}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </AliceCarousel>
            )}
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
              View All Packages
            </MainButton>
          </Col> */}
        </Row>
      )}
    </>
  );
};

export default Reviews;
