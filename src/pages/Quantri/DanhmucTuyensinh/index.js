import { useEffect, useState } from 'react';
import { Container, NavLink, Table, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import authHeader from '~/services/auth-header';

import axios from 'axios';
import {API_URL} from '~/data';

const DanhmucTuyensinh = () => {
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(API_URL + 'admissions/', { headers: authHeader() }).then((res) => {
            setData(res.data);
        });
    }, []);

    const handleDestroy = (id) => {
        axios
            .delete(
                API_URL + 'admissions/' + id,
                data,
                { validateStatus: false },
                { headers: authHeader() }
            )
            .then((res) => {
                //console.log(res);
                if (res.status === 404 || res.status === 401) {
                    //console.log(res.data.message);
                }

                if (res.status === 200) {
                    //console.log(res.data.message);
                    setData(data.filter((item) => item.id !== id));
                }
            });
    };

    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const toggle = (content) => {
        setModalContent(content);
        setModal(!modal);
    };

    return (
        <Container>
            <h1>DANH SÁCH ĐĂNG KÝ TUYỂN SINH</h1>
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{ width: '250px' }}>Họ và tên</th>
                        <th style={{ width: '120px' }}>Ngày sinh</th>
                        <th style={{ width: '100px' }}>Giới tính</th>
                        <th style={{ width: '300px' }}>Ngành đăng ký</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((row, index) => (
                            <tr key={row.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{row.student_name}</td>
                                <td>
                                    {`${new Date(row.student_birthday).getDate()}/${
                                        new Date(row.student_birthday).getMonth() + 1
                                    }/${new Date(row.student_birthday).getFullYear()}`}
                                </td>
                                <td>{row.student_gen}</td>
                                <td>{row.student_job}</td>
                                <td>
                                    <NavLink
                                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                        onClick={() => {
                                            toggle(
                                                <ul>
                                                    <li>
                                                        Họ và tên:{' '}
                                                        <strong>{row.student_name}</strong>
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        Ngày sinh:{' '}
                                                        {`${new Date(
                                                            row.student_birthday
                                                        ).getDate()}/${
                                                            new Date(
                                                                row.student_birthday
                                                            ).getMonth() + 1
                                                        }/${new Date(
                                                            row.student_birthday
                                                        ).getFullYear()}`}
                                                    </li>
                                                    <li> Giới tính: {row.student_gen}</li>
                                                    <li> Tôn giáo: {row.student_rel}</li>
                                                    <li> Dân tộc: {row.student_nation}</li>
                                                    <li> Trình độ: {row.student_level}</li>
                                                    <li> Số điện thoại: {row.student_phone}</li>
                                                    <li> Email: {row.student_email}</li>
                                                    <li>
                                                        Địa chỉ:{' '}
                                                        {row.student_street +
                                                            ', ' +
                                                            row.student_ward +
                                                            ',' +
                                                            row.student_district +
                                                            ',' +
                                                            row.student_province}
                                                    </li>
                                                </ul>
                                            );
                                        }}
                                    >
                                        Xem chi tiết
                                    </NavLink>{' '}
                                    <NavLink
                                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleDestroy(row.id);
                                        }}
                                    >
                                        Xoá
                                    </NavLink>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Modal isOpen={modal}>
                <ModalHeader
                    toggle={() => {
                        toggle('');
                    }}
                >
                    Thông tin chi tiết
                </ModalHeader>
                <ModalBody>{modalContent}</ModalBody>
            </Modal>
        </Container>
    );
};

export default DanhmucTuyensinh;
