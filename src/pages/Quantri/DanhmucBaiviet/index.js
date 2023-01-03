import { Table } from 'reactstrap';
import userService from '~/services/user.service';

function DanhmucBaiviet() {
    userService.getAllUser().then((res) => {
        //console.log(res.data);
    });

    return (
        <div>
            <h1>DANH MỤC BÀI VIẾT</h1>
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ảnh đại diện</th>
                        <th>Tựa đề</th>
                        <th>Liên kết</th>
                        <th>Nội dung</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}

export default DanhmucBaiviet;
