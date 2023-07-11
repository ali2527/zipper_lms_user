import { Row, Col, Typography } from 'antd'

const CenterTextSection = ({ title, subtitle, buttons, sectionStyle, containerStyle }) => {
    return (
        <Row style={{ alignItems: "center", padding: "35px 0", background: "#ad0103", ...sectionStyle }} justify="space-evenly">
            <Col span={20} style={{...containerStyle}}>
                <div style={{ textAlign: "center" }}>
                    <Typography.Title  style={{ color: "#fff", fontSize: 36, fontWeight: 600 }}>
                        {title}
                    </Typography.Title>
                    <Typography.Title  style={{ color: "#fff ", fontSize: 20, fontWeight: 400, marginTop: 0 }}>
                        {subtitle}
                    </Typography.Title>
                    {buttons}
                </div>
            </Col>
        </Row>
    )
}

export default CenterTextSection