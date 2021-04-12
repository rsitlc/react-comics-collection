import React from "react";
import { Row, Col, Card } from "antd";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import TopHeader from "../header/TopHeader";
import "./dcComics.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function DcComics() {
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
                        <h1 className='dc-title'>DC Comics</h1>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false}
                        interval={2000}
                        className='dc-slider'
                    >
                        <div data-src='https://i.imgur.com/cRcs4wD.png' />
                        <div data-src='https://i.imgur.com/lRj0H5r.jpg' />
                        <div data-src='https://i.imgur.com/uhbMKhE.jpg' />
                        <div data-src='https://i.imgur.com/PlZM7Bt.jpg' />
                        <div data-src='https://i.imgur.com/bNok7Vr.jpg' />
                    </AutoplaySlider>
                </Col>
            </Row>
        </div>
    );
}

export default DcComics;
