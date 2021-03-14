import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , Jumbotron ,Table } from 'reactstrap';

const ViewInsertFaculty = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (

        <div class="container">
        <Form>
        <center><h2>เพิ่มคณะ</h2></center>
      <Jumbotron>
      <Label for="name_faculty">ชื่อคณะ</Label>
        <h1 className="display-3"><Input type="text" name="name_faculty" id="name_faculty" placeholder="กรุณาใส่ชื่อคณะ" /></h1>
</Jumbotron>
<div>

    <Button>Submit</Button>&nbsp;&nbsp;&nbsp;
    <Button href="./fucultyall">กลับ</Button>

</div>        </Form>

</div>      

  );
};

  
  export default ViewInsertFaculty;