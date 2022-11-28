import Header from "~/layouts/LayoutElements/Header";
import Footer from "~/layouts/LayoutElements/Footer";
import MainMenu from "~/components/MainMenu";
import { Slideshow } from '~/components';

function DefaultLayout({children}) {
    const menuItems = [
        {
            name: 'Trang chủ',
            link: '/',
        },
        {
            name: 'Giới thiệu',
            submenu: [
                {
                    name: 'Sứ mệnh nhà trường',
                    link: '/profile',
                },
                {
                    name: 'Đội ngũ giảng viên',
                    link: '/profile',
                },
                {
                    name: 'Công khai chất lượng GD',
                    link: '/profile',
                }
            ],
        },{
            name: 'Tin tức',
            link: '/profile',
        },
        {
            name: 'Chương trình đào tạo',
            submenu: [
                {
                    name: 'Y HỌC LÂM SÀN',
                    link: '/profile',
                },
                {
                    name: 'Y TẾ CỘNG ĐỒNG',
                    link: '/profile',
                },
                {
                    name: 'ĐIỀU DƯỠNG -KTYH',
                    link: '/profile',
                },
                {
                    name: 'KHOA HỌC CƠ BẢN',
                    link: '/profile',
                },
            ],
        },
        {
            name: 'Tuyển sinh - Đào tạo',
            submenu: [
                {
                    name: 'Đăng ký tư vấn',
                    link: '/',
                },
                {
                    name: 'Tuyển sinh 2022',
                    link: '/profile',
                },
                {
                    name: 'Học phí',
                    link: '/profile',
                },
                {
                    name: 'Những điều cần biết',
                    link: '/profile',
                },
            ],
        },
        {
            name: 'Hỏi đáp',
            link: '/profile',
        },{
            name: 'Tuyển dụng',
            link: '/profile',
        }
    ];
    return ( <div>
        <Header/>        
        <MainMenu menuItems={menuItems} color={"#288b6c"}/>   
        <Slideshow />
        <div style={{height:"400px"}}>{children}</div>
        <Footer/>
    </div> );
}

export default DefaultLayout;