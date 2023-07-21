import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { BsSquareFill } from "react-icons/bs";
import { Row, Col, Typography, List, message, Steps } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { Get } from "../../config/api"
import { PORTFOLIO } from '../../config/constants/api';
const { Step } = Steps;

const SliderBanner = ({
  title,
  features,
  list,
  text,
  multitext,
  buttons,
  others,
  image,
  imageDimentions,
  height,
  onlyText,
  imageStyles,
  bg,
  colStyle,
  titleStyles,
  containerStyle,
  breadcrumbs,
  category = "logoDesign",
}) => {
  const [loadCount, setLoadCount] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false)
  const key = Object.keys(PORTFOLIO.categroy).find(key => key === category)
  const catgoryId = PORTFOLIO.categroy[key]


  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  useEffect(() => {
    getPortfolio();
  } , []);

console.log("portfolio",portfolio)
  const antIcon = (
    <LoadingOutlined
        style={{
            color: "#ad0103",
            fontSize: 55,
        }}
        spin
    />
);


  const getPortfolio = () => {
    setLoading(true)
    try {
        Get(`${PORTFOLIO.getByCategory}/${catgoryId}`)
            .then((response) => {
                setLoading(false)
                if (response.status) {
                  console.log("$$$$$$$$$$$$$$$$$$$",response.data)
                    setPortfolio(response.data)
                }

            })
    } catch (error) {
        setLoading(false)
        message.error(error.message ? error.message : " Something went wrong")
    }
}

  const contentStyle = {
  
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <Row
      ref={ref}
      style={{
        background: bg ? `url(${bg})` : `url(/images/home1.webp)`,
        minHeight: height ? height : 550,
        width: "100%",
        justifyContent: image ? "center" : "flex-start",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "40px 0",
        ...containerStyle,
      }}
    >
      <Col xs={24} sm={24} md={24} lg={22}>
        <Row style={{ justifyContent: "center" }}>
          <Col
            xs={24}
            lg={18}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography.Title
              className="banner-title"
              level={3}
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                ...titleStyles,
              }}
            >
              {title}
            </Typography.Title>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
      
        
        <Col
            xs={24}
            md={11}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row style={{ padding: 20, alignItems: "center" }}>
              {list && (
                <div style={{ marginTop: 15 }}>
                  <List
                    style={{ width: "100%" }}
                    dataSource={list.slice(0, 3)}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          width: "100%",

                          padding: 20,
                          borderBottom: "none",
                        }}
                      >
                        <Row>
                          <Col span={4}>{item.icon}</Col>
                          <Col span={20}>
                            <Typography.Title
                              level={4}
                              style={{
                                marginLeft: 5,
                                color: "white",
                                fontSize: 20,
                                fontWeight: "bold",
                              }}
                            >
                              {item.title}
                            </Typography.Title>
                            <Typography.Text
                              style={{
                                marginLeft: 5,
                                color: "white",
                                fontSize: 14,
                                textAlign: "justify",
                              }}
                            >
                              {item.text}
                            </Typography.Text>
                          </Col>
                        </Row>
                      </List.Item>
                    )}
                  />
                </div>
              )}
            </Row>
            <Row style={{ paddingLeft: 20 }}>
              {features && (
                <ul style={{ listStyleType: "none", paddingLeft: 10 }}>
                  {features.map((item, index) => (
                    <li key={index}>
                      <BsSquareFill
                        style={{
                          color: "white",
                          fontSize: 10,
                          display: "inline",
                        }}
                      />
                      &emsp;
                      <Typography.Text
                        key={index}
                        style={{
                          fontSize: 14,
                          color: "#f1f1f1",
                          display: "inline-block",
                          margin: 0,
                        }}
                      >
                        {item}
                      </Typography.Text>
                    </li>
                  ))}
                </ul>
              )}
            </Row>
            <Row style={{ paddingLeft: 20 }}>{buttons}</Row>
          </Col>
          <Col
            xs={24}
            md={11}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row style={{ padding: 20, alignItems: "center" }}>
              {list && (
                <div style={{ marginTop: 15 }}>
                  <List
                    style={{ width: "100%" }}
                    dataSource={list.slice(3, 6)}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          width: "100%",

                          padding: 20,
                          borderBottom: "none",
                        }}
                      >
                        <Row>
                          <Col span={4}>{item.icon}</Col>
                          <Col span={20}>
                            <Typography.Title
                              level={4}
                              style={{
                                marginLeft: 5,
                                color: "white",
                                fontSize: 20,
                                fontWeight: "bold",
                              }}
                            >
                              {item.title}
                            </Typography.Title>
                            <Typography.Text
                              style={{
                                marginLeft: 5,
                                color: "white",
                                fontSize: 14,
                                textAlign: "justify",
                              }}
                            >
                              {item.text}
                            </Typography.Text>
                          </Col>
                        </Row>
                      </List.Item>
                    )}
                  />
                </div>
              )}
            </Row>
            <Row style={{ paddingLeft: 20 }}>
              {features && (
                <ul style={{ listStyleType: "none", paddingLeft: 10 }}>
                  {features.map((item, index) => (
                    <li key={index}>
                      <BsSquareFill
                        style={{
                          color: "white",
                          fontSize: 10,
                          display: "inline",
                        }}
                      />
                      &emsp;
                      <Typography.Text
                        key={index}
                        style={{
                          fontSize: 14,
                          color: "#f1f1f1",
                          display: "inline-block",
                          margin: 0,
                        }}
                      >
                        {item}
                      </Typography.Text>
                    </li>
                  ))}
                </ul>
              )}
            </Row>
            <Row style={{ paddingLeft: 20 }}>{buttons}</Row>
          </Col>

          {others}
        </Row>
      </Col>
    </Row>
  );
};

export default SliderBanner;
