import axios from "axios";
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,Badge  } from 'reactstrap';

const ViewEducationStudentDetail = ({id}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [educationdataia, setEducationdataia] = useState([]);
 
  useEffect(() => {
      axios.get("http://localhost:8080/EducationData/getEducationdataid/"+id)
      .then((response)=>{
        setEducationdataia(response.data);
      });
  }, [id]);//เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน
    return (
        <div>
     <div class="container">
     <Row>
      <Col>
            <Label for="examplePassword">มหาวิทยาลัย</Label> : {educationdataia.name_uni}
        </Col>
      
      </Row>
      <Row>
      <Col>
        <Label for="exampleEmail">คณะ</Label> : {educationdataia.name_faculty}
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">สาขา</Label> : {educationdataia.name_course}
        </Col>  
        </Row>

        <Row>
      <Col>
        <Label for="exampleEmail">กลุ่มสาขา</Label> : {educationdataia.name_major}
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">รอบ</Label> : {educationdataia.name_round}
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">จำนวนรับสมัคร</Label> : {educationdataia.number_of_edu}
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">เปิดรับสมัคร</Label> : {educationdataia.open_date}
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">ปิดรับสมัคร</Label> : {educationdataia.close_date}
        </Col>  
        </Row>
        <Row>
      <Col>
        <Label for="exampleEmail">วันรายงานตัว</Label> : {educationdataia.list_day}
        </Col>  
        </Row>
</div>    
<br />
<div class="container">
<p> </p>
<FormGroup>
<h4> <Label for="exampleText">เงื่อนไข</Label></h4>
        <Input type="textarea" name="text" id="exampleText" value={educationdataia.general}/> 
      </FormGroup>
      <FormGroup>
<h4> <Label for="exampleText">เอกสาร</Label></h4>
        <Input type="textarea" name="text" id="exampleText"  value={educationdataia.doculment_edu} />
      </FormGroup>
</div>    
<br />
<div class="container">
<p> </p>
<h4><b>โหลดเอกสารเพิ่มเติม</b></h4><br />
<a href={educationdataia.url_doculment}>{educationdataia.url_doculment}</a>
</div>    

<br />


</div>
);
  }
  
  export default ViewEducationStudentDetail;