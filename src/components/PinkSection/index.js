import { useState, useEffect } from 'react';
import {Image} from "antd"
import { Row, Col, Typography, } from 'antd'
import { useInView } from "react-intersection-observer";

const PinkSection = ({ title}) => {
    const [loadCount, setLoadCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0
    });
    useEffect(() => {
        setLoadCount(loadCount + 1);
    }, [inView])

    return (
        <Row style={{
            background: "#ad0103",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 0"
        }}>
            <Col span={22}>
                <Typography.Title style={{ color: "#fff", fontWeight: 600, fontSize: 36, textAlign: "center" }}>
                   {title} 
                </Typography.Title>
            </Col>
            <Col xs={20} md={7} style={{ padding: "30px 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image preview={false} alt={"Failed to load image"} width={80} height={80} src="/images/phone-1.png" />
                    <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
                        <p style={{ marginBottom: "unset", fontWeight: "bolder", fontSize: 26 }}>Call Us</p>
                        <p style={{ marginBottom: "unset", fontSize: 18 }}>+44 20 3290 5500</p>
                    </div>
                </div>
            </Col>
            <Col xs={20} md={7} style={{ padding: "30px 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image preview={false} alt={"Failed to load image"} width={80} height={80} src="/images/email.png" />
                    <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
                        <p style={{ marginBottom: "unset", fontWeight: "bolder", fontSize: 26 }}>Email Us</p>
                        <p style={{ marginBottom: "unset", fontSize: 18 }}>support@logodesignscompany.co.uk</p>
                    </div>
                </div>
            </Col>
            <Col xs={20} md={7} style={{ padding: "30px 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image preview={false} alt={"Failed to load image"} width={80} height={80} src="/images/chat-1.png" />
                    <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
                        <p style={{ marginBottom: "unset", fontSize: 18, fontWeight: "bolder" }}>Want To Discuss?</p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default PinkSection