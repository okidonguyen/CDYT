import { Navbar, Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Topbar = ({ toggleSidebar }) => {
    return (
        <Navbar
            className="navbar shadow-sm p-3 mb-2"
            style={{ backgroundColor: '#288b6c', color: 'white' }}
        >
            <Button color="light" onClick={toggleSidebar}>
                <i className="bi bi-justify"></i>
            </Button>
            <h2>TRANG QUẢN TRỊ</h2>
            <NavLink className="list-unstyled p-3" tag={Link} to={'/'}>
                Đăng xuất
            </NavLink>
        </Navbar>
    );
};

export default Topbar;
