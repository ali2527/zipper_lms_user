import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, List, message, Spin,Image } from "antd";
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
                minHeight: 250,
              }}
              className={classes.join(" ")}
            >
              <div
                style={{
                  textAlign: "center",
                  border: "1px solid lightgrey",
                  paddingBottom: "30px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  marginTop:item.items.length > 5 ? 0 : 20,
                  position:'relative'
                }}
              >
               {item.name === "Platinum" && window.innerWidth > 400 && <div style={{position:'absolute', right:-50, top:-50}}><Image src="/images/bestSeller.webp" width={100}  height={90}  preview={false}/></div>}
               {item.name === "Start Up" && window.innerWidth > 400 && <div style={{position:'absolute', right:-12, top:-10}}><Image src="/images/Popular_text.png" width={100}  height={90}  preview={false}/></div>}
                <div>
                  <Row style={{justifyContent:'center',  padding:'14px', flexDirection:'column'}}>
                    <Typography.Title
                    level={4}
                      style={{
                        color: "#ad0103",
                        textAlign:'center',
                        fontSize: 20,
                        fontWeight: 600,
                        marginBottom: 0,
                      }}
                    >
                      {item.name}
                    </Typography.Title>
                    <Typography.Title
                    level={4}
                      style={{
                        color: "grey",
                        textAlign:'center',
                        fontSize: 14,
                        fontWeight: 400,
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      {item.name === "Start Up" ? "Ideal for Beginners and Start-Ups" : item.name === "Gold" ? "Cost Effective Package for your business" : "Exclusive Branding Solution for Business" }
                    </Typography.Title>
                  </Row>
                  <Row style={{ display: "flex", alignItems: "center",background:"#ffff00" }} >
                    <Col span={14} style={{padding:'10px', background:"#ad0103",clipPath: "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)"}}>
                    <Typography.Title
                    level={5}
                      style={{
                        color:"white",
                        fontSize: 25,
                        
                        display: "inline",
                        fontWeight: "bolder",
                        marginBottom: 0,
                        marginTop: 5,
                      }}
                    >
                      ${item.discountedPrice}<sup>.00</sup>
                    </Typography.Title>
                    </Col>
                    <Col span={10}>
                    {item.discount > 0 && 
                    <Typography.Title
                    level={5}
                      style={{
                        color: "grey",
                        fontSize: 25,
                        display: "inline",
                        fontWeight: "bolder",
                        textDecoration: "line-through",
                             marginBottom: 0,
                        marginTop: 5,
                      }}
                    >
                      {item.price}
                    </Typography.Title>}
                    </Col>
                 
                  
                  </Row>
                </div>
                <br />

                <List
                  className="custom-scroll"
                  style={{
                   height: item.items.length > 5 ? 260 : 210,
                    overflowY: "auto",
                    padding:'0px 20px'
                    // minHeight: 200,
                  }}
                  size="small"
                  dataSource={item.items}
                  renderItem={(listItem) => (
                    <List.Item
                      style={{
                        fontSize: 16,
                        color:  "#777",
                        padding: "5px 0px",
                        textAlign: "left",
                        border:"none"
                      }}
                    >
                      <List.Item.Meta
                        avatar={
                          <BsFillCheckCircleFill  style={{color:"#ad0103"}}/>
                        }
                        title={<span style={{ color:  "#777"}} >{listItem}</span>}
                      />
                    </List.Item>
                  )}
                />
                <br />

                <MainButton
                  varient={"outline"}
                  onClick={() => {
                    router.push(`/payment-select?plan=${item._id}`);
                  }}
                  style={{
                    fontSize: 14,
                    padding: "10px 30px",
                    height: "auto",
                    fontWeight: "normal",
                    borderColor: "#ad0103",
                    color: "#ffffff",
                    backgroundColor:"#ad0103",
                    marginTop: 15,
                  }}
                >
                  Order Now
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
