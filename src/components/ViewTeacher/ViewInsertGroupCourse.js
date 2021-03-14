import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , Jumbotron ,Table } from 'reactstrap';

const ViewInsertGroupCourse = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (

        <div class="container">
        <Form>
        <center><h2>เพิ่มกลุ่มสาขา</h2></center>

      <Jumbotron>
      <Label for="examplePassword">ชื่อกลุ่มสาขา</Label>
        <h1 className="display-3"><Input type="text" name="name_major" id="name_major" placeholder="กรุณาใส่ชื่อกลุ่มสาขา" /></h1>
</Jumbotron>
<div>

    <Button>Submit</Button>&nbsp;&nbsp;&nbsp;
    <Button href="./groupcourseall">กลับ</Button>

</div>        </Form>

</div>      

  );
};

  
  export default ViewInsertGroupCourse;