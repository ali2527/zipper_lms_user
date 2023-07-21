import {Image} from "antd"
import { Row, Col, Typography } from 'antd'

const FeatureGrid2 = ({ title, subtitle, items, containerStyle, itemTitleColor, multitext,multitextStyle }) => {
    return (
        <>
            <Row style={{ paddingBottom: 20, justifyContent: "center", ...containerStyle, paddingTop: 50 }}>
                <Col span={20} style={{ maxWidth: 900 }}>
                    <div style={{ textAlign: "center" }}>
                        <Typography.Title style={{ color: "#ad0103", fontSize: 40, fontWeight: 600 }}>
                            {title}
                        </Typography.Title >
                        <Typography.Title
                            style={{ fontSize: 17, fontWeight: 400, color: "#414141", marginTop: 15 }}
                        >
                            {subtitle}
                        </Typography.Title>
                        {multitext && multitext?.map((item, index) =>
                            <Typography.Title
                                key={index}
                                style={{ fontSize: 17, fontWeight: 400, color: "#414141", marginTop: 15, ...multitextStyle }}
                            >
                                {item}
                            </Typography.Title>
                        )}
                    </div>
                </Col>
            </Row>

            <Row style={{ justifyContent: "center", ...containerStyle }} >
                {items?.map((item, index) =>
                    <Col xs={20} md={11} style={{ padding: "10px 0" }} key={index}>
                        <Row>
                            <Col span={5}>
                                <Image preview={false} alt={"Failed to load image"} src={item.image} width={item.imageDimentions[0]} height={item.imageDimentions[1]} />
                            </Col>
                            <Col span={19}>
                                <Typography.Title level={4} style={{ fontSize: 24, fontWeight: 500, color: itemTitleColor ? itemTitleColor : "#5f5f5f" }}>{item.title}</Typography.Title>
                                <Typography.Text
                                    style={{ fontSize: 15, fontWeight: 400, color: "#414141", marginTop: 15 }}
                                >
                                    {item.text}
                                </Typography.Text>
                            </Col>
                        </Row>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default FeatureGrid2