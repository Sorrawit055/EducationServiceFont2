import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

const ViewEducationStudent = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [university, setUniversity] = useState([]);
    //ไปดึง api ของอันเก่ามาใช้จาก url
        const updateUniversity = () =>{
            axios.get("http://localhost:8080/University/getUniversity").then((response) => {
                console.log(response);
                setUniversity(response.data.university);
            });
        };
    
        useEffect(() => {
          updateUniversity();
        }, []);
    return (
        <div>
     <div class="container">
       
         <center><h3>   ค้นหามหาวิทยาลัย  </h3></center>
<br />
        <Row>
<Col xs="6"> 
  <FormGroup>
        <Label for="id_university">ชื่อมหาวิทยาลัย</Label>
        <Input type="select" name="id_university" id="id_university">
        {university.map((university) => {
 return(
          <option value={university.id_university }>{university.name_uni}</option>
   
          
          );
        })}
        </Input>
        
      </FormGroup>
</Col>
        </Row>
       
</div>    
<br />
<div class="container">
  
{university.map((university) => {
 return(
        <Row>
        <Col>          
        <Card>
        <CardBody>
          <CardTitle tag="h5">{university.name_uni}</CardTitle>
        </CardBody>
        <CardBody>
        <img width="100%" src="" alt="ไว้ใส่ โลโก้มหาลัย" />
        </CardBody>
        <CardBody>
          <CardTitle >{university.detail_uni}</CardTitle>
        </CardBody>
          <Button href={university.url_uni}>ดูรายละเอียด</Button>
      </Card>
</Col>
        </Row>
           );
          })}
</div>    




</div>
);
  }
  
  export default ViewEducationStudent;