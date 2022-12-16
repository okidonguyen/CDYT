// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // ModalFooter,
    // Form,
    // FormGroup,
    // Label,
    // Input,
} from 'reactstrap';

function RegisterOnline(args) {
    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);

    return (
        <div style={{ zIndex: 999 }}>
            <Link to={'/tuyensinh'}>
                <Button color="danger">
                    <i className="bi bi-pencil-square" /> Đăng ký tuyển sinh
                </Button>
            </Link>
            {/* <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Đăng ký trực tuyến</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="student-job">Ngành học</Label>
                            <Input type="select">
                                <option>Chọn ngành học</option>
                                <option>Khoa y học lâm sàn</option>
                                <option>Khoa y tế cộng đồng</option>
                                <option>Khoa điều dưỡng</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="student-fullname">Họ và tên</Label>
                            <Input id="student-fullname" placeholder="Nhập thông tin" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="student-phone">Số điện thoại</Label>
                            <Input id="student-phone" placeholder="Nhập thông tin" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="student-email">Email</Label>
                            <Input id="student-email" placeholder="Nhập thông tin" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Đăng ký thông tin
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Huỷ
                    </Button>
                </ModalFooter>
            </Modal> */}
        </div>
    );
}

export default RegisterOnline;
