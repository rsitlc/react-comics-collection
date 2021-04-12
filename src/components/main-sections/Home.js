import React from "react";
import SectionsCards from "./SectionsCards";
import RightDrawer from "./RightDrawer";
import { BrandProvider } from "../../contexts/BrandContext";
import { Row, Col, Card } from "antd";

/* Stylesheet */
import "./home.css";

function Home() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <header className='header'>
                        <Card
                            bordered={false}
                            style={{
                                width: "35vw",
                                position: "absolute",
                                top: "50%",
                                background: "#cc5333",
                            }}
                        >
                            <h1>My Comics Collection</h1>
                            <p>Welcome! Explore my entire catalogue </p>
                        </Card>
                    </header>
                </Col>
            </Row>
            {/* Drawer & Sections Cards */}
            <BrandProvider>
                <RightDrawer />
                <Row>
                    <SectionsCards />
                </Row>
            </BrandProvider>
        </div>
    );
}

export default Home;
