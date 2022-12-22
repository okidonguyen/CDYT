import userService from '~/services/user.service';

function Trangchu() {
    userService.getAllUser().then((res) => {
        console.log(res.data);
    });

    return <h1>TRANG CHỦ QUẢN TRỊ</h1>;
}

export default Trangchu;
