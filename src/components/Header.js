import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import Swal from 'sweetalert2';



const Header = () => {
    const session = {
      id_stu: localStorage.getItem('id_stu'),
      fname_stu: localStorage.getItem('fname_stu'),
      lname_stu: localStorage.getItem('lname_stu'),
    }

    const [ses, setSes] = useState(session);
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        localStorage.removeItem('id_stu');
        localStorage.removeItem('fname_stu');
        localStorage.removeItem('lname_stu');
        Swal.fire(

          'ออกจากระบบเสร็จสิ้น',
          ' ',
          'success',
          window.location.assign("/")
      )
      window.location.assign("/")

    }
    const toggle = () => setIsOpen(!isOpen);
    if (session.id_stu === null) {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">EducationService</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar >
                            <Nav className="mr-auto" navbar>

                                <NavItem >
                                    <NavLink href="/educationstudentallstudent" > ข้อมูลการศึกษาต่อ </NavLink>
                                </NavItem>
                                
                                <NavItem >
                                    <NavLink href="/educationstudent" > ข้อมูลมหาวิทยาลัย </NavLink>
                                </NavItem>
                            </Nav >
                            <NavLink>
                                <Button href="/login" >เข้าสู่ระบบ</Button>
                            </NavLink>

                        </ Collapse >
            </Navbar>
          </div>
        );
    } else {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">EducationService</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar >
              <Nav className="mr-auto" navbar>

<NavItem >
    <NavLink href="/educationstudentallstudent" > ข้อมูลการศึกษาต่อ </NavLink>
</NavItem>

<NavItem >
    <NavLink href="/educationstudent" > ข้อมูลมหาวิทยาลัย </NavLink>
</NavItem>
      
          </Nav>
          
                            <NavLink >
                                
                            <UncontrolledDropdown>
              <DropdownToggle nav caret>
                   {session.fname_stu}{" "}{session.lname_stu}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
               <a href={"/profile/" + session.id_stu} className="Button-Style">ข้อมูลส่วนตัว </a>
                </DropdownItem>
                <DropdownItem>
                <a  href={"/detaileducationstudent/" + session.id_stu}  className="Button-Style">ข้อมูลการศึกษาต่อ </a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <a  onClick={logout} className="Button-Style">ออกจากระบบ </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
                            </NavLink>

                        </ Collapse >
                </ Navbar><br />
            </div >
        );
    }
}


export default Header;