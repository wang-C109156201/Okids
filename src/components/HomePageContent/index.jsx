import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./homepagecontent.module.css";
import { Row, Col,Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
const carouselEL = React.createRef()

export default function HomePageContent() {
      
    return (
            <div >
                <Row  >
                    <Col>
                        <img className={styles.Homeimg} src="/img/Frame 1.png" alt="Homeimg" />
                        <div className={styles.Hellobox}>
                           <p className={styles.text}>Look Good, Feel Good</p>
                           <p className={styles.text2}>Create your individual & unique style and look amazing everyday.</p>
                           <div className={styles.Row}>
                                <Button className={styles.btn} type="primary">Men</Button>
                                <Button className={styles.btn2} type="primary">Women</Button>
                                <Link className={styles.btn3}  type="text">Skip</Link>
                           </div>
                        </div>
                    </Col>
                </Row>
            </div>
    );
}
