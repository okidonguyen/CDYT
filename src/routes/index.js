// HOME
import Home from '~/pages/Home';
import GioithieuPage from '~/pages/Gioithieu';
import PhongbanPage from '../pages/Phongban';
import Tintuc from '~/pages/Tintuc';
import TintucPage from '~/pages/Tintuc/TintucPage';
import Tuyensinh from '~/pages/Tuyensinh';
import Huongnghiep from '~/pages/Huongnghiep';
import Lienhe from '~/pages/Lienhe';
import Hoidap from '~/pages/Hoidap';
// OTHER
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// ADMIN
import Trangchu from '~/pages/Quantri/Trangchu';
import Nghenghiep from '../pages/Quantri/Nghenghiep';
import DanhmucHuongnghiep from '../pages/Quantri/DanhmucHuongnghiep';
import DanhmucTuyensinh from '../pages/Quantri/DanhmucTuyensinh';
import Dangnhap from '../pages/Dangnhap';

// LAYOUT
import { TintucLayout, QuantriLayout, BlankLayout } from '~/layouts';
import Thongbao from '../pages/Thongbao';
import ThongbaoChitiet from '../pages/ThongbaoChitiet';
import Nguoisudung from '../pages/Quantri/Nguoisudung';

const publicRoute = [
    // TRANG CHU
    { path: '/', component: Home },
    // GIOI THIEU
    { path: '/gioithieu/:slug', component: GioithieuPage, layout: TintucLayout },
    // PHONG BAN
    { path: '/phongkhoa/:slug', component: PhongbanPage, layout: TintucLayout },
    // TIN TUC
    { path: '/tintuc/:slug', component: Tintuc, layout: TintucLayout },
    { path: '/tintucchitiet/:slug', component: TintucPage, layout: TintucLayout },
    // THONG BAO
    { path: '/thongbao', component: Thongbao, layout: TintucLayout },
    { path: '/thongbao/:slug', component: ThongbaoChitiet, layout: TintucLayout },
    // Chuong trinh dao tao
    { path: '/profile', component: Profile },
    { path: '/hoidap', component: Hoidap },
    { path: '/search', component: Search },
    { path: '/tuyensinh', component: Tuyensinh },
    { path: '/huongnghiep', component: Huongnghiep },
    // LIEN HE
    { path: '/lienhe', component: Lienhe },
    // Quan tri
    { path: '/quantri', component: Trangchu, layout: QuantriLayout },
    { path: '/quantri/nguoisudung', component: Nguoisudung, layout: QuantriLayout },
    {
        path: '/quantri/danhmuchuongnghiep',
        component: DanhmucHuongnghiep,
        layout: QuantriLayout,
    },
    {
        path: '/quantri/danhmuctuyensinh',
        component: DanhmucTuyensinh,
        layout: QuantriLayout,
    },
    {
        path: '/quantri/danhmucnghenghiep',
        component: Nghenghiep.DmNghenghiep,
        layout: QuantriLayout,
    },
    {
        path: '/quantri/themnghenghiep',
        component: Nghenghiep.ThemNghenghiep,
        layout: QuantriLayout,
    },
    {
        path: '/quantri/themnghenghiep/:id',
        component: Nghenghiep.ThemNghenghiep,
        layout: QuantriLayout,
    },
    { path: '/quantri/dangnhap', component: Dangnhap, layout: BlankLayout },
];

const privateRoute = [];

export { publicRoute, privateRoute };
