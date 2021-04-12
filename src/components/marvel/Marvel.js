import React from "react";
import { Row, Col, Card } from "antd";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import TopHeader from "../header/TopHeader";
import "./marvel.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Marvel() {
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
                        <h1 className='marvel-title'>Marvel</h1>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false}
                        interval={2000}
                        className='marvel-slider'
                    >
                        <div data-src='https://i.imgur.com/TUt9jlb.jpg' />
                        <div data-src='https://i.imgur.com/BQMQWjG.jpg' />
                        <div data-src='https://i.imgur.com/p3uv5Ac.jpg' />
                        <div data-src='https://i.imgur.com/bxBDoUm.jpg' />
                        <div data-src='https://i.imgur.com/gAQMLpq.jpg' />
                    </AutoplaySlider>
                </Col>
            </Row>
        </div>
    );
}

export default Marvel;
