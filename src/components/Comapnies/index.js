import {Image} from "antd"
import { Row, Col } from 'antd'

const Companies = () => {
    return (
        <Row gutter={24} style={{ alignItems: "center", backgroundColor:'#efefef',margin:0 }} justify="space-evenly">
            <Col xs={8} md={3}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/company_1.webp" />
                </div>
            </Col>
            <Col xs={8} md={3}>
                <div style={{ textAlign: "center" ,padding:'20px 10px' }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/company_2.webp" />
                </div>
            </Col>
            <Col xs={8} md={3}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/company_3.webp" />
                </div>
            </Col>
            <Col xs={8} md={3}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/company_4.webp" />
                </div>
            </Col>

            <Col xs={8} md={3}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/company_5.webp" />
                </div>
            </Col>
            <Col xs={8} md={3}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/company_6.webp" />
                </div>
            </Col>
            <Col xs={8} md={3}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/company_7.webp" />
                </div>
            </Col>
        </Row>
    )
}
export default Companies