import { Row, Col, Typography, Image as AntImage, message, Spin } from 'antd';
import { useState, useEffect } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import Link from "next/link"
import { Get } from "../../config/api"
import { PORTFOLIO, UPLOADS_URL } from '../../config/constants/api';

const Portfolio = ({ title, subtitle, text, images,buttons,titleStyles,titleLevel,isWide = false, category = "logoDesign" }) => {
    const [portfolio, setPortfolio] = useState([])
    const [loading, setLoading] = useState(false)
    const key = Object.keys(PORTFOLIO.categroy).find(key => key === category)
    const catgoryId = PORTFOLIO.categroy[key]
    const antIcon = (
        <LoadingOutlined
            style={{
                color: "#ad0103",
                fontSize: 55,
            }}
            spin
        />
    );

    useEffect(() => {
        getPortfolio()
    }, [])

    const getPortfolio = () => {
        setLoading(true)
        try {
            Get(`${PORTFOLIO.getByCategory}/${catgoryId}`)
                .then((response) => {
                    setLoading(false)
                    if (response.status) {
                        setPortfolio(response.data)
                    }

                })
        } catch (error) {
            setLoading(false)
            message.error(error.message ? error.message : "Something went wrong")
        }
    }
    return (
        <Row style={{justifyContent:'center'}}>
            <Col xs={24} lg={isWide ? 22 : 18}>
            
            {(title || subtitle || text) && (
                <Row style={{ marginBottom: 20, justifyContent: "center", padding: "50px 0 0 0" }}>
                    <Col span={20} style={{ maxWidth: 845 }}>
                        <div style={{ textAlign: "center" }}>
                       {title && <Typography.Title
                        
                                className='banner-title'
                                level={titleLevel ? titleLevel : 3}
                                style={{fontWeight: "bolder", ...titleStyles  }}
                            >
                                {title}
                            </Typography.Title>}
                            {subtitle && <Typography.Title level={4} style={{ fontSize: 16, fontWeight: 500, marginTop: 0, marginBottom:0 }}>
                                {subtitle}
                            </Typography.Title>}
                            {text && <Typography.Text
                                style={{ fontSize: 16, fontWeight: 400, color: "#414141", marginTop: 15 }}
                            >
                                {text}
                            </Typography.Text>}
                        </div>
                    </Col>
                </Row>
            )}
            <Row style={{ justifyContent: "center", padding: "40px 0 0 0" }} gutter={25}>
                {loading && <Spin indicator={antIcon} />}
                <AntImage.PreviewGroup>
                    {portfolio?.map((item, index) =>
                        <Col key={index} xs={24} md={8} style={{ textAlign: "center", marginBottom:'30px' }}>
                             {item.url ?  <Link href={item.url}>
                                  <a target="_blank" rel="noopener noreferrer">
                            <AntImage
                                preview={false}
                                style={{ borderRadius: 5, border: "1px solid lightgrey", minHeight: "250px" }}
                                height={"auto"}
                                alt={item.altText}
                                width={"auto"}
                                src={`${UPLOADS_URL}/${item.image}`}
                            />
                            </a>
                            </Link> :  <AntImage
                                // preview={{ visible: false }}
                                style={{ borderRadius: 5, border: "1px solid lightgrey", minHeight: "250px" }}
                                height={"auto"}
                                alt={item.altText}
                                width={"auto"}
                                src={`${UPLOADS_URL}/${item.image}`}
                            />}
                        </Col>
                    )}
                </AntImage.PreviewGroup>
            </Row>
            <Row style={{ justifyContent: "center", padding: "0px 0 40px 0" }} >
            {buttons}
            </Row>
            </Col>
        </Row>
    )
}

export default Portfolio