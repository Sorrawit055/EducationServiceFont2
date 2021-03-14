import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink  } from 'reactstrap';

const ViewEditEducation = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
<div class="container">
<Form>
<center><h3>เเก้ไขการรับสมัครการเข้าศึกษาต่อ </h3></center>
<Row>
<FormGroup>
        <Input type="text" name="id_education " id="id_education " placeholder="ยังไม่เชื่อม" />
      </FormGroup></Row>
      <Row>
        <Col xs="6">       <FormGroup>
        <Label for="year_edu">ปีที่รับ</Label>
        <Input type="select" name="year_edu" id="year_edu">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup></Col>
        <Col xs="6">       <FormGroup>
        <Label for="id_round">รอบ</Label>
        <Input type="select" name="id_round" id="id_round">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup></Col>
      </Row>
      <Row>
        <Col xs="6">       <FormGroup>
        <Label for="id_university">มหาลัย</Label>
        <Input type="select" name="id_university" id="id_university">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup></Col>
        <Col xs="6">       <FormGroup>
        <Label for="tcas">Tcas</Label>
        <Input type="select" name="tcas" id="tcas">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup></Col>
      </Row>
      <Row>
        <Col xs="6">       <FormGroup>
        <Label for="open_ date">วันเปิดรับ</Label>
        <Input type="date" name="open_ date" id="open_ date">

        </Input>
      </FormGroup></Col>
        <Col xs="6">       <FormGroup>
        <Label for="close_ date">วันปิดรับ</Label>
        <Input type="date" name="close_ date" id="close_ date">
        </Input>
      </FormGroup></Col>
      </Row>
      <Row>
        <Col xs="6">       <FormGroup>
        <Label for="list_day">วันรายงานตัว</Label>
        <Input type="date" name="list_day" id="list_day">
        </Input>
      </FormGroup></Col>
        <Col xs="6"></Col>
      </Row>
      <FormGroup>
        <Label for="general">เงื่อนไขคุณสมบัติ</Label>
        <Input type="textarea" name="general" id="general" />
      </FormGroup>
      <FormGroup>
        <Label for="doculment_edu">เงื่อนไขเอกสาร</Label>
        <Input type="textarea" name="doculment_edu" id="doculment_edu" />
      </FormGroup>
      <FormGroup>
        <Label for="note_edu">เงื่อนไขอื่นๆ</Label>
        <Input type="textarea" name="note_edu" id="note_edu" />
      </FormGroup>
      <FormGroup>
        <Label for="file_doculment">ไฟล์</Label>
        <Input type="file" name="file_doculment" id="file_doculment" />
        <FormText color="muted">
         กดเเละเลือกไฟล์ที่ต้องการ
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="url_doculment">URL</Label>
        <Input type="text" name="url_doculment" id="url_doculment" placeholder="กรุณาใส่ URL" />
      </FormGroup>
      <Row>
      <Col xs="6">       <FormGroup>
        <Label for="id_schedule">กำหนดการ</Label>
        <Input type="select" name="id_schedule" id="id_schedule">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup></Col> </Row>

      <Button>Submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button href="./educationall">กลับ</Button>

    </Form>
</div>    




</div>
);
  }
  
  export default ViewEditEducation;