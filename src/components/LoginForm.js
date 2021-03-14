import React, { useState } from 'react';
import { Card, CardBody, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';


const LoginForm = () => {
    const log = {
        id_stu: "",
        password_stu: "",
    };
    const [User, setUser] = useState(log);
    const session = {
        id_stu: localStorage.getItem('id_stu'),
        fname_stu: localStorage.getItem('fname_stu'),
        lname_stu: localStorage.getItem('lname_stu'),
    }

    const [ses, setSes] = useState(session);
    
    const inputdata = (event) => {
        let { name, value } = event.target;
        setUser({ ...User, [name]: value });
    }

    const saveStudent = () => {
        var data = {
            id_stu: User.id_stu,
            password_stu: User.password_stu,
        };

        axios.post("http://localhost:8080/Login", data)
            .then((res) => {
                console.log(res.data.message);
                if (res.data.message == "Student") {
                    localStorage.setItem('id_stu', res.data.id_stu);
                    localStorage.setItem('fname_stu', res.data.fname_stu);
                    localStorage.setItem('lname_stu', res.data.lname_stu);
                    Swal.fire(

                        'เข้าสู่ระบบเสร็จสิ้น',
                        ' ',
                        'success',
                    )
                    window.location.assign("/")
                    }
                else {
                    Swal.fire(
                        'เข้าสู่ระบบล้มเหลว',
                        'กรุณากรอกรหัสผ่านกับอีเมลใหม่ ',
                        'error'
                    )
                }

            })

            .catch((error) => {
                console.log("error");
            });

    }
  return (
                <div align="center" style={{ marginTop: '30px' }}>  <h2>
                เข้าสู่ระบบ
            </h2>
                    <Card className="CardBackground-1" style={{ maxWidth: '500px' }} align="left">
                        <CardBody className="">
                          
                            <div className="borderline" />
                            <form>
    
                                <FormGroup>
                                    <Label for="exampleEmail">รหัสนักเรียน</Label>
                                    <Input Type="id_stu" name="id_stu" placeholder="ใส่อีเมลที่นี่" onChange={inputdata} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">รหัสผ่าน</Label>
                                    <Input type="password" name="password_stu" placeholder="ใส่รหัสผ่านที่นี่" onChange={inputdata} required />
                                </FormGroup>
                               
                                    <Row>
                                  
                                        <Col md-6>
                                            <Button color="success" size="lg" className="Button-Style" onClick={saveStudent} block>เข้าสู่ระบบ</Button>
                                        </Col>
                                    </Row>
                                
                            </form>
                         
                        </CardBody>
                    </Card>
                </div>
       
    )
}

export default LoginForm;
