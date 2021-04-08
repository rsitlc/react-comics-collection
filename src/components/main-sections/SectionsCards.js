import React, { useContext } from "react";
import { BrandContext } from "../../contexts/BrandContext";
import { Card, Col } from "antd";
import "./sectionsCards.css";

const { Meta } = Card;

function SectionsCards() {
    const brands = useContext(BrandContext);
    return (
        <div className="section-cards">
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
                            size="small"
                            style={{ width: 240, marginBottom: 20 }}
                            cover={<img alt="example" src={brand.img} />}
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
