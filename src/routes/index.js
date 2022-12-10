// HOME
import Home from '~/pages/Home';
import Tintuc from '~/pages/Tintuc';
import TintucPage from '~/pages/Tintuc/TintucPage';
import Dangkytuyensinh from '~/pages/Dangkytuyensinh';
import Dangkyhuongnghiep from '~/pages/Dangkyhuongnghiep';
import Hoidap from '~/pages/Hoidap';
// OTHER
import HoatdongNoibo from '~/pages/Noibo/Hoatdong';
import HoatdongSinhvien from '~/pages/Sinhvien/Hoatdong';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// ADMIN
import QtTrangchu from '~/pages/Quantri/QtTrangchu';

// LAYOUT
import { NoiboLayout, SinhvienLayout, QuantriLayout } from '~/layouts';

const publicRoute = [
    // TRANG CHU
    { path: '/', component: Home },
    { path: '/tintuc', component: Tintuc },
    { path: '/tintuc/:slug', component: TintucPage },
    // Chuong trinh dao tao
    { path: '/profile', component: Profile },
    { path: '/hoidap', component: Hoidap },
    { path: '/search', component: Search },
    { path: '/dangkytuyensinh', component: Dangkytuyensinh },
    { path: '/dangkyhuongnghiep', component: Dangkyhuongnghiep },
    { path: '/noibo/hoatdong', component: HoatdongNoibo, layout: NoiboLayout },
    { path: '/sinhvien/hoatdong', component: HoatdongSinhvien, layout: SinhvienLayout },
    // Quan tri
    { path: '/quantri', component: QtTrangchu, layout: QuantriLayout },
];

const privateRoute = [];

export { publicRoute, privateRoute };
