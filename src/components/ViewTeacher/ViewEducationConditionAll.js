import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink ,Table,Badge} from 'reactstrap';

const ViewEducationConditionAll = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
     <div class="container">
<br />
        <Row>
<Col xs="6"> 
  <FormGroup>
        <Label for="exampleSelect">ชื่อคณะ</Label>
        <Input type="select" name="select" id="exampleSelect">
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
        <Col><NavLink href="./inserteducationcondition">เพิ่มเงื่อนไข</NavLink>
</Col>

      </Row>
</div>    
<br />
<div class="container">
<Table>
      <thead>
        <tr>
          <th>รหัส</th>
          <th>ชื่อสาขา</th>
          <th>จำนวน</th>
          <th>เงื่อนไข</th>
          <th>เเก้ไข</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>วิศวกรรมซอฟต์เเวร์</td>
          <td>20</td>
          <td>ไม่ต้องทำไร</td>
          <td><Button href="./editeducationcondition">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>วิศวกรรมซอฟต์เเวร์</td>
          <td>20</td>
          <td>ไม่ต้องทำไร</td>
          <td><Button href="./editeducationcondition">เเก้ไข</Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>วิศวกรรมซอฟต์เเวร์</td>
          <td>20</td>
          <td>ไม่ต้องทำไร</td>
          <td><Button href="./editeducationcondition">เเก้ไข</Button></td>
        </tr>
      </tbody>
    </Table>
</div>    
<div class="container">
<Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="./inserteducation">เพิ่มการรับสมัครการเข้าศึกษาต่อ</NavLink>
</Col>

      </Row>
        <Row>

        <Col>  
        
        <Card>
      <CardBody>
          
      <Badge color="primary">คอมพิวเตอร์</Badge>
      
      <Row form>
        <Col md={6}>
            <Label for="exampleEmail">มหาวิทยาลัย</Label>
        </Col>
      </Row>
      <Row form>
      <Col md={6}>
           <Label for="examplePassword">คณะ  </Label>: วิศวกรรมซอฟต์เเวร์
        </Col>
        <Col md={6}>
            <Label for="exampleEmail">สาขา</Label>
        </Col>
      </Row>
    </CardBody>
        <CardBody>
          <Button href="./editeducation">เเก้ไข</Button>
        </CardBody>
      </Card>
</Col>
        </Row>
        <Row>
        <Col>          
        <Card>
        <CardBody>
          <CardTitle tag="h5">Test</CardTitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>คราวๆ</CardText>
          <Button href="./universitydetail">รายละเอียด</Button>
        </CardBody>
      </Card>
</Col>
        </Row>
</div>    



</div>
);
  }
  
  export default ViewEducationConditionAll;