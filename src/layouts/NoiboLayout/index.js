import Header from "~/layouts/LayoutElements/Header";
import Footer from "~/layouts/LayoutElements/Footer";
import MainMenu from "~/components/MainMenu";
import { Slideshow } from '~/components';

function NoiboLayout({children}) {
    const menuItems = [
        {
            name: 'Trang chủ',
            link: '/',
        },
        {
            name: 'Tin tức hoạt động',
            link: '/',
        },
        {
            name: 'Phòng ban',
            submenu: [
                {
                    name: 'Ban giám hiệu',
                    link: '/profile',
                },
                {
                    name: 'Phòng Tổ chức',
                    link: '/profile',
                },
                {
                    name: 'Phòng đào tạo',
                    link: '/profile',
                },
                {
                    name: 'Phòng tài chính Kế toán',
                    link: '/profile',
                }
                ,
                {
                    name: 'Phòng Quản lý HSSV',
                    link: '/profile',
                },
            ],
        },
        {
            name: 'Đoàn thể',
            submenu: [
                {
                    name: 'Đảng',
                    link: '/',
                },
                {
                    name: 'Công đoàn',
                    link: '/profile',
                },
                {
                    name: 'Đoàn thanh niên',
                    link: '/profile',
                }
            ],
        },  
        {
            name: 'Lịch Công tác',
            link: '/profile',
        },
        {
            name: 'Văn bản',
            submenu: [
                {
                    name: 'Văn bản TW',
                    link: '/',
                },
                {
                    name: 'Văn bản địa phương',
                    link: '/profile',
                },
                {
                    name: 'Văn bản trường',
                    link: '/profile',
                }
            ],
        },  
        {
            name: 'Tài liệu',
            link: '/profile',
        }
    ];
    return ( <div>
        <Header/>               
        <MainMenu menuItems={menuItems} color={"#288b6c"}/>  
        <Slideshow />
        <div id="containter" style={{minHeight:"500px"}}>{children}</div>
        <Footer/>
    </div> );
}

export default NoiboLayout;