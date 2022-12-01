import Home from "~/pages/Home";
import HoatdongNoibo from "~/pages/Noibo/Hoatdong";
import HoatdongSinhvien from "~/pages/Sinhvien/Hoatdong";
import Profile from "~/pages/Profile";
import Following from "~/pages/Following";
import Search from "~/pages/Search";
import Dangkytuyensinh from "~/pages/Dangkytuyensinh";
import { NoiboLayout, SinhvienLayout } from "~/layouts";

const publicRoute = [
    {path: "/", component: Home},
    {path: "/profile", component: Profile},
    {path: "/following", component: Following},
    {path: "/search", component: Search},
    {path: "/dangkytuyensinh", component: Dangkytuyensinh},
    {path: "/noibo/hoatdong", component: HoatdongNoibo, layout: NoiboLayout},
    {path: "/sinhvien/hoatdong", component: HoatdongSinhvien, layout: SinhvienLayout},
];

const privateRoute = [];

export { publicRoute, privateRoute };
