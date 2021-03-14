import axios from "axios";
import React, { useState, useEffect } from "react"
import {  Row, Col, Form, FormGroup, Label,  NavLink  } from 'reactstrap';

const ViewProfile = ({id}) => {

  const [student, setStudent] = useState([]);
 
  useEffect(() => {
      axios.get("http://localhost:8080/students/"+id)
      .then((response)=>{
       setStudent(response.data);
      });
  }, [id]);//เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน


    return (
        <div>
          <br />
<div class="container">
<Form>
    <center><h3> ข้อมูลการส่วนตัว </h3></center>
      <Row>
      <Col>
            <Label for="examplePassword">รหัสนักศึกษา</Label> : {student.id_stu}
        </Col>
      
      </Row>
      <Row>
      <Col>
        <Label for="exampleEmail">ชื่อ</Label> : {student.name_title} {student.fname_stu} {student.lname_stu}
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">สายการเรียน</Label> : {student.name_curriculum } 
        </Col>  
        </Row>

        <Row>
      <Col>
        <Label for="exampleEmail">เกรดเฉลี่ยรวม</Label> : {student.GPA_stu} 
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">มัธยมปีที่</Label> : {student.year_class}  <Label for="exampleEmail">ห้อง</Label> {student.class} 
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">ปีการศึกษา</Label> : {student.year_stu} 
        </Col>  
        </Row>
    </Form>
 
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="/home">กลับหน้าหลัก</NavLink></Col>
        <Col><NavLink href={"/editprofile/" + student.id_stu}>เเก้ไขข้อมูลส่วนตัว</NavLink>
</Col>

      </Row>
 
</div>    




</div>
);
  }
  
  export default ViewProfile;