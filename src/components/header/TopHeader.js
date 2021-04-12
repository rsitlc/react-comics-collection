import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./topHeader.css";

const { Header } = Layout;

function TopHeader() {
    return (
        <div>
            <Layout>
                <Header
                    style={{
                        position: "fixed",
                        zIndex: 999,
                        width: "100%",
                        backgroundColor: "#cc5333",
                    }}
                >
                    <div className='logo' />
                    <Menu
                        mode='horizontal'
                        style={{ backgroundColor: "#cc5333" }}
                    >
                        <Menu.Item key='1'>
                            <Link to='/' style={{ color: "#fff" }}>
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Link to='/bonelli' style={{ color: "#fff" }}>
                                Bonelli
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Link to='/marvel' style={{ color: "#fff" }}>
                                Marvel
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='4'>
                            <Link to='/dc' style={{ color: "#fff" }}>
                                DC Comics
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </div>
    );
}

export default TopHeader;
