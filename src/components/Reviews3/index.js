import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, message, Spin, Image } from "antd";
import { useRouter } from "next/router";
import { REVIEWS, PORTFOLIO, UPLOADS_URL } from "../../config/constants/api";
import { Get } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Reviews3 = ({
  title,
  secondTitle,
  text,
  hideButton,
  category = "Uncategorized",
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
  const [packages, setPackages] = useState([]);
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
    568: { items: 2 },
    1024: { items: 2 },
  };

  return (
    <>
      <Row
        style={{
          justifyContent: "center",
          marginTop: 0,
          paddingTop: "50px",
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
                      <Row>
                        <Image
                         src={`${UPLOADS_URL}/${item.image}`}
                          style={{ width: "100%" }}
                          preview={false}
                          alt={"Failed to load image"}
                        />

                        <div style={{ padding: "20px" }}>
                          <Row
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              textAlign: "left",
                            }}
                          >
                         
                            
                              <Typography.Title
                                level={3}
                                style={{
                                  textAlign: "left",
                                  fontSize: "25px",
                                  fontWeight: 600,
                                  color:'#ad0103',
                                  marginBottom: 0,
                                }}
                              >
                                {item.title}
                              </Typography.Title>
                          
                          </Row>

                          <br />

                          <Row>
                          <Typography.Title
                                level={4}
                                style={{
                            
                                  fontSize: 16,
                                
                                  textDecoration:"italic",
                                  textAlign: "justify",
                                  fontWeight: "normal",
                                  marginBottom: 10,
                                }}
                              >
                                {item.content}
                              </Typography.Title>
                          </Row>
                          <Row>
                          {item.customer != "undefined" && <Row>
                              <Typography.Title
                              level={3}
                                style={{
                                  color: "#080740",
                                  marginTop:'10px',
                                
                                  fontSize: 16,
                                  fontWeight: "bold",
                                  display: "inline",
                                  textAlign: "left",
                                  marginBottom: 5,
                                }}
                              >
                                - {item.customer}
                              </Typography.Title>
                              
                            </Row>}
                          

                            {item.company != "undefined" && <Row>
                              <Typography.Title
                              level={4}
                                style={{
                                  color: "#080740",
                                  marginTop:'10px',
                                  marginLeft: "5px",
                                  fontSize: 16,
                                  fontWeight: "bold",
                                  display: "inline",
                                  textAlign: "left",
                                  marginBottom: 5,
                                }}
                              >
                                , {item.company}
                              </Typography.Title>
                              
                            </Row>}
                          </Row>
                        </div>
                      </Row>
                    </div>
                  );
                })}
              </AliceCarousel>
            )}
          </Row>
        </Col>
      </Row>
      <br/>
      <br/>
      
    </>
  );
};

export default Reviews3;
