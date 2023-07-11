import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FiPackage } from "react-icons/fi"
const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children, pageTitle, path }) => {
    const router = useRouter()
    const menus = [
        {
            key: 'plans',
            icon: <FiPackage />,
            label: 'Plans',
            onClick: () => router.push("/admin/plans")
        },
        {
            key: 'posts',
            icon: <FiPackage />,
            label: 'Posts',
            onClick: () => router.push("/admin/posts")
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
        },
    ]
    const [collapsed, setCollapsed] = useState(false);
    path = router.pathname?.split("/") || ["Dashboard"]
    console.log(path,"path")
    const selected = menus.find(menu => menu.key === path[2]).key
    pageTitle = pageTitle ? pageTitle + " - Web Design Company" : "Admin - Web Design Company"

    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href={path} />
            </Head>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo-name">
                    Admin Panel
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[selected]}
                    items={menus}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: "0 20px",
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Breadcrumb style={{
                    padding: "20px 20px 0px",
                }}>
                    {path.map((item, index) =>
                        <Breadcrumb.Item key={index} style={{ textTransform: "capitalize" }}>{item}</Breadcrumb.Item>
                    )}
                </Breadcrumb>
                <Content
                    className="site-layout-background content"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflowY: "scroll"
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
