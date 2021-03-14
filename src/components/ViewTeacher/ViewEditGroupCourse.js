import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , Jumbotron ,Table } from 'reactstrap';

const ViewEditGroupCourse = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (

        <div class="container">
        <Form>
        <center><h2>เเก้ไขกลุ่มสาขา</h2></center>

      <Jumbotron>
      <h1 className="display-3"><Input type="text" name="id_major" id="id_major" placeholder="ยังไม่ได้เชื่อม" /></h1>
      <Label for="examplePassword">ชื่อกลุ่มสาขา</Label>
        <h1 className="display-3"><Input type="text" name="name_major" id="name_major" placeholder="ยังไม่ได้เชื่อม" /></h1>
</Jumbotron>
<div>

    <Button>Submit</Button>&nbsp;&nbsp;&nbsp;
    <Button href="./groupcourseall">กลับ</Button>

</div>        </Form>

</div>      

  );
};

  
  export default ViewEditGroupCourse;