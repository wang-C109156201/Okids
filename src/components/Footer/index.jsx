import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./footer.module.css";
import { Row, Col,Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
const carouselEL = React.createRef()

export default function Footer({title}) {
    const navigate = useNavigate();
    return (
            <div >
                <Row  >
                    <Col>
                        <div className={styles.Footer}>
                            {title}
                        </div>
                    </Col>
                </Row>
            </div>
    );
}
