import { Image } from "antd";
import { Row, Col, Typography } from "antd";

const Industries = ({ title, subtitle, margin = "30px 0 0 0" }) => {
  return (
    <Row
      style={{
        textAlign: "center",
        justifyContent: "center",
        margin: margin,
        background: "#ae0000",
        padding: "30px 0",
      }}
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
          style={{ alignItems: "center", padding: "25px 0 0 0" }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/engineering.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "800",
              }}
            >
             Engineering
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/religion.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Religion
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/finance.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Financial
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/medical.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Medical
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/health.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Health
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/travel.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Travel
            </Typography.Text>
          </Col>
        </Row>
        <Row
          style={{ alignItems: "center", padding: "16px 0 0 0" }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/construction.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "800",
              }}
            >
              Construction
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/social.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Social
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/insurance.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Insurance
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/matrimony.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Matrimony
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/art.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
             Art             </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/communication.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
             Communication
            </Typography.Text>
          </Col>
        </Row>
        <Row
          style={{ alignItems: "center", padding: "16px 0 0 0" }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/technology.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "800",
              }}
            >
              Technology
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/education.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Education
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/consultation.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
            Consultation
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/entertainment.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Entertainment
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/environment.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Environment
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/fashion.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
             Fashion
            </Typography.Text>
          </Col>
        </Row>
        <Row
          style={{ alignItems: "center", padding: "16px 0 0 0" }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/automotive.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "800",
              }}
            >
              Automotive
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/hr.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              HR
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/architectural.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Architectural
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/spa.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Spa
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/children.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Children 
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/crafts.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Craft
            </Typography.Text>
          </Col>
        </Row>
        <Row
          style={{ alignItems: "center", padding: "16px 0 25px 0" }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/catalogue.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "800",
              }}
            >
              Catologues
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/sports.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Sports
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/food.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Food
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/music.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Music
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/navigation.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Navigation
            </Typography.Text>
          </Col>
          <Col xs={24} md={4}>
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
                width={30}
                height={30}
                src="/images/news.png"
              />
            </div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 14,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              News
            </Typography.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Industries;
