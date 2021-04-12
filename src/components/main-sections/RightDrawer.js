import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";
import { AppstoreTwoTone, CloseCircleFilled } from "@ant-design/icons";

/* Stylesheet */
import "./rightDrawer.css";

function RightDrawer() {
    const [visible, setVisible] = useState(false);

    function showDrawer() {
        setVisible(!visible);
    }

    return (
        <div>
            <Button
                type='link'
                size='large'
                icon={
                    <AppstoreTwoTone
                        twoToneColor='#cc5333'
                        style={{
                            fontSize: "40px",
                        }}
                    />
                }
                onClick={showDrawer}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: "#fff",
                }}
            />
            <Drawer
                placement='right'
                closeIcon={
                    <CloseCircleFilled
                        style={{ color: "#fff", fontSize: "2em" }}
                    />
                }
                onClose={showDrawer}
                visible={visible}
                mask={false}
                bodyStyle={{
                    background: "#cc5333",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <div className='drawer-links'>
                    <NavLink to='/' className='nav_link'>
                        Home
                    </NavLink>
                    <NavLink to='/bonelli' className='nav_link'>
                        Bonelli
                    </NavLink>
                    <NavLink to='/marvel' className='nav_link'>
                        Marvel
                    </NavLink>
                    <NavLink to='/dc' className='nav_link'>
                        DC Comics
                    </NavLink>
                </div>
            </Drawer>
        </div>
    );
}

export default RightDrawer;
