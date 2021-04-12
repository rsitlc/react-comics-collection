import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BrandContext } from "../../contexts/BrandContext";
import { Card, Col, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

/* Stylesheet */
import "./sectionsCards.css";

const { Meta } = Card;

function SectionsCards() {
    const brands = useContext(BrandContext);

    const history = useHistory();

    return (
        <div className='section-cards'>
            <Col span={24} style={{ textAlign: "center", marginBottom: 30 }}>
                <h1>All Editors</h1>
            </Col>
            {brands.map((brand) => {
                return (
                    <Col
                        key={brand.id}
                        xs={{ span: 20, offset: 6 }}
                        md={{ span: 6, offset: 2 }}
                    >
                        <Card
                            hoverable
                            size='small'
                            style={{ width: 240, marginBottom: 20 }}
                            cover={<img alt='example' src={brand.img} />}
                            actions={[
                                <Button
                                    size='large'
                                    type='primary'
                                    shape='round'
                                    icon={<SearchOutlined />}
                                    onClick={() => history.push(brand.path)}
                                >
                                    Select
                                </Button>,
                            ]}
                        >
                            <Meta
                                title={brand.name}
                                description={brand.description}
                            />
                        </Card>
                    </Col>
                );
            })}
        </div>
    );
}

export default SectionsCards;
