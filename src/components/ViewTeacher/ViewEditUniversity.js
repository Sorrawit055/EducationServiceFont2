import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , Jumbotron ,Table } from 'reactstrap';

const ViewEditUniversity = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (

        <div class="container">
        <Form>
<center><h2>เเก้ไขมหาวิทยาลัย</h2></center>
      <Jumbotron>
      <h1 className="display-3"><Input type="text" name="id_university" id="id_university" placeholder="ยังไม่ได้เชิ่อมครับ"/></h1>

      <Label for="examplePassword">ชื่อมหาลัย</Label>
        <h1 className="display-3"><Input type="text" name="name_uni" id="name_uni" placeholder="ยังไม่ได้เชิ่อมครับ" /></h1>
      <Label for="examplePassword">คำเเเนะนำ</Label>
        <p className="lead"><Input type="textarea" name="detail_uni" id="detail_uni" placeholder="ยังไม่ได้เชิ่อมครับ" /></p>
        <Label for="examplePassword">Link</Label>
        <h1 className="display-3"><Input type="text" name="url_uni" id="url_uni" placeholder="ยังไม่ได้เชิ่อมครับ" /></h1>
        <Label for="examplePassword">โลโก้มหาลัย</Label>
          <Input type="file" name="logo_uni" id="logo_uni" />
</Jumbotron>
<div>
    <Button>Submit</Button>

</div>        </Form>

</div>      

  );
};

  
  export default ViewEditUniversity;