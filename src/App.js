import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { BrandProvider } from "./contexts/BrandContext";
import { Row, Col, Card } from "antd";

import "./App.css";
import "antd/dist/antd.css";
import Footer from "./components/footer/Footer";
import SectionsCards from "./components/main-sections/SectionsCards";
import RightDrawer from "./components/main-sections/RightDrawer";

function App() {
    return (
        <Router>
            <Redirect to="/" />
            <div className="app">
                {/* Header */}
                <Row>
                    <Col span={24}>
                        <header className="header">
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

                {/* Footer */}
                <Row>
                    <Col span={24}>
                        <Footer />
                    </Col>
                </Row>
            </div>
        </Router>
    );
}

export default App;
