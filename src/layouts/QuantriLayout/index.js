import Sidebar from '~/layouts/LayoutElements/Sidebar';
import Topbar from '~/layouts/LayoutElements/Topbar';
import { useState } from 'react';
import { Container } from 'reactstrap';

const QuantriLayout = ({ children }) => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const menuSidebar = [
        {
            name: 'Cấu hình chung',
            link: '/quantri',
            sub: null,
        },
        {
            name: 'Quản lý người sử dụng',
            link: '/quantri/nguoisudung',
            sub: null,
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
            link: '/quantri',
            sub: [
                {
                    title: 'Danh mục bài viết',
                    target: '/',
                },
                {
                    title: 'Thư viện hình ảnh',
                    target: '/',
                },
            ],
        },
        {
            name: 'Quản lý Tài liệu',
            link: '/quantri',
            sub: null,
        },
        {
            name: 'Thư viện hình ảnh',
            link: '/quantri',
            sub: null,
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
