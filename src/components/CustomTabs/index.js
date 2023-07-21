import { Row, Col, Typography, Tabs } from 'antd'
import TabContent from './TabContent'

const CustomTabs = () => {
  const { TabPane } = Tabs;
const router = useRouter()
    return (
        <>  
            <Row style={{ alignItems: "center", padding: "50px 0", justifyContent: "center" }} className="tabs-head" >
                <Col span={20} style={{ maxWidth: 810 }} >
                    <div style={{ textAlign: "center" }}>
                        <Typography.Title style={{ color: "#ad0103", fontSize: 36, fontWeight: 600, marginBottom: 0 }}>
                            Creating The Splendid Company Logo Designs For All Organisations
                        </Typography.Title>
                        <Typography.Title style={{ color: "#414141", fontSize: 16, fontWeight: 400, marginTop: 0 }}>
                            We are a leading logo design firm for building customised logo makers. We aim to deliver quality corporate logos for small and large companies. Our highly creative minds come up with eye-catchy and unique concepts for business branding around the globe. Our designers help enhances your corporate identity and increases your reputation. Let’s discuss your visual ideas with the best company logo design to convert into your brand identity.
                        </Typography.Title>
                    </div>
                </Col>
            </Row>


            <Row style={{ alignItems: "center", padding: "25px 0" }} justify="space-evenly" className="tabs-content">
                <Tabs defaultActiveKey="1" tabPosition="top" >
                    <TabPane tab="Custom Website Development" key="1">
                        <TabContent
                            title="Custom Website Development"
                            text="Our team of professionals work together on complex interfaces in order to deliver the desired web features necessary for the business success."
                            image="/images/custom-design.png"
                            imageDimentions={[669, 369]}
                        />
                    </TabPane>
                    <TabPane tab="Ecommerce Website" key="2">
                        <TabContent
                            title="E-Commerce Website"
                            text="This section contains all the customised features necessary for user engagement."
                            image="/images/e-commerec.png"
                        />
                    </TabPane>
                    <TabPane tab="CMS Website" key="3">
                        <TabContent
                            title="CMS Website"
                            text="Our experts create customized website interfaces through advanced programming languages such as PHP and ASP."
                            image="/images/cms.png"
                        />
                    </TabPane>
                    <TabPane tab="Responsive Website" key="4">
                        <TabContent
                            title="Responsive Website"
                            text="We believe in creating simple and user-friendly websites through advanced technology covering all the aspects of a great website. Our website works smoothly on every device."
                            image="/images/responsive-website.png"
                        />
                    </TabPane>
                    <TabPane tab="B2B Portals" key="5">
                        <TabContent
                            title="B2B Portals"
                            text="Our B2B portals allow you to connect with your customers and other business partners through a single platform. It allows the customers to manage their accounts."
                            image="/images/b_2_b-portal.png"
                        />
                    </TabPane>
                    <TabPane tab="B2C Portals" key="6">
                        <TabContent
                            title="B2C Portals"
                            text="It is the most advanced way of web communication that offers various services to help users interact with each other more often."
                            image="/images/b_2_c.png"
                        />
                    </TabPane>
                </Tabs>
            </Row>
        </>
    )
}

export default CustomTabs