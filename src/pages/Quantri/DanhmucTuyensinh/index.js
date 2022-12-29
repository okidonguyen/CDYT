import { useEffect, useState } from 'react';
import { Container, NavLink, Table } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import authHeader from '~/services/auth-header';

import axios from 'axios';
const API_URL = 'http://localhost:3001/api/';

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

    const handleUpdate = (id) => {
        navigate('/quantri/themnghenghiep/' + id);
    };

    return (
        <Container>
            <h1>DANH SÁCH ĐĂNG KÝ HƯỚNG NGHIỆP</h1>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sinh viên</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Ngày tư vấn</th>
                        <th>Khung giờ</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((row, index) => (
                            <tr key={row.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{row.student_name}</td>
                                <td>{row.student_phone}</td>
                                <td className="col-3">
                                    {row.student_street +
                                        ', ' +
                                        row.student_ward +
                                        ',' +
                                        row.student_district +
                                        ',' +
                                        row.student_province}
                                </td>
                                <td>{row.admissions_date}</td>
                                <td>{row.admissions_time}</td>
                                <td>
                                    <NavLink
                                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleUpdate(row.id);
                                        }}
                                    >
                                        Cập nhật
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
        </Container>
    );
};

export default DanhmucTuyensinh;
