import userService from '~/services/user.service';

function DanhmucHoidap() {
    userService.getAllUser().then((res) => {
        //console.log(res.data);
    });

    return <h1>DANH MỤC HỎI ĐÁP</h1>;
}

export default DanhmucHoidap;
