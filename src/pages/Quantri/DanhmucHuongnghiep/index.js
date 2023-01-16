import { useEffect, useState } from 'react';
import { Container, NavLink, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import authHeader from '~/services/auth-header';

import axios from 'axios';
import {API_URL} from '~/data';

const DanhmucHuongnghiep = () => {
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(API_URL + 'advise/', { headers: authHeader() }).then((res) => {
            setData(res.data);
        });
    }, []);

    const handleDestroy = (id) => {
        axios
            .delete(
                API_URL + 'advise/' + id,
                data,
                { validateStatus: false },
                { headers: authHeader() }
            )
            .then((res) => {
                //console.log(res);
                if (res.status === 404 || res.status === 401) {
                    //console.log(res.data.message);
                    NotificationManager.error(res.data.message);
                }

                if (res.status === 200) {
                    //console.log(res.data.message);
                    NotificationManager.error(res.data.message);
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
            <Table bordered hover striped>
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
                                <td>
                                    {' '}
                                    {`${new Date(row.advise_date).getDate()}/${
                                        new Date(row.advise_date).getMonth() + 1
                                    }/${new Date(row.advise_date).getFullYear()}`}
                                </td>

                                <td>{row.advise_time}</td>
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
            <NotificationContainer enterTimeout={800} leaveTimeout={500} />
        </Container>
    );
};

export default DanhmucHuongnghiep;
