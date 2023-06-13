import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./startpagecontent.module.css";
import { Row, Col,Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function StartPageContent() {
    const navigate = useNavigate();
    return (
            <div >
                <Row  >
                    <Col>
                        <div>
                            <img src="/img/Arrow - Left.png" className={`${styles.arrow} ${styles.img}`} alt="arrow" />
                        </div>


                        <p className={styles.text}>Let’s Get Started</p>
                        
                        <div className={styles.Column}>
                            <Button className={styles.btn} onClick={() => navigate("/StartPage")} type="primary"></Button>
                            <Button className={styles.btn2} onClick={() => navigate("/StartPage")} type="primary"></Button>
                            <Button className={styles.btn3} onClick={() => navigate("/StartPage")} type="primary"></Button>
                        </div>
                        <div className={styles.Row}>
                            <p className={styles.text2}>Already have an account?</p>
                            <Link className={styles.btn4} to="/StartPage" type="text"> Signin</Link>
                        </div>
                                            
                    </Col>
                </Row>
            </div>
    );
}
