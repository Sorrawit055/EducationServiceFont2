import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , Jumbotron ,Table } from 'reactstrap';

const ViewInsertUniversity = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (

        <div class="container">
        <Form>
<center><h2>เพิ่มมหาวิทยาลัย</h2></center>
      <Jumbotron>
      <Label for="examplePassword">ชื่อมหาลัย</Label>
        <h1 className="display-3"><Input type="text" name="name_uni" id="name_uni" placeholder="กรุณาใส่ชื่อมหาลัย" /></h1>
      <Label for="examplePassword">คำเเเนะนำ</Label>
        <p className="lead"><Input type="textarea" name="detail_uni" id="detail_uni" placeholder="กรุณาใส่คำเเนะนำ" /></p>
        <Label for="examplePassword">Link</Label>
        <h1 className="display-3"><Input type="text" name="url_uni" id="url_uni" placeholder="กรุณาใส่ลิ้งค์" /></h1>
        <Label for="examplePassword">โลโก้มหาลัย</Label>
          <Input type="file" name="logo_uni" id="logo_uni" />
</Jumbotron>
<div>
    <Button>Submit</Button>

</div>        </Form>

</div>      

  );
};

  
  export default ViewInsertUniversity;