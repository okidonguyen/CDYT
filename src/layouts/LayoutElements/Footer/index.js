import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import './Footer.scss';
function Footer() {
    const itemRight = [
        {
            link: '/',
            name: 'Đội ngũ',
        },
        {
            link: '/',
            name: 'Sinh viên',
        },
        {
            link: '/',
            name: 'Thư viện',
        },
        {
            link: '/',
            name: 'Phần mềm đào tạo',
        },
    ];

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
                                <div className={'img-logo'}></div>
                                <div className={'txt-logo'}>
                                    <h4>TRƯỜNG CAO ĐẲNG</h4>
                                    <h2>Y TẾ ĐẮK LẮK</h2>
                                </div>
                            </div>
                            <p>
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
                    <div className="col-lg-2 d-none d-lg-block">
                        <FooterMenu data={itemLeft} />
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <FooterMenu data={itemRight} />
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
