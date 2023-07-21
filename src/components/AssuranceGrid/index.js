import { Image } from "antd";
import { Row, Col, Typography } from "antd";

const AssuranceGrid = ({ title, subtitle, margin = "30px 0 0 0" }) => {
  return (
    <Row
      style={{ textAlign: "center", justifyContent: "center", margin: margin }}
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
          style={{ alignItems: "center", padding: "45px 0" }}
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
                src="/images/delievery.webp"
              />
            </div>
            <Typography.Text
              style={{ display:'block',fontSize: 14, color: "#061a61", fontWeight: "800" }}
            >
              Get a logo within 24hrs 
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: 12, color: "gray",fontWeight: "normal" }}
            >
              We design beautiful logos for multiple industries globally within 24 hours of receiving the details.
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
                src="/images/customer.webp"
              />
            </div>
            <Typography.Text
              style={{display:'block', fontSize: 14, color: "#061a61", fontWeight:"bolder" }}
            >
              10,000+ Customers
            </Typography.Text>
             <Typography.Text
              style={{ fontSize: 12, color: "gray",fontWeight: "normal" }}
            >
              Our team offers everlasting experiences to clients, making them come back to avail more services.
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
                src="/images/support.webp"
              />
            
            </div>
            <Typography.Text
              style={{display:'block',fontSize: 14, color: "#061a61", fontWeight: "bolder" }}
            >
              24/7 Customer Support
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: 12, color: "gray",fontWeight: "normal" }}
            >
              We provide round-the-clock customer support by answering all your queries.
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
                src="/images/satisfaction.webp"
              />
            </div>
            <Typography.Text
              style={{display:'block', fontSize: 14, color: "#061a61", fontWeight: "bolder"  }}
            >
              100% Satisfaction Guarantee
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: 12, color: "gray",fontWeight: "normal" }}
            >
             Customers are more significant to us than profit. We address your problems and provide beneficial solutions.
            </Typography.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AssuranceGrid;
