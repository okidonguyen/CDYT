import { Table } from 'reactstrap';
import userService from '~/services/user.service';

function DanhmucHinhanh() {
    userService.getAllUser().then((res) => {
        //console.log(res.data);
    });

    return (
        <div>
            <h1>DANH MỤC HÌNH ẢNH</h1>
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Hình ảnh</th>
                        <th>Mô tả</th>
                        <th>Tải xuống</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}

export default DanhmucHinhanh;
