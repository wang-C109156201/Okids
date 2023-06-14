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
                    <div className={styles.Start}>
                        <div>
                            <img src="/img/Arrow - Left.png" className={`${styles.arrow} ${styles.img}`} onClick={() => navigate("/")} alt="arrow" />
                        </div>

                        <p className={styles.text}>Let’s Get Started</p>
                        
                        <div className={styles.Column}>
                            <Button className={styles.btn} onClick={() => navigate("/Signin")} type="primary"></Button>
                            <Button className={styles.btn2} onClick={() => navigate("/Signin")} type="primary"></Button>
                            <Button className={styles.btn3} onClick={() => navigate("/Signin")} type="primary"></Button>
                        </div>
                        <div className={styles.Row}>
                            <p className={styles.text2}>Already have an account?</p>
                            <Link className={styles.btn4} to="/Signin" type="text"> Signin</Link>
                        </div>
                    </div>
                       
                                            
                    </Col>
                </Row>
            </div>
    );
}
