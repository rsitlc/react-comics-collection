import React from "react";
import { Row, Col, Card } from "antd";
import "./bonelli.css";
import TopHeader from "../header/TopHeader";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Bonelli() {
    return (
        <div>
            <TopHeader />
            <Row>
                <Col
                    span={24}
                    style={{
                        position: "absolute",
                        top: "60vh",
                        right: 0,
                        zIndex: 9999,
                    }}
                >
                    <Card
                        bordered={false}
                        style={{
                            width: "25vw",
                            background:
                                "linear-gradient(to right, #fe8c00, #f83600)",
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            textAlign: "center",
                            opacity: "0.9",
                        }}
                    >
                        <h1 className='bonelli-title'>Bonelli</h1>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false}
                        interval={2000}
                        className='bonelli-slider'
                    >
                        <div data-src='https://i.imgur.com/BO65bWT.jpg' />
                        <div data-src='https://i.imgur.com/JMRoFZ5.jpg' />
                        <div data-src='https://i.imgur.com/ro43cp8.jpg' />
                        <div data-src='https://i.imgur.com/pDmos8S.jpg' />
                        <div data-src='https://i.imgur.com/DPyO7eN.jpg' />
                    </AutoplaySlider>
                </Col>
            </Row>
        </div>
    );
}

export default Bonelli;
