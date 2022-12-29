import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, NavLink, Table } from 'reactstrap';
import userService from '~/services/user.service';

function Nguoisudung() {
    const [users, setUser] = useState(null);

    useEffect(() => {
        userService.getAllUser().then((res) => {
            //console.log(res.data);
            setUser(res.data);
        });
    }, []);

    return (
        <Container>
            <h1>QUẢN LÝ NGƯỜI SỬ DỤNG</h1>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên Đăng nhập</th>
                        <th>Email</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>Xoá | Sửa</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <NavLink href="themnguoisudung">
                <Button color="primary">Thêm mới người sử dụng</Button>
            </NavLink>
        </Container>
    );
}

export default Nguoisudung;
