import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, message, Spin, Image } from "antd";
import { useRouter } from "next/router";
import { REVIEWS, PORTFOLIO, UPLOADS_URL } from "../../config/constants/api";
import { Get } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CustomPortfolio = ({
  secondTitle,
  text,
  hideButton,
  category = "Uncategorized",
  showAll,
  title,
  titleColor,
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
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <>
      <Row
        style={{
          justifyContent: "center",
          marginTop: 0,
          marginBottom: 0,
          padding: "50px 0px",
          background:"#202162"
        }}
        ref={plansView.ref}
      >
         {title && (

<Typography.Title
    level={2}
    style={{ color: titleColor ? titleColor : "#ad0103", fontSize: 40, fontWeight: 600, marginBottom: 5 }}
>
    {title}
</Typography.Title>
)}
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
                autoPlayInterval={4000}
                autoPlay={true}
                disableDotsControls
                disableButtonsControls
                // items={items}
                responsive={responsive}
                controlsStrategy="alternate"
              >
                <div

                      style={{
                        textAlign: "center",

                        padding: "10px",
                        margin: "0 10px",
                      }}
                    >
                      <Row style={{display:'flex', justifyContent:'center'}}>
                        <Col xs={24} md={24} lg={20}>
                        <Image
                         src={`/images/Logo-Section.webp`}
                          style={{ width: "100%" }}
                          preview={false}
                          alt={"Failed to load image"}
                        />
                        </Col>

                      </Row>
                    </div>
                    <div

style={{
  textAlign: "center",

  padding: "10px",
  margin: "0 10px",
}}
>
<Row style={{display:'flex', justifyContent:'center'}}>
  <Col xs={24} md={24} lg={20}>
  <Image
   src={`/images/Logo-Section2.webp`}
    style={{ width: "100%" }}
    preview={false}
    alt={"Failed to load image"}
  />
</Col>
</Row>
</div>
              </AliceCarousel>
            )}
          </Row>
        </Col>
      </Row>
   
      
    </>
  );
};

export default CustomPortfolio;
