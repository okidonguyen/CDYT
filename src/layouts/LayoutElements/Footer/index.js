import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import './Footer.scss';
function Footer() {
    const itemLeft = [
        {
            link: '/',
            name: 'Giới thiệu',
        },
        {
            link: '/',
            name: 'Tuyển sinh',
        },
        {
            link: '/',
            name: 'Tin tức',
        },
        {
            link: '/',
            name: 'Văn Bản',
        },
        {
            link: '/',
            name: 'Album Ảnh',
        },
        {
            link: '/',
            name: 'Video',
        },
    ];
    return (
        <div className="wrapper-footer">
            <Container className="footer-top">
                <div className="row justify-content-lg-center container-fluid">
                    <div className="col">
                        <div id="footer-info">
                            <div className={'wrapper-logo'}>
                                <img
                                    alt=""
                                    src={require('~/assets/images/logo-02.png')}
                                    height={'180px'}
                                />
                            </div>
                            <p className="p-2">
                                Địa chỉ: 32 Y Ngông - P. Tân Tiến - Tp.Buôn Ma Thuột - Tỉnh Đắk Lắk
                                <br />
                                Điện thoại: 0262 3 845 678
                                <br />
                                Email: caodangytedaklak@gmail.com
                                <br />
                                <NavLink href="http://dmc.edu.vn">
                                    Website: http://dmc.edu.vn
                                </NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block"></div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="footer-menu " style={{ textAlign: 'left' }}>
                            <h5 className="border-bottom">Thống kê truy cập</h5>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink>
                                        <i className="bi bi-people"></i> Tổng truy cập: 300.000
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <i className="bi bi-person"></i> Đang online: 300
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <i className="bi bi-calendar-event"></i> Trong ngày: 6.000
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <i className="bi bi-calendar2-event"></i> Hôm qua: 7.000
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    <div className="col-lg-12 d-none d-lg-block">
                        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                        <div className="elfsight-app-6165ece6-9149-46c4-8dda-cd73ecb5e5f3"></div>
                    </div>
                </div>
            </Container>
            <Container className="p-0" fluid>
                <div className="footer-bottom">
                    <p>Copyright 2022</p>
                </div>
            </Container>
        </div>
    );
}

const FooterMenu = ({ data }) => {
    return (
        <div className="footer-menu">
            <Nav vertical>
                {data.map((item, index) => (
                    <NavItem key={index}>
                        <NavLink href={item.link}>{item.name}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    );
};

export default Footer;
