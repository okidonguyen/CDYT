import { useState } from 'react';
import { NavItem, NavLink, Nav, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = ({ isOpen }) => (
    <div className="admin-sidebar ">
        <div className={isOpen ? 'sidebar is-open' : 'sidebar'}>
            <div className="sidebar-header">
                <img width={'250px'} src={require('~/assets/images/logo-02.png')} alt="LOGO" />
            </div>
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-3">
                    <NavItem>
                        <NavLink tag={Link} to={'/quantri'}>
                            Cấu hình chung
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/quantri'}>
                            Quản lý người sử dụng
                        </NavLink>
                    </NavItem>
                    <SubMenu title="Quản lý Menu" items={submenus[0]} />
                    <SubMenu title="Quản lý Bài viết" items={submenus[1]} />
                    <NavItem>
                        <NavLink tag={Link} to={'/quantri'}>
                            Quản lý Thông báo
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/quantri'}>
                            Quản lý Tài liệu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/quantri'}>
                            Thư viện hình ảnh
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/quantri'}>
                            Quản lý Tuyển sinh
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/quantri'}>
                            Quản lý Hướng nghiệp
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    </div>
);

const submenus = [
    [
        {
            title: 'Menu Trang chủ',
            target: '/quantri',
        },
        {
            title: 'Menu Trang nội bộ',
            target: '/',
        },
        {
            title: 'Menu Trang sinh viên',
            target: '/',
        },
    ],
    [
        {
            title: 'Danh mục bài viết',
            target: '/',
        },
        {
            title: 'Thư viện hình ảnh',
            target: '/',
        },
    ],
];

const SubMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { title, items } = props;

    return (
        <div>
            <NavItem onClick={toggle} className={!collapsed ? 'menu-open' : ''}>
                <NavLink>
                    <i className="bi bi-contact"></i>
                    {title}
                    <i className="dropdown-toggle" style={{ float: 'right' }} />
                </NavLink>
            </NavItem>
            <Collapse
                isOpen={!collapsed}
                navbar
                className={!collapsed ? 'items-menu mb-1' : 'items-menu'}
            >
                {items.map((item, index) => (
                    <NavItem key={index} className="pl-4">
                        <NavLink tag={Link} to={item.target}>
                            {item.title}
                        </NavLink>
                    </NavItem>
                ))}
            </Collapse>
        </div>
    );
};

export default Sidebar;
