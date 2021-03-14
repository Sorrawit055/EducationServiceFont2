import axios from "axios";
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink ,Alert } from 'reactstrap';

    const ViewInsertdetailEducationStudent = ({id}) => {
        const initStudent = {
          id_edu_stu: "",
          id_stu: "",
          id_university: "",
          id_faculty: "",
          id_course: "",
          id_major: "",
      };
      const [student, setStudent] = useState([initStudent]);
      const [submited, setSumited] = useState(false)
      const handleInputChange = (event) => {
        let { name, value } = event.target;
       // if (name === "tags") {
         //   value = value.split(",");
        //}
        setStudent({ ...student, [name]: value });
    };

      useEffect(() => {
          axios.get("http://localhost:8080/students/"+id)
          .then((response)=>{
            setStudent(response.data);
          });
      }, [id]);//เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน

      const saveStudent = () => {
        var data = {
          id_edu_stu: student.id_edu_stu,
          id_stu: student.id_stu,
          id_university: student.id_university,
          id_faculty: student.id_faculty,
          id_course: student.id_course,
          id_major: student.id_major,

        }
        axios.post("http://localhost:8080/EducationStudent/", data)
            .then((response) => {
                console.log(response.data);
                setSumited(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const newStudent = () => {
      setStudent(initStudent);
        setSumited(false);
    };
    return (
<div class="container">
<Form>

{submited ? (<Alert color="success"><br /><br /><br /><br />
                   <center>อัพเดตเสร็จสิ้น กรุณากลับไปเพื่อเช็คข้อมูล<br /><br /><br /><br /><br />
                    <Button color="btn btn-success" onClick={newStudent}>OK</Button></center>
              </Alert>
                ) : (
<Form>

    <center><h3> เเก้ไขข้อมูลส่วนตัว </h3></center>
      <Row>
        <Col>
          <FormGroup>
            <Label for="id_stu">รหัส</Label>
            <Input type="text"
            name="id_stu"
            id="productName"
            value={student.id_stu || ""}
            onChange={handleInputChange}
            placeholder="" disabled/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col >
          <FormGroup>
            <Label for="id_university  ">มหาวิทยาลัย</Label>
            <Input type="select" name="id_university" id="id_university" onChange={handleInputChange} placeholder="ระบุชื่อ" >
            <option value="" selected>{student.name_uni} </option>
            <option value="1">มหาวิทยาลัยราชภัฏนครปฐม</option>
            <option value="2">มหาวิทยาลัยศิลปากร</option>
            <option value="3">มหาวิทยาลัยเกษตรศาสตร์กำเเพงเเสน</option>
          </Input></FormGroup>
        </Col>
        <Col >
        <FormGroup>
            <Label for="id_faculty">คณะ</Label>
            <Input type="select" name="id_faculty" id="id_faculty" onChange={handleInputChange} placeholder="ระบุชื่อ" >
            <option value="" selected>{student.name_faculty} </option>
            <option value="1">วิทยาศาสตร์และเทคโนโลยี</option>
            <option value="2">ครุศาสตร์</option>
            <option value="3">วืทยาการจัดการ</option>
          </Input></FormGroup>
        </Col>
     
      </Row>
      <Row form>
        <Col >
        <FormGroup>
            <Label for="id_course">สาขา</Label>
            <Input type="select" name="id_course" id="id_course" onChange={handleInputChange} placeholder="ระบุชื่อ" >
            <option value="" selected>{student.name_course} </option>
            <option value="1">วิศวกรรมซอฟต์แวร์</option>
            <option value="2">การศึกษาปฐมวัย</option>
          </Input></FormGroup>
        </Col>
        <Col >
        <FormGroup>
            <Label for="id_major">กลุ่มสาขา</Label>
            <Input type="select" name="id_major" id="id_major" onChange={handleInputChange} placeholder="ระบุชื่อ" >
            <option value="" selected>{student.name_major} </option>
            <option value="1">คอมพิวเตอร์</option>
            <option value="2">ครู</option>
          </Input></FormGroup>
        </Col>
      </Row>
     
      <Button className="btn btn-success" onClick={saveStudent}>ตกลง</Button>

      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="/home">กลับหน้าหลัก</NavLink></Col>
        <Col><NavLink href={"/detaileducationstudent/" + student.id_stu}>กลับไปข้อมูลส่วนตัว</NavLink>
</Col>

      </Row>
    


</Form>
)}

    </Form>

</div>    
    );
};
  
  export default ViewInsertdetailEducationStudent;