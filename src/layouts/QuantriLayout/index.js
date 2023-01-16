import Sidebar from '~/layouts/LayoutElements/Sidebar';
import Topbar from '~/layouts/LayoutElements/Topbar';
import { useState } from 'react';
import { Container } from 'reactstrap';
import AuthService from '~/services/auth.service';

const QuantriLayout = ({ children }) => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    
    console.log(AuthService().getCurrentUser());
    
    const menuSidebar = [
        {
            name: 'Cấu hình chung',
            link: '/quantri/cauhinhchung',
            sub: null,
        },
        {
            name: 'Quản lý người sử dụng',
            link: '#',
            sub: [
                {
                    title: 'Quản trị hệ thống',
                    target: '/quantri/nguoisudung/',
                },
                {
                    title: 'Giảng viên',
                    target: '/quantri/',
                },
                {
                    title: 'Học sinh',
                    target: '/quantri/',
                },
            ],
        },
        {
            name: 'Quản lý Menu',
            link: '/quantri',
            sub: [
                {
                    title: 'Menu Trang chủ',
                    target: '/quantri',
                },
                {
                    title: 'Menu Trang nội bộ',
                    target: '/',
                },
            ],
        },
        {
            name: 'Quản lý Bài viết',
            link: '#',
            sub: [
                {
                    title: 'Danh mục bài viết',
                    target: '/quantri/bai-viet',
                },
                {
                    title: 'Phân quyền',
                    target: '/quantri',
                },
            ],
        },
        {
            name: 'Quản lý Nghề nghiệp',
            link: '/quantri/danhmucnghenghiep',
            sub: null,
        },
        {
            name: 'Quản lý Tuyển sinh',
            link: '/quantri/danhmuctuyensinh',
            sub: null,
        },
        {
            name: 'Quản lý Hướng nghiệp',
            link: '/quantri/danhmuchuongnghiep',
            sub: null,
        },
        {
            name: 'Quản lý Hỏi đáp',
            link: '/quantri/danhmuchoidap',
            sub: null,
        },
        {
            name: 'Quản lý Liên hệ',
            link: '/quantri/danhmuclienhe',
            sub: null,
        },
        {
            name: 'Quản lý Tài liệu',
            link: '/quantri/danhmuctailieu',
            sub: null,
        },
        {
            name: 'Thư viện hình ảnh',
            link: '/quantri/danhmuchinhanh',
            sub: null,
        },
        {
            name: 'Thư viện Video',
            link: '/quantri/danhmucvideo',
            sub: null,
        },
    ];

    return (
        <div className="admin-wrapper">
            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} menuSidebar={menuSidebar} />
            <Container fluid>
                <Topbar toggleSidebar={toggleSidebar} />
                {children}
            </Container>
        </div>
    );
};

export default QuantriLayout;
