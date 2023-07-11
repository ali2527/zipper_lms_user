import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Image } from "antd";
import { BsArrowRight, BsSquareFill } from "react-icons/bs";
import { Row, Col, Typography, Breadcrumb } from "antd";

const CustomBanner = ({
  title,
  subtitle,
  titleLevel,
  features,
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
  bgColor,
  colStyle,
  titleStyles,
  containerStyle,
  breadcrumbs,
  width=22,
  form,
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
    className="bgCover"
      ref={ref}
      style={{
        background: bgColor ? bgColor : bg ? `url(${bg})` : `url(/images/home1.webp)`,
        minHeight: height ? height : 550,
        width: "100%",
        justifyContent: "center" ,
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: image ? "0px" : "10px",
        ...containerStyle,
      }}
    >
      <Col xs={24} md={width} >
        <Row style={{
       
        width: "100%",
        justifyContent: onlyText ? "center" : image ? "center" :'flex-start',
        alignItems: "center",
      }}>
        {onlyText ? (
          <Col span={20} style={{ ...colStyle }}>
            {subtitle && (
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "#f1f1f1",
                  textAlign: "center",
                }}
              >
                {subtitle}
              </p>
            )}
            {title && (
              <Typography.Title
                className="banner-title"
                level={titleLevel ? titleLevel : 2}
                style={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  ...titleStyles,
                }}
              >
                {title}
              </Typography.Title>
            )}
            {multitext &&
              multitext?.map((item, index) => (
                <p
                  key={index}
                  marginTop={index > 0 ? 0 : 15}
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                  }}
                >
                  {item}
                </p>
              ))}
            {text && (
              <p
                style={{
                  fontSize: 18,
                  fontWeight: "normal",
                  color: "#f1f1f1",
                  textAlign: "center",
                }}
              >
                {text}
              </p>
            )}
            {breadcrumbs && (
              <Breadcrumb
                separator={<BsArrowRight style={{ color: "white" }} />}
                style={{ color: "white" }}
              >
                {breadcrumbs?.map((item, index) => (
                  <Breadcrumb.Item
                    key={index}
                    style={{
                      opacity: item.dim ? 0.7 : 1,
                      color: "#fff",
                      fontSize: 16,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title || item}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            )}
            {buttons}
          </Col>
        ) : (
          <>
            <Col
              xs={24}
              md={11}
              className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
            >
              <Row style={{ padding: 20 }}>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#f1f1f1",
                    margin: 0,
                  }}
                >
                  {subtitle}
                </p>
                <Row>
                  <Col
                    xs={24}
                    lg={24}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography.Title
                      className="banner-title"
                      level={titleLevel ? titleLevel : 2}
                      style={{ fontWeight: "bolder", ...titleStyles }}
                    >
                      {title}
                    </Typography.Title>
                  </Col>
                </Row>
                {multitext &&
                  multitext?.map((item, index) => (
                    <p
                      key={index}
                      marginTop={index > 0 ? 0 : 15}
                      style={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "normal",
                        textAlign: "justify",
                      }}
                    >
                      {item}
                    </p>
                  ))}
                {text && (
                  <p style={{ fontSize: 14, color: "#f1f1f1", margin: 0 }}>
                    {text}
                  </p>
                )}
              </Row>
              <Row style={{ paddingLeft: 20 }}>
                <Col span={12}>
                  {features && (
                    <ul style={{ listStyleType: "none", paddingLeft: 10 }}>
                      {features
                        .slice(0, features.length > 4 ? 3 : 2)
                        .map((item, index) => (
                          <li key={index} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                            
                              <p
                                key={index}
                                style={{
                                  fontSize: 14,
                                  color: "#f1f1f1",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                 <BsSquareFill
                                style={{
                                  color: "#ffff00",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                                {item}
                              </p>
                            
                           
                          </li>
                        ))}
                    </ul>
                  )}
                </Col>
                {features?.length > 2 && (
                  <Col span={12}>
                    {features && (
                      <ul style={{ listStyleType: "none", paddingLeft: 10 }}>
                        {features
                          .slice(
                            features.length > 4 ? 3 : 2,
                            features.length > 4 ? 6 : 4
                          )
                          .map((item, index) => (
                            <li key={index} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                           
                              <p
                                key={index}
                                style={{
                                  fontSize: 14,
                                  color: "#f1f1f1",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                 <BsSquareFill
                                style={{
                                  color: "#ffff00",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                                {item}
                              </p>
                            </li>
                          ))}
                      </ul>
                    )}
                  </Col>
                )}
              </Row>
              <Row style={{ paddingLeft: 20 }}>{buttons}</Row>
            </Col>
            {image && (
              <Col
                xs={24}
                md={11}
                style={{
                  padding: 20,
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  src={image}
                  style={{ ...imageStyles }}
                />
              </Col>
            )}
            {form && (
              <Col
                xs={24}
                md={12}
                style={{
                  padding: 20,
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                }}
              >
                <Row style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                  <Col  xs={24}
                md={16}>
               {form}
               </Col>
                </Row>
              </Col>
            )}
          </>
        )}

        {others}
        </Row>
      </Col>
    </Row>
  );
};

export default CustomBanner;
