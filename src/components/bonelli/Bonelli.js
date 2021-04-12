import React from "react";
import { Row, Col, Card } from "antd";
import "./bonelli.css";
import TopHeader from "../header/TopHeader";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const { Meta } = Card;

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
                        zIndex: 99,
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
            <Row style={{ margin: "50px 0" }}>
                <Col xs={{ span: 20, offset: 2 }} md={{ span: 6, offset: 1 }}>
                    <Card
                        hoverable
                        style={{ width: "100%", marginBottom: 20 }}
                        cover={
                            <img
                                alt='example'
                                src='https://i.imgur.com/Ld2OLhU.jpg'
                                style={{
                                    width: "100%",
                                    height: "800px",
                                    objectFit: "cover",
                                }}
                            />
                        }
                    >
                        <Meta
                            description='Tex'
                            style={{
                                textTransform: "uppercase",
                                fontSize: "2em",
                                fontWeight: "bold",
                            }}
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} md={{ span: 6, offset: 2 }}>
                    <Card
                        hoverable
                        style={{ width: "100%", marginBottom: 20 }}
                        cover={
                            <img
                                alt='example'
                                src='https://i.imgur.com/ruYhtgm.jpg'
                                style={{
                                    width: "100%",
                                    height: "800px",
                                    objectFit: "cover",
                                }}
                            />
                        }
                    >
                        <Meta
                            description='Zagor'
                            style={{
                                textTransform: "uppercase",
                                fontSize: "2em",
                                fontWeight: "bold",
                            }}
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} md={{ span: 6, offset: 2 }}>
                    {" "}
                    <Card
                        hoverable
                        style={{ width: "100%", marginBottom: 20 }}
                        cover={
                            <img
                                alt='example'
                                src='https://i.imgur.com/zdjjqyF.jpg'
                                style={{
                                    width: "100%",
                                    height: "800px",
                                    objectFit: "cover",
                                }}
                            />
                        }
                    >
                        <Meta
                            description='Dylan Dog'
                            style={{
                                textTransform: "uppercase",
                                fontSize: "2em",
                                fontWeight: "bold",
                            }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Bonelli;
