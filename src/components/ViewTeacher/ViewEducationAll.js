import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink ,Table} from 'reactstrap';

const ViewEducationAll = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
     <div class="container">
<br />
        <Row>
<Col xs="6"> 
  <FormGroup>
        <Label for="exampleSelect">ชื่อกลุ่มสาขา</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      
</Col>
<Col xs="6"> 
  <FormGroup>
        <Label for="exampleSelect">ชื่อกลุ่มสาขา</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <Row>
        <Col></Col>
        <Col><NavLink href="./inserteducation">เพิ่มการรับสมัครการเข้าศึกษาต่อ</NavLink>
</Col>

      </Row>
      
</Col>
        </Row>
</div>    
<br />
<div class="container">
<Table>
      <thead>
        <tr>
          <th>รหัส</th>
          <th>ปี</th>
          <th>รอบ</th>
          <th>ชื่อมหาลัย</th>
          <th>วันที่</th>
          <th>เเก้ไข</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>2021</td>
          <td>1</td>
          <td>มหาวิทยาลัยราชภัฏนครปฐม</td>
          <td>20 มกราคม 2562</td>

          <td><Button href="./editeducation">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>2021</td>
          <td>2</td>
          <td>มหาวิทยาลัยราชภัฏนครปฐม</td>
          <td>ยังไม่ได้เชื่อม</td>
          <td><Button href="./editeducation">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>2021</td>
          <td>3</td>
          <td>มหาวิทยาลัยราชภัฏนครปฐม</td>
          <td>ยังไม่ได้เชื่อม</td>
          <td><Button href="./editeducation">เเก้ไข</Button></td>
        </tr>
        
      </tbody>
    </Table>
    <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="./editeducation">พิมพ์</NavLink>
</Col>

      </Row>
</div>    




</div>
);
  }
  
  export default ViewEducationAll;