import {Image} from "antd"
import { Row, Col, Typography, List } from "antd"

const FeatureSection = () => {
    return (
        <Row style={{ background: "#1e292f", padding: "35px 0", justifyContent: "center" }}>
            <Col span={22}>
                <Typography.Title style={{ textAlign: "center", color: "#fff", fontSize: 36, fontWeight: "600" }}>Our Budget-Friendly Package Includes</Typography.Title>
            </Col>
            <Col xs={22} md={7}>
                <List
                    dataSource={[
                        "48 Hour Turnaround",
                        "100% Bespoke Artwork",
                        "Unlimited Revisions",
                        "Source & Vector Files",
                    ]}
                    renderItem={item => (
                        <List.Item style={{ border: "none", alignItems: "center", display: "flex", justifyContent: "flex-start", padding: "2px 0" }}>
                            <Image alt={"Failed to load image"} preview={false} src="/images/icon-check.png" width="18" height="16" /><span style={{ marginLeft: 5, color: "#fff", fontSize: 16 }}>{item}</span>
                        </List.Item>
                    )}
                />
            </Col>
            <Col xs={22} md={7}>
                <List
                    dataSource={[
                        "Web & Print Files",
                        "Design Consultancy",
                        "Full Copyrights & Ownership",
                        "Greyscale & Colour Options",
                    ]}
                    renderItem={item => (
                        <List.Item style={{ border: "none", alignItems: "center", display: "flex", justifyContent: "flex-start", padding: "2px 0" }}>
                            <Image alt={"Failed to load image"} preview={false} src="/images/icon-check.png" width="18" height="16" /><span style={{ marginLeft: 5, color: "#fff", fontSize: 16 }}>{item}</span>
                        </List.Item>
                    )}
                />
            </Col>
            <Col xs={22} md={7}>
                <List
                    dataSource={[
                        "Money Back Guarantee",
                        "Aftersales Support",
                        "No Hidden Fees",
                        "Secure Payment",
                    ]}
                    renderItem={item => (
                        <List.Item style={{ border: "none", alignItems: "center", display: "flex", justifyContent: "flex-start", padding: "2px 0" }}>
                            <Image alt={"Failed to load image"} preview={false} src="/images/icon-check.png" width="18" height="16" /><span style={{ marginLeft: 5, color: "#fff", fontSize: 16 }}>{item}</span>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

export default FeatureSection