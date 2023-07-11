import { Image } from "antd";
import { Row, Col, Typography } from "antd";

const AssuranceGrid = ({ title, subtitle, margin = "30px 0 0 0" }) => {
  return (
    <Row
      style={{ textAlign: "center", justifyContent: "center", margin: margin,background:'#ae0000' }}
    >
      {(title || subtitle) && (
        <Col span={20}>
          <Typography.Title
          level={3}
            style={{
              color: "#fff",
              fontSize: 40,
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Title
          level={4}
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "normal",
              marginBottom: 5,
            }}
          >
            {subtitle}
          </Typography.Title>
        </Col>
      )}
      <Col span={20}>
        <Row
          style={{ alignItems: "center", padding: "25px 0" }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={6}>
            <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/design.webp"
              />
            </div>
            <Typography.Text
              style={{ display:'block',fontSize: 14, color: "white", fontWeight: "800" }}
            >
              Super fast Delivery
            </Typography.Text>
          </Col>
          <Col xs={24} md={6}>
            <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/satisfaction_1.webp"
              />
            </div>
            <Typography.Text
              style={{display:'block', fontSize: 14, color: "white", fontWeight:"bolder" }}
            >
              10,000+ Customers
            </Typography.Text>
            
          </Col>
          <Col xs={24} md={6}>
            <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/24_7.webp"
              />
            </div>
            <Typography.Text
              style={{display:'block',fontSize: 14, color: "white", fontWeight: "bolder" }}
            >
              24/7 Customer Support
            </Typography.Text>
           
          </Col>
          <Col xs={24} md={6}>
            <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/cashback.webp"
              />
            </div>
            <Typography.Text
              style={{display:'block', fontSize: 14, color: "white", fontWeight: "bolder"  }}
            >
              100% Satisfaction Guaranteed
            </Typography.Text>
           
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AssuranceGrid;
