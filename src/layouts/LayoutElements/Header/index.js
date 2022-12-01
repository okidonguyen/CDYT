import React, { useState } from 'react';
import {
    Container,
    NavLink,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import './Header.scss';

function Header() {
    return (
        <header className={'wrapper-header'}>
            <HeaderTop />
            <HeaderMiddle />
        </header>
    );
}

const HeaderTop = () => {
    return (
        <div className={'wrapper-top'}>
            <Container className="container-xl">
                <div className={'hotline'}>
                    <i className="bi bi-telephone"></i>
                    <span> Hotline: 02623.845.678</span>
                </div>
                <div className={'text-running'}>
                    <marquee>
                        Chào mừng các bạn đã đến với Website Trường Cao Đẳng Y tế Đắk Lắk
                    </marquee>
                </div>
                <div className={'menu-top ms-auto'}>
                    <div className={'menu-top-item'}>
                        <Login />
                    </div>
                    <div className={'menu-top-item'}>
                        <NavLink href="/noibo/hoatdong">
                            <i className="bi bi-book"> </i>
                            <span className="d-none d-md-inline-block"> CBCC</span>
                        </NavLink>
                    </div>
                    <div className={'menu-top-item'}>
                        <NavLink href="/sinhvien/hoatdong">
                            <i className="bi bi-person-lines-fill"> </i>
                            <span className="d-none d-md-inline-block"> HSSV</span>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const HeaderMiddle = () => {
    return (
        <div className={'wrapper-middle'}>
            <Container>
                <div className={'wrapper-logo'}>
                    <div className={'img-logo'}></div>
                    <div className={'txt-logo'}>
                        <h3>TRƯỜNG CAO ĐẲNG</h3>
                        <h1>Y TẾ ĐẮK LẮK</h1>
                    </div>
                </div>
                <div className={'wrapper-search'}></div>
            </Container>
        </div>
    );
};

const Login = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <NavLink onClick={toggle}>
                <i className="bi bi-door-open"> </i>
                <span className="d-none d-md-inline-block"> Đăng nhập</span>
            </NavLink>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Đăng nhập</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="student-fullname">Tên đăng nhập</Label>
                            <Input id="student-fullname" placeholder="Nhập tên đăng nhập" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="student-phone">Mật khẩu</Label>
                            <Input id="student-phone" placeholder="Nhập mật khẩu" type='password' />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Đăng nhập
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Huỷ
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Header;
