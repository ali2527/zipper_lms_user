import { Image } from "antd"
import { Row, Col, Typography } from 'antd'
import MainButton from "../MainButton"

const TabContent = ({ title, text, image, imageDimentions }) => {
    return (
        <Row
            gutter={25}
            className="tab-content-row"
            style={{
                height: "auto",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "20px 0",
                background: "white"
            }}>
            <Col xs={22} sm={22} md={22} lg={11} className="tab-content-textual-area" >
                <Typography.Title
                    level={1}
                    style={{ color: "#1e292f", fontSize: 38, fontWeight: 600, marginBottom: 0 }}
                >
                    {title}
                </Typography.Title>
                <Typography.Title
                    className='tab-content-text'
                    style={{ fontSize: 15, fontWeight: "normal", color: "#414141", maxWidth: 565 }}
                >
                    {text}
                </Typography.Title>
                <MainButton style={{ marginTop: 25, height: 50, fontSize: 16, color: "#fff", background: "#212121", border: "#212121", padding: "0 45px" }}>Call Now</MainButton>
            </Col>
            <Col xs={22} sm={22} md={22} lg={11}>
                <Image preview={false} alt={"Failed to load image"} src={image} />
            </Col>
        </Row>
    )
}

export default TabContent