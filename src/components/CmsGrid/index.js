import { Row, Col } from 'antd'
import {Image} from "antd"

const CmsGrid = () => {
    return (
        <>
            <Row style={{ alignItems: "center", padding: "25px 0", background: "#f3f3f3" }} justify="space-evenly">
                <Col xs={24} md={3}>
                    <div style={{ textAlign: "center" }}>
                        <Image preview={false} alt={"Failed to load image"} width={174} height={64} src="/images/cms_03.png" />
                    </div>
                </Col>
                <Col xs={24} md={3}>
                    <div style={{ textAlign: "center" }}>
                        <Image preview={false} alt={"Failed to load image"} width={174} height={64} src="/images/cms_05.png" />
                    </div>
                </Col>
                <Col xs={24} md={3}>
                    <div style={{ textAlign: "center" }}>
                        <Image preview={false} alt={"Failed to load image"} width={174} height={64} src="/images/cms_07.png" />
                    </div>
                </Col>
                <Col xs={24} md={3}>
                    <div style={{ textAlign: "center" }}>
                        <Image preview={false} alt={"Failed to load image"} width={174} height={64} src="/images/cms_09.png" />
                    </div>
                </Col>

                <Col xs={24} md={3}>
                    <div style={{ textAlign: "center" }}>
                        <Image preview={false} alt={"Failed to load image"} width={211} height={64} src="/images/cms_11.png" />
                    </div>
                </Col>

                <Col xs={24} md={3}>
                    <div style={{ textAlign: "center" }}>
                        <Image preview={false} alt={"Failed to load image"} width={160} height={64} src="/images/index_39.jpg" />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CmsGrid