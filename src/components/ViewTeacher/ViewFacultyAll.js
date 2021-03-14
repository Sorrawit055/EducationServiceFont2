import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink ,Table} from 'reactstrap';

const ViewFacultyAll = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
     <div class="container">
<br />
        <Row>
<Col xs="6"> 
  <FormGroup>
        <Label for="id_faculty">ชื่อคณะ</Label>
        <Input type="select" name="id_faculty" id="id_faculty">
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
        <Col><NavLink href="./insertfaculty">เพิ่มคณะ</NavLink>
</Col>

      </Row>
</div>    
<br />
<div class="container">
<Table>
      <thead>
        <tr>
          <th>รหัสคณะ</th>
          <th>ชื่อคณะ</th>
          <th>เเก้ไข</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>คณะวิทยาศาสตร์เเละเทคโนโลยี</td>
          <td><Button href="./editFaculty">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>คณะยังไม่ได้เชื่อม</td>
          <td><Button href="./editFaculty">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>คณะยังไม่ได้เชื่อม</td>
          <td><Button href="./editFaculty">เเก้ไข</Button></td>
        </tr>
      </tbody>
    </Table>
</div>    




</div>
);
  }
  
  export default ViewFacultyAll;