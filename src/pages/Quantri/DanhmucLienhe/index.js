import userService from '~/services/user.service';

function DanhmucLienhe() {
    userService.getAllUser().then((res) => {
        //console.log(res.data);
    });

    return <h1>DANH MỤC LIÊN HỆ</h1>;
}

export default DanhmucLienhe;
