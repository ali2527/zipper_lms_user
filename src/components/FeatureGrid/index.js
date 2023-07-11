import {Image} from "antd"
import { Row, Col, Typography } from 'antd'

const FeatureGrid = ({ title, subtitle, text, items, itemTitleStyles, buttons, columnPadding, bg }) => {
    return (
        <>
            <Row style={{ justifyContent: "center", padding: "50px 0px 20px", background:bg?bg:"#efefef" }}>
                <Col span={20}>
                    <div style={{ textAlign: "center" }}>
                        <Typography.Title style={{ color: "#1e292f ", fontSize: 45, fontWeight: 600, marginBottom: 0 }}>
                            {title}
                        </Typography.Title>
                        <Typography.Title style={{ fontSize: 16, fontWeight: 400, color: "#414141", marginTop: 10, marginBottom: 15 }}>
                            {subtitle}
                        </Typography.Title>
                        <Typography.Text
                            style={{ fontSize: 16, fontWeight: 400, color: "#414141", marginTop: 20 }}
                        >
                            {text}
                        </Typography.Text>
                    </div>
                </Col>
            </Row>

            <Row style={{ justifyContent: "center", padding: 35, background:"#efefef" }} gutter={[0, 20]}>
                {items?.map((item, index) =>
                    <Col key={index} xs={24} md={8} style={{ textAlign: "center", padding: columnPadding ? columnPadding : "0 25px" }}>
                        <Image preview={false} alt={"Failed to load image"} width={item.imageDimentions[0]} height={item.imageDimentions[1]} src={item.image} />
                        <Typography.Title

                            style={{
                                color: "#1e292f ",
                                fontSize: 25,
                                fontWeight: 700,
                                marginBottom: 0,
                                textAlign: "left",
                                marginTop: 10,
                                ...itemTitleStyles
                            }}
                        >
                            {item.title}
                        </Typography.Title>
                        <Typography.Title style={{ color: "#414141 ", fontSize: 16, fontWeight: 400, marginBottom: 0, textAlign: "left", marginTop: 10 }}>
                            {item.text}
                        </Typography.Title>
                    </Col>
                )}
                {buttons}
            </Row>
        </>
    )
}

export default FeatureGrid