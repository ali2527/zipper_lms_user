import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout, Modal, message } from 'antd';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import { SITE_NAME } from '../../config/constants';

import { Get } from '../../config/api';
import { POPUP, UPLOADS_URL } from "../../config/constants/api"


const CustomLayout = ({children, head }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalClosed, setIsModalClosed] = useState(false);
    const [popupData, setPopupData] = useState({})

    let title = head?.title ? head?.title : ""
    if (title) {
        title += ` - ${SITE_NAME}`
    }
    else {
        title = SITE_NAME
    }


    return (
        <Layout style={{ backgroundColor: "#fff", scrollBehavior: "smooth", position:'relative' }}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={head?.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CustomHeader />
            {children}
            <CustomFooter />

            <div className='hide-on-phone' style={{width:'350px', height:'60px', borderRadius:'10px', backgroundColor:'#ad0103', position:'fixed', right:-145, display:'flex', justifyContent:'center', alignItems:'center', top:'50vh', transform:'rotate(-90deg)'}}>
                <p style={{color:'white', fontSize:'26px', fontWeight:600, margin:0}}>
                    Get Upto 70% Discount
                </p>
            </div>
            <Modal
                width={"750px"}
                style={{ height: "550px" }}
                bodyStyle={{
                    height: "445px",
                    background: `url(${UPLOADS_URL}/${popupData?.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                footer={null}
                visible={isModalVisible}
                onOk={() => true}
                onCancel={() => {
                    setIsModalVisible(false)
                    setIsModalClosed(true)
                }}
                okButtonProps={{ style: { display: "none" } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
            </Modal>
        </Layout>
    );
}

export default CustomLayout