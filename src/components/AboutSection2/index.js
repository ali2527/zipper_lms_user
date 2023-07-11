import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Image } from "antd";
import { Row, Col, Typography } from "antd";

const AboutSection2 = ({
  title,
  title2,
  subtitle,
  titleLevel,
  features,
  text,
  multitext,
  buttons,
  others,
  image1,
  image2,
  imageDimentions,
  height,
  onlyText,
  imageStyles,
  bg,
  colStyle,
  titleStyles,
  containerStyle,
  breadcrumbs,
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
        background: bg ? `url(${bg})` : `url(/images/home1.webp)`,
        minHeight: height ? height : 550,
        width: "100%",
        justifyContent: "center" ,
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding:  "10px",
        ...containerStyle,
      }}
    >
      <Col xs={24} md={22} >
      <br/>
      <br/>
        <Row style={{
       
        width: "100%",
        justifyContent: "center" ,
        alignItems: "center",
      }}>
       <Col span={20} style={{ ...colStyle }}>
           
            {title && (
              <Typography.Title
                className="banner-title"
                level={titleLevel ? titleLevel : 2}
                style={{
                  fontWeight: "bolder",
                  color: "white",
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
            
            {buttons}
          </Col>

        {others}
        </Row>
        <Row gutter={10} style={{
       marginTop: "20px",
       width: "100%",
       justifyContent: "center" ,
       alignItems: "center",
     }}>
     <Col xs={24} sm={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            {image1 && (  <Image alt="image1" src={image1} style={{ ...imageStyles }} />)}

     </Col>
<Col xs={24} sm={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            {image2 && (  <Image alt="image1" src={image2} style={{ ...imageStyles }} />)}
</Col>

       
       </Row>
       <br/>
       <Row style={{
       marginTop  : "30px",
       width: "100%",
       justifyContent: "center" ,
       alignItems: "center",
     }}>
      <Col span={20} style={{ ...colStyle }}>
           {subtitle && (
             <p
               style={{
                 fontSize: 16,
                 fontWeight: 500,
                 color: "white",
                 textAlign: "center",
               }}
             >
               {subtitle}
             </p>
           )}
           {title2 && (
             <Typography.Title
               className="banner-title"
               level={titleLevel ? titleLevel : 2}
               style={{
                color:'#ad0103',
                 fontWeight: "bolder",
                 textAlign: "center",
                 ...titleStyles,
               }}
             >
               {title2}
             </Typography.Title>
           )}
       </Col>
         

       </Row>
       <Row gutter={10} style={{
       marginTop: "20px",
       width: "100%",
       justifyContent: "center" ,
       alignItems: "center",
     }}>
      {features && features.map((item, index) => {
        return( <Col xs={24} sm={6} key={index} style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
        <Typography.Title
                  className="banner-title"
                  level={3}
                  style={{
                   color:'#ffff00',
                    fontWeight: "bolder",
                    fontSize:'30px',
                    textAlign: "center",
                  }}
                >
                 {item.count}
                </Typography.Title>
                  <p
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </p>
        </Col>);
     })}
     
   
       </Row>
       {others}
      </Col>
    </Row>
  );
};

export default AboutSection2;
