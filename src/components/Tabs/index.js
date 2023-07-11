import { Row, Col, Typography, Tabs } from 'antd'

const TabsComponent = ({ title, subtitle, tabs,bg }) => {
  const { TabPane } = Tabs;
    return (
        <>
         <Row style={{textAlign:'center', justifyContent:'center',background:bg ? bg : `url(/images/webdesign_bg.webp)`,}}>
            <Col xs={24} md={20}>
            <Row style={{ alignItems: "center", padding: "50px 0", justifyContent: "center" }} className="tabs-head" >
                <Col span={20} style={{ maxWidth: 810 }} >
                    <div style={{ textAlign: "center" }}>
                        {title && <Typography.Title level={3} style={{ color: "white", fontSize: 36, fontWeight: 600, marginBottom: 0 }}>
                            {title}
                        </Typography.Title>}
                    </div>
                </Col>
            </Row>


            <Row style={{ alignItems: "center", padding: "0",  border:'none' }} justify="space-evenly" className="tabs-content">
                <Tabs  className="scrollbarHidden" defaultActiveKey="1" tabPosition="top" >
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