import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, List, message, Spin } from "antd";
import MainButton from "../MainButton";
import { useRouter } from "next/router";
import { PLANS, PORTFOLIO } from "../../config/constants/api";
import { Get } from "../../config/api";
import {BsFillCheckCircleFill} from "react-icons/bs"; 

const Plans = ({
  title,
  secondTitle,
  text,
  hideButton,
  category = "packages",
  showAll,
  titleStyles,
  secondTitleStyles,
  priceLabel,
  fullWidth
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
      let path = `${PLANS.getByCategory}/${catgoryId}`;
      path += !showAll ? `?limit=${6}` : "";
      Get(path).then((response) => {
        setLoading(false);
        if (response.status) {
          setPackages(response.data);
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

  return (
    <>
      {(title || secondTitle || text) && (
        <Row
          style={{
            alignItems: "center",
            padding: "50px 0 30px 0",
            justifyContent: "center",
          }}
          ref={ref}
        >
          <Col
            span={20}
            style={{ maxWidth: 810 }}
            className={inView && loadCount < 3 ? "zoom-in" : ""}
          >
            <div style={{ textAlign: "center" }}>
           {title &&   <Typography.Title
              level={3}
                style={{
                  color: "#ad0103",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 0,
                  ...titleStyles,
                }}
              >
                {title}
              </Typography.Title>}
              {secondTitle && <Typography.Title
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
              </Typography.Title>}
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
            </div>
          </Col>
        </Row>
      )}

      <Row
        style={{justifyContent: "center",marginTop:0}}
        ref={plansView.ref}
       
      >
        <Col xs={24} md={24}  lg={fullWidth ? 22 : 20}>
        <Row  gutter={24} style={{ alignItems: "center", }}
        justify="center">
        {loading && <Spin indicator={antIcon} />}
        {packages?.map((item, index) => {
          const classes = [];
          if (inView && loadCount < 3) classes.push("zoom-in");
          return (
            <Col
              key={index}
              xs={22}
              
              md={fullWidth ? 8 : 7}
              style={{
                minHeight: 300,
              }}
              className={classes.join(" ")}
            >
              <div
                style={{
                  textAlign: "center",
                  border: (item.name === "Premium" || item.name === "Article Writing Packages") ? "none" :"1px solid lightgrey",
                  padding: "30px",
                  borderRadius: "20px",
                  backgroundColor: (item.name === "Premium" || item.name === "Article Writing Packages") ? "#ad0103" : "#fff",
                  marginTop:item.items.length > 5 ? 0 : 20,
                }}
              >
                <div>
                  <Row>
                    <Typography.Title
                    level={4}
                      style={{
                        color: (item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "grey",
                        
                        fontSize: 18,
                        fontWeight: 600,
                        marginBottom: 0,
                      }}
                    >
                      {item.name}
                    </Typography.Title>
                  </Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Typography.Title
                    level={5}
                      style={{
                        color:(item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "#ad0103",
                        fontSize: 34,
                        display: "inline",
                        fontWeight: "bolder",

                        marginTop: 5,
                      }}
                    >
                      ${item.discountedPrice}
                    </Typography.Title>
                    &nbsp;
                    {item.discount > 0 && <><Typography.Title
                    level={5}
                      style={{
                        color: (item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "lightgrey",
                        fontSize: 20,
                        display: "inline",
                        fontWeight: "bolder",
                        marginTop: 5,
                      }}
                    >
                      /
                    </Typography.Title>
                    &nbsp;
                    <Typography.Title
                    level={5}
                      style={{
                        color: (item.name === "Premium" || item.name === "Article Writing Packages") ? "white" :"lightgrey",
                        fontSize: 20,
                        display: "inline",
                        fontWeight: "bolder",
                        textDecoration: "line-through",
                        marginTop: 5,
                      }}
                    >
                      ${item.price}
                    </Typography.Title></>}
                  </Row>

                  <Row>
                    { item.description && <Typography.Title
                    level={5}
                      style={{
                        color: (item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "grey",
                        fontSize: 12,
                        textAlign: "left",
                        fontWeight: "normal",
                        marginBottom: 0,
                      }}
                    >
                      {
                        item.description
                      }
                    </Typography.Title>}
                  </Row>
                </div>
                <br />

                <List
                  className="custom-scroll"
                  style={{
                   height: item.items.length > 5 ? 340 : 210,
                    overflowY: "auto",
                    // minHeight: 200,
                  }}
                  size="small"
                  dataSource={item.items}
                  renderItem={(listItem) => (
                    <List.Item
                      style={{
                        fontSize: 16,
                        color: (item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "#777",
                        padding: "5px 0px",
                        textAlign: "left",
                        border:"none"
                      }}
                    >
                      <List.Item.Meta
                        avatar={
                          <BsFillCheckCircleFill  style={{color:(item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "grey"}}/>
                        }
                        title={<span style={{ color: (item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "#777"}} >{listItem}</span>}
                      />
                    </List.Item>
                  )}
                />
                <br />

                <MainButton
                  varient={"outline"}
                  onClick={() => {
                    router.push(`/checkout?plan=${item._id}`);
                  }}
                  style={{
                    fontSize: 17,
                    padding: "12px 40px",
                    height: "auto",
                    fontWeight: "bold",
                    borderColor: "#ad0103",
                    color: "#ad0103",
                    backgroundColor:(item.name === "Premium" || item.name === "Article Writing Packages") ? "white" : "transparent",
                    marginTop: 15,
                  }}
                >
                  Choose Plan
                </MainButton>
              </div>
            </Col>
          );
        })}
        </Row>
        </Col>

      </Row>

      {!hideButton && (
        <Row
          style={{ alignItems: "center", padding: "25px 0" }}
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

export default Plans;
