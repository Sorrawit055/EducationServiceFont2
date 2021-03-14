import axios from "axios";
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink,Alert  } from 'reactstrap';

    const ViewDetailEducationStudent = ({id}) => {
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

      useEffect(() => {
          axios.get("http://localhost:8080/students/"+id)
          .then((response)=>{
            setStudent(response.data);
          });
      }, [id]);//เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน
    
      const [education, setEducation] = useState([]);
      useEffect(() => {
        axios.get("http://localhost:8080/EducationStudent/"+id)
        .then((response)=>{
          setEducation(response.data);
        });
    }, [id]);
    const [curriculum, setCurriculum] = useState([]);
    //ไปดึง api ของอันเก่ามาใช้จาก url
        const updateCurriculum = () =>{
            axios.get("http://localhost:8080/Curriculum/getCurriculum").then((response) => {
                console.log(response);
                setCurriculum(response.data.curriculum);
                console.log("Updating products.....");
            });
        };
        useEffect(() => {
          updateCurriculum();
        }, []);
    

        const [university, setUniversity] = useState([]);
        //ไปดึง api ของอันเก่ามาใช้จาก url
            const updateUniversity = () =>{
                axios.get("http://localhost:8080/University/getUniversity").then((response) => {
                    console.log(response);
                    setUniversity(response.data.university);
                    console.log("Updating products.....");
                });
            };
            useEffect(() => {
              updateUniversity();
            }, []);
    
            const [faculty, setFaculty] = useState([]);
            //ไปดึง api ของอันเก่ามาใช้จาก url
                const updateFaculty = () =>{
                    axios.get("http://localhost:8080/Faculty/getFaculty").then((response) => {
                        console.log(response);
                        setFaculty(response.data.faculty);
                        console.log("Updating products.....");
                    });
                };
                useEffect(() => {
                  updateFaculty();
                }, []);

                const [course, setCourse] = useState([]);
                //ไปดึง api ของอันเก่ามาใช้จาก url
                    const updateCourse = () =>{
                        axios.get("http://localhost:8080/Course/getCourse").then((response) => {
                            console.log(response);
                            setCourse(response.data.course);
                            console.log("Updating products.....");
                        });
                    };
                    useEffect(() => {
                      updateCourse();
                    }, []);
    
                    const [groupmajor, setGroupMajor] = useState([]);
                    //ไปดึง api ของอันเก่ามาใช้จาก url
                        const updateGroupMajor = () =>{
                            axios.get("http://localhost:8080/GroupMajor/getGroupMajor").then((response) => {
                                console.log(response);
                                setGroupMajor(response.data.groupmajor);
                                console.log("Updating products.....");
                            });
                        };
                        useEffect(() => {
                          updateGroupMajor();
                        }, []);

    //เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน

    // const [products, setProducts] = useState([]);
    // //ไปดึง api ของอันเก่ามาใช้จาก url
    //     const updateProducts = () =>{
    //         axios.get("http://localhost:8080/product").then((response) => {
    //             console.log(response);
    //             setProducts(response.data);
    //             console.log("Updating products.....");
    //         });
    //     };
    
    //     useEffect(() => {
    //         updateProducts();
    //     }, []);


    const handleInputChange = (event) => {
      let { name, value } = event.target;
      //if (name === "tags") {
        //  value = value.split(",");
     // }
     setEducation({ ...education, [name]: value });
  };


  const saveStudent = () => {
      var data = {
        id_edu_stu: education.id_edu_stu,
        id_stu: education.id_stu,
        id_university: education.id_university,
        id_faculty: education.id_faculty,
        id_course: education.id_course,
        id_major: education.id_major,


      }
      axios.put("http://localhost:8080/EducationStudent/"+education.id_edu_stu, data)
          .then((response) => {
              console.log(response.data);
              setStudent({...student,data});//ก็อป เเละ เขียน ทับ ตัวใหม่สุด
              setSumited(true);
          })
          .catch((error) => {
              console.log(error);
          });
  };
  const newStudent = () => {
      setSumited(false);
  };

    
    return (
        <div>
<div class="container">
<Form>
    <center><h3> ข้อมูลการศึกษาต่อ </h3></center>
      <Row>
      <Col>
            <Label for="examplePassword">รหัสนักศึกษา</Label> : {student.id_stu}
        </Col>
      
      </Row>
      <Row>
      <Col>
        <Label for="exampleEmail">ชื่อ</Label> : {student.name_title} {student.fname_stu} {student.lname_stu}
        </Col>  
        </Row>
        <Row>
      <Col>
            <Label for="examplePassword">ระดับชั้น</Label> : {student.year_class}   <Label for="exampleEmail">ห้อง</Label> : {student.class}
        </Col>
     
        </Row>

        <Label for="id_curriculum">สายการเรียน</Label>     {student.name_curriculum }

      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href={"/insertdetaileducationstudent/" + student.id_stu}>เพิ่มข้อมูลการศึกษาต่อ</NavLink>
</Col>

      </Row>
    </Form>
    
</div>    
<br />
<div>
          <br />
<div class="container">
<Form>

{submited ? (<Alert color="success"><br /><br /><br /><br />
                   <center>อัพเดตเสร็จสิ้น!!<br /><br /><br /><br /><br />
                    <Button color="btn btn-success" onClick={newStudent}>OK</Button></center>
              </Alert>
                ) : (
<Form>

    <center><h3> เเก้ไขข้อมูลการศึกษาต่อ </h3></center>
      <Row form>
        <Col >
          <FormGroup>
            <Label for="id_university  ">มหาวิทยาลัย</Label>
            <Input type="select" name="id_university" id="id_university" onChange={handleInputChange} placeholder="ระบุชื่อ" >
            <option value="" selected>{education.name_uni} </option>
            <option value="1">มหาวิทยาลัยราชภัฏนครปฐม</option>
            <option value="2">มหาวิทยาลัยศิลปากร(นครปฐม)</option>
            <option value="3">มหาวิทยาลัยเกษตรศาสตร์กำเเพงเเสน</option>
          </Input></FormGroup>
        </Col>
        <Col >
        <FormGroup>
            <Label for="id_faculty">คณะ</Label>
            <Input type="select" name="id_faculty" id="id_faculty" onChange={handleInputChange} placeholder="ระบุชื่อ" >
            <option value="" selected>{education.name_faculty} </option>
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
            <option value="" selected>{education.name_course} </option>
            <option value="1">วิศวกรรมซอฟต์แวร์</option>
            <option value="2">การศึกษาปฐมวัย</option>
          </Input></FormGroup>
        </Col>
        <Col >
        <FormGroup>
            <Label for="id_major">กลุ่มสาขา</Label>
            <Input type="select" name="id_major" id="id_major" onChange={handleInputChange} placeholder="ระบุชื่อ" >
            <option value="" selected>{education.name_major} </option>
            <option value="1">คอมพิวเตอร์</option>
            <option value="2">ครู</option>
          </Input></FormGroup>
        </Col>
      </Row>
     
      <Button className="btn btn-success" onClick={saveStudent}>Update</Button>

    


</Form>
)}

    </Form>

</div>    

</div></div>

);
  }
  
  export default ViewDetailEducationStudent;