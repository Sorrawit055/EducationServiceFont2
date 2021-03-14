import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink ,Table,Badge,Jumbotron} from 'reactstrap';

const ViewEditEducationCondition = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
<div class="container">
<center><h2>เงื่อนไข</h2></center>
            <Form>
        <Jumbotron>
        <h1 className="display-3"><Input type="text" name="id_condition " id="id_condition " placeholder="ยังไม่ได้เชื่อม" /></h1>
      <Label for="examplePassword">เงื่อนไข GPA</Label>
        <p className="lead"><Input type="text" name="GPA" id="GPA" placeholder="กรุราใส่ช้อมูลGPA" /></p>
        <FormGroup>
        <Label for="curriculum_edu">กรุณาใส่ข้อมูลสายการเรียน</Label>
        <Input type="select" name="curriculum_edu" id="curriculum_edu">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
        <Label for="note_condi">เงื่อนไขอื่นๆ</Label>
        <Input type="textarea" name="note_condi" id="note_condi" />
</Jumbotron>
<div>
    <Button>Submit</Button> &nbsp;&nbsp;&nbsp;&nbsp;
    <Button href="./educationconditionall">กลับ</Button>

</div>        </Form>

      
</div>    


</div>
);
  }
  
  export default ViewEditEducationCondition;