import { Table } from 'reactstrap';
import userService from '~/services/user.service';

function DanhmucTailieu() {
    userService.getAllUser().then((res) => {
        //console.log(res.data);
    });

    return (
        <div>
            <h1>DANH MỤC TÀI LIỆU</h1>
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên tài liệu</th>
                        <th>Mô tả</th>
                        <th>Tải xuống</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}

export default DanhmucTailieu;
