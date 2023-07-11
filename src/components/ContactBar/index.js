import React from 'react'
import { Row, Col } from 'antd'
import { FaPhoneAlt, FaEnvelope, FaCommentAlt } from "react-icons/fa"

const ContactBar = () => {
    return (
        <Row style={{ textAlign: "center", justifyContent: "center", background: "#ad0103", marginBottom: 5 }}>
            <Col span={24}>
                <Row style={{ alignItems: "center", padding: "35px 0"}}  justify="space-evenly">
                    <Col xs={24} md={5}>
                        <div style={{ display: "flex", alignItems: "center", placeContent: "center" }}>
                            <FaPhoneAlt fontSize={28} color="#fff" style={{ transform: "rotate(29deg)" }} />
                            <a style={{ marginLeft: 4, color: "#fff", fontSize: 20 }} href="mailto:+0 123 4567">+0 123 4567</a>
                        </div>
                    </Col>
                    <Col xs={24} md={5}>
                        <div style={{ display: "flex", alignItems: "center", placeContent: "center" }}>
                            <FaEnvelope fontSize={24} color="#fff" />
                            <a style={{ marginLeft: 4, color: "#fff", fontSize: 19 }} href="mailto:sales@webdesignscompany.uk">sales@webdesignscompany.uk</a>
                        </div>
                    </Col>

                    <Col xs={24} md={5}>
                        <div style={{ display: "flex", alignItems: "center", placeContent: "center" }}>
                            <FaCommentAlt fontSize={28} color="#fff" />
                            <a href="#" style={{ marginLeft: 4, color: "#fff", fontSize: 18 }}>Live Chat</a>
                        </div>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default ContactBar