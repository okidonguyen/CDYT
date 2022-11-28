import Header from "~/layouts/LayoutElements/Header";
import Footer from "~/layouts/LayoutElements/Footer";
import MainMenu from "~/components/MainMenu";
import { Slideshow } from '~/components';

function SinhvienLayout({children}) {
    const menuItems = [
        {
            name: 'Trang chủ',
            link: '/',
        },
        {
            name: 'Hoạt động sinh viên',
            submenu: [
                {
                    name: 'KHOA Y HỌC LÂM SÀN',
                    link: '/profile',
                },
                {
                    name: 'KHOA Y TẾ CỘNG ĐỒNG',
                    link: '/profile',
                },
                {
                    name: 'KHOA ĐIỀU DƯỠNG -KTYH',
                    link: '/profile',
                },
                {
                    name: 'KHOA KHOA HỌC CƠ BẢN',
                    link: '/profile',
                },
            ],
        },
        {
            name: 'Hướng nghiệp',
            submenu: [
                {
                    name: 'Đăng ký hướng nghiệp',
                    link: '/profile',
                },                
                {
                    name: 'Việc làm & thực tập',
                    link: '/profile',
                },
                {
                    name: 'Đối tác liên kết',
                    link: '/profile',
                }
            ],
        },
        {
            name: 'Học tập',
            submenu: [
                {
                    name: 'Lịch giảng',
                    link: '/profile',
                },                
                {
                    name: 'Tra cứu điểm',
                    link: '/profile',
                },
                {
                    name: 'Tài liệu',
                    link: '/profile',
                }
            ],
        },
        {
            name: 'Kiến thức chuyên ngành',
            link: '/profile',
        },
        {
            name: 'Thư viện - Bài giảng',
            link: '/profile',
        }
    ];
    return ( <div>
        <Header/>               
        <MainMenu menuItems={menuItems} color={"#288b6c"}/>  
        <Slideshow />
        <div id="containter"  style={{minHeight:"500px"}}>{children}</div>
        <Footer/>
    </div> );
}

export default SinhvienLayout;