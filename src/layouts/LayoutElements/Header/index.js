import { Container, NavLink } from 'reactstrap';
import './Header.scss';

function Header() {
    return (
        <header className={'wrapper-header'}>
            <HeaderTop />
            <HeaderMiddle />
        </header>
    );
}

const HeaderTop = () => {
    return (
        <div className={'wrapper-top'}>
            <Container className='container-xl'>
                <div className={'hotline'}>
                    <i className="bi bi-telephone"></i>
                    <span> Hotline: 02623.845.678</span>
                </div>
                <div className={'text-running'}>
                    <marquee>
                        Chào mừng các bạn đã đến với Website Trường Cao Đẳng Y tế Đắk Lắk
                    </marquee>
                </div>
                <div className={'menu-top ms-auto'}>
                    <div className={'menu-top-item'}>
                        <i className="bi bi-door-open"></i>
                        <NavLink href="/noibo/hoatdong">Đăng nhập</NavLink>
                    </div>
                    <div className={'menu-top-item'}>
                        <i className="bi bi-book"></i>
                        <NavLink href="/noibo/hoatdong">CBCC</NavLink>
                    </div>
                    <div className={'menu-top-item'}>
                        <i className="bi bi-person-lines-fill"></i>
                        <NavLink href="/sinhvien/hoatdong">HSSV</NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const HeaderMiddle = () => {
    return (
        <div className={'wrapper-middle'}>
            <Container>
                <div className={'wrapper-logo'}>
                    <div className={'img-logo'}></div>
                    <div className={'txt-logo'}>
                        <h3>TRƯỜNG CAO ĐẲNG</h3>
                        <h1>Y TẾ ĐẮK LẮK</h1>
                    </div>
                </div>
                <div className={'wrapper-search'}></div>
            </Container>
        </div>
    );
};

export default Header;
