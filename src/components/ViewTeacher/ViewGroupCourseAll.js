import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink ,Table} from 'reactstrap';

const ViewGroupCourseAll = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
     <div class="container">
<br />
        <Row>
<Col xs="6"> 
  <FormGroup>
        <Label for="id_major">ชื่อกลุ่มสาขา</Label>
        <Input type="select" name="id_major" id="id_major">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
</Col>
        </Row>
        <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="./insertgroupcourse">เพิ่มกลุ่มสาขา</NavLink>
</Col>

      </Row>
</div>    
<br />
<div class="container">
<Table>
      <thead>
        <tr>
          <th>รหัสกลุ่มสาขา</th>
          <th>ชื่อกลุ่มสาขา</th>
          <th>เเก้ไข</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>คอมพิวเตอร์</td>
          <td><Button href="./editgroupcourse">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>ยังไม่ได้เชิ่อมครับ</td>
          <td><Button href="./editgroupcourse">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>ยังไม่ได้เชิ่อมครับ</td>
          <td><Button href="./editgroupcourse">เเก้ไข</Button></td>
        </tr>
      </tbody>
    </Table>
</div>    




</div>
);
  }
  
  export default ViewGroupCourseAll;