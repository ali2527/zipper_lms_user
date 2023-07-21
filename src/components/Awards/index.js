import {Image} from "antd"
import { Row, Col,Typography } from 'antd'

const Awards = () => {
    return (
        <Row style={{ alignItems: "center", backgroundColor:'#efefef',margin:0 }} justify="center">
            <Col xs={20} lg={20}>

            
        <Row gutter={24} style={{ alignItems: "center", backgroundColor:'#efefef',margin:0 }} justify="center">
            <Col xs={8} md={4}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                <Typography.Title
                className="fontWeight900"
                    level={2}
                    style={{
                      color: "#273da9",
                      fontSize: "20px",
                      marginBottom: 5,
                    }}
                  >
                    Awards & Recognitions
                  </Typography.Title>
                </div>
            </Col>
            <Col xs={8} md={4}>
                <div style={{ textAlign: "center" ,padding:'20px 10px' }}>
                    <Image preview={false} alt={"Failed to load image"} height={60}  src="/images/award1.webp" />
                </div>
            </Col>
            <Col xs={8} md={4}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} height={60}  src="/images/award2.webp" />
                </div>
            </Col>
            <Col xs={8} md={4}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} height={60}  src="/images/award3.webp" />
                </div>
            </Col>

            <Col xs={8} md={4}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} width={100}  src="/images/award4.webp" />
                </div>
            </Col>
            <Col xs={8} md={4}>
                <div style={{ textAlign: "center",padding:'20px 10px'  }}>
                    <Image preview={false} alt={"Failed to load image"} height={80}  src="/images/award5.webp" />
                </div>
            </Col>
            
        </Row></Col></Row>
    )
}
export default Awards