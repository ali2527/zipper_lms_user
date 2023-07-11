import {Image} from "antd"
import { Row, Col } from "antd"

const ContactGrid = () => {
    return (
        <Row style={{
            background: "#ad0103",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Col xs={20} md={7} style={{ padding: "30px 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/24-hours.png" />
                    <div style={{ display: "block", fontSize: 20, color: "white" }}>
                        <p style={{ marginBottom: "unset" }}>We've got your back</p>
                        <p style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26 }}>24 X 7, 365</p>
                    </div>
                </div>
            </Col>
            <Col xs={20} md={7} style={{ padding: "30px 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/call-support.png" />
                    <div style={{ display: "block", fontSize: 20, color: "white" }}>
                        <p style={{ marginBottom: "unset" }}>Consult our expert</p>
                        <a
                            href="tel:+00 123 4567"
                            style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26, color: "white" }}
                        >
                            +00 123 4567
                        </a>
                    </div>
                </div>
            </Col>
            <Col xs={20} md={7} style={{ padding: "30px 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/24-hours-call.png" />
                    <div style={{ display: "block", fontSize: 20, color: "white" }}>
                        <p style={{ marginBottom: "unset" }}>Live Support</p>
                        <p style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26 }}>
                            Chat Now
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default ContactGrid