import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , Jumbotron ,Table } from 'reactstrap';

const ViewEditFaculty = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (

        <div class="container">
        <Form>
        <center><h2>เเก้ไขคณะ</h2></center>

      <Jumbotron>
      <h1 className="display-3"><Input type="text" name="id_faculty" id="id_faculty" placeholder="ยังไม่ได้เชื่อม" /></h1>
      <Label for="examplePassword">ชื่อคณะ</Label>
        <h1 className="display-3"><Input type="text" name="name_faculty" id="name_faculty" placeholder="ยังไม่ได้เชื่อม" /></h1>
</Jumbotron>
<div>

    <Button>Submit</Button>&nbsp;&nbsp;&nbsp;
    <Button href="./fucultyall">กลับ</Button>

</div>        </Form>

</div>      

  );
};

  
  export default ViewEditFaculty;