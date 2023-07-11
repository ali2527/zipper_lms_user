import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Row, Col, Typography } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import {ImPlus,ImMinus} from 'react-icons/im'
const { Panel } = Collapse;
import { Collapse } from 'antd';


const FAQ = ({
  title,
  questions,
  buttons,
  others,
  image,
  height,
  bg,
  titleStyles,

}) => {
  const [loadCount, setLoadCount] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [expandIconPosition, setExpandIconPosition] = useState('end');



  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);


  const antIcon = (
    <LoadingOutlined
        style={{
            color: "#ad0103",
            fontSize: 55,
        }}
        spin
    />
);



  const contentStyle = {
  
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <Row
      ref={ref}
      style={{
        background: "#efefef",
        minHeight: height ? height : 550,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "40px 0",
      }}
    >
      <Col xs={24} sm={24} md={24} lg={16}>
        <Row
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography.Title
            level={3}
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              ...titleStyles,
            }}
          >
            {title}
          </Typography.Title>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col
            xs={24}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row style={{ padding: 20, alignItems: "center" }}>
              {questions && (
                <div style={{ marginTop: 15, width: "100%" }}>
                

                {  questions.map((item, index) => {
                    return (
                        <Collapse
                        key={index}
                        className="faq-collapse"
                        bordered={false}
                        style={{ width: "100%", margin: "10px 0",padding:'7px', border: "none", borderRadius:"10px" }}
                        expandIcon={({ isActive }) =>
                          isActive ? <ImMinus /> : <ImPlus />
                        }
                        expandIconPosition="right"
                      >
                        <Panel
                          header={
                            <Typography.Title
                              level={4}
                              style={{
                                fontWeight: "bold",
                                fontSize: "14px",
                                margin: "0",
                              }}
                            >
                              {item.question}
                            </Typography.Title>
                          }
                          key={index}
                        >
                          <div>{item.answer}</div>
                        </Panel>
                      </Collapse>
                    );
                    }
                    )}
                </div>
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

export default FAQ;
