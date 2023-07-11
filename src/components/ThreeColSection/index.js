import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Row, Col, Typography } from "antd";

const ThreeColSection = ({
  image,
  title,
  title1,
  title2,
  title3,
  subtitle,
  textColor = "#6A6A6A",
  subtitleStyles,
  imageStyles,
  text,
  text1,
  text2,
  text3,
  list,
  opposeColumns,
  buttons,
  background,
  titleColor,
  customTitle,
  multitext,
  listItemPadding,
  otherSections,
}) => {
  const [loadCount, setLoadCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  return (
    <Row
      ref={ref}
      gutter={[15, 15]}
      style={{
        height: "auto",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "50px 10px",
        margin: 0,
        marginBottom: "50px",
        background: "white",
      }}
    >
      <Col xs={24} md={22}>
        <Row style={{ disply: "flex" }} gutter={20}>
     
          <Col
            xs={24}
            md={8}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row>
              <Col span={24} >
                <div style={{margin:'20px', padding:'30px', border:'5px solid #101049', minHeight:'250px', display:'flex', justifyContent:'center',  flexDirection:'column'}}>
                {title1 && (
                  <Typography.Title
                    level={2}
                    style={{
                      color: titleColor ? titleColor : "#ad0103",
                      fontSize: "16px",
                      fontWeight: 900,
                      marginBottom: 5,
                    }}
                  >
                    {title1}
                  </Typography.Title>
                )}

                <p
                  style={{
                    color: textColor,
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                  }}
                >
                  {text1}
                </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            md={8}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row>
              <Col span={24} >
                <div style={{margin:'20px', padding:'30px', border:'5px solid #101049', minHeight:'250px', display:'flex', justifyContent:'center',  flexDirection:'column'}}>
                {title2 && (
                  <Typography.Title
                    level={2}
                    style={{
                      color: titleColor ? titleColor : "#ad0103",
                      fontSize: "16px",
                      fontWeight: 900,
                      marginBottom: 5,
                    }}
                  >
                    {title2}
                  </Typography.Title>
                )}

                <p
                  style={{
                    color: textColor,
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                  }}
                >
                  {text2}
                </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            md={8}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row>
              <Col span={24} >
                <div style={{margin:'20px', padding:'30px', border:'5px solid #101049', minHeight:'250px', display:'flex', justifyContent:'center',  flexDirection:'column'}}>                {title3 && (
                  <Typography.Title
                    level={2}
                    style={{
                      color: titleColor ? titleColor : "#ad0103",
                      fontSize: "16px",
                      fontWeight: 900,
                      marginBottom: 5,
                    }}
                  >
                    {title3}
                  </Typography.Title>
                )}

                <p
                  style={{
                    color: textColor,
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                  }}
                >
                  {text3}
                </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ThreeColSection;
