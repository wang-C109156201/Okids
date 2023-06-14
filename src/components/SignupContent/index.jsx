import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./signupcontent.module.css";
import { Row, Col,Switch  } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from '@mui/material'; 

export default function SignupContent() {
    const navigate = useNavigate();
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

    return (
            <div >
                <Row  >
                    <Col>
                    <div className={styles.Start}>
                        <div>
                            <img src="/img/Arrow - Left.png" className={`${styles.arrow} ${styles.img}`} onClick={() => navigate("/StartPage")} alt="arrow" />
                        </div>

                        <p className={styles.text}>Sign Up</p>
                        
                        <div className={styles.Column}>
                            <TextField id="standard-basic" label="Username" variant="standard"  className={styles.textinput} />                 
                            <TextField id="standard-basic" label="Password" variant="standard"  className={styles.textinput} />
                            <TextField id="standard-basic" label="Email Address" variant="standard"  className={styles.textinput} />
                            <div className={styles.Row}>
                                <p className={styles.text2}>Remember me</p>
                                <Switch defaultChecked onChange={onChange} className={styles.switch} />
                            </div>

                        </div>
                       
                    </div>
                       
                                            
                    </Col>
                </Row>
            </div>
    );
}
