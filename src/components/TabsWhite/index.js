import { Row, Col, Typography, Tabs } from 'antd'

const TabsComponent = ({ title, subtitle, tabs,bg,titleStyle,className,fullWidth }) => {
  const { TabPane } = Tabs;
    return (
        <>
         <Row style={{textAlign:'center', justifyContent:'center',  background: bg && `url(${bg})` }}>
            <Col xs={24}  md={20}>
            <Row style={{ alignItems: "center", padding: "50px 0", justifyContent: "center" }} className="tabs-head" >
                <Col span={20} style={{ maxWidth: 810 }} >
                    <div style={{ textAlign: "center" }}>
                        {title && <Typography.Title level={3} style={{ color: "#232323", fontSize: 36, fontWeight: 600, marginBottom: 0, ...titleStyle }}>
                            {title}
                        </Typography.Title>}

                        {subtitle && <Typography.Title level={4} style={{ color: "white", fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                            {subtitle}
                        </Typography.Title>}
                    </div>
                </Col>
            </Row>


            <Row style={{ alignItems: "center", paddingBottom: "20px",  border:'none' }} justify="space-evenly" className={`tabs-content ${className ? "className" : "tabsWhite"}`}>
                <Tabs  className="scrollbarHidden" defaultActiveKey="1" tabPosition="top" style={{width:'100%'}}  >
                    {tabs?.map((tab) => (
                        <TabPane tab={tab?.name} key={tab?.key}>
                            {tab?.content}
                        </TabPane>
                    ))}
                </Tabs>
            </Row>
            </Col>
         </Row>

         
        </>
    )
}

export default TabsComponent