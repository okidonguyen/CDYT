import { Table } from 'reactstrap';
import userService from '~/services/user.service';

function DanhmucHoidap() {
    userService.getAllUser().then((res) => {
        //console.log(res.data);
    });

    return (
        <div>
            <h1>DANH MỤC HỎI ĐÁP</h1>
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Nội dung</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}

export default DanhmucHoidap;
