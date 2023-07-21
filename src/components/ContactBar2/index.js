import React from 'react'
import { Row, Col, Typography } from "antd"
import MainButton from '../MainButton'

const ContactBar2 = () => {
    return (
        <Row>
            <Col xs={24} md={12} style={{ background: "#ad0103", padding: "55px 0" }}>
                <Typography.Title style={{ fontSize: 25, color: "#fff", textAlign: "center", margin: "5px 0" }}>Contact Us</Typography.Title>
                <Typography.Title style={{ fontSize: 25, color: "#fff", textAlign: "center", margin: "5px 0" }}>+44 20 3290 5500</Typography.Title>
                <Typography.Title style={{ fontSize: 25, color: "#fff", textAlign: "center", margin: "5px 0" }}>support@logodesignscompany.co.uk</Typography.Title>
            </Col>
            <Col xs={24} md={12} style={{ background: "#1e292f", padding: "55px 0", textAlign: "center" }}>
                <Typography.Title style={{ fontSize: 25, color: "#fff", textAlign: "center", margin: "5px 0", fontWeight: 700 }}>Get A Web Design Package</Typography.Title>
                <Typography.Title style={{ fontSize: 25, color: "#fff", textAlign: "center", margin: "5px 0", fontWeight: 700 }}>That Is Right For Your Business</Typography.Title>
                <MainButton
                    style={{
                        marginTop: 35,
                        fontSize: 17,
                        padding: "8px 40px",
                        height: "auto",
                        fontWeight: 500,
                    }}
                >
                    Place Your Order
                </MainButton>
            </Col>
        </Row>
    )
}

export default ContactBar2