import { useState } from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import './MainMenu.scss';

const MainMenu = ({ menuItems, color }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="okido-mainmenu" style={{ backgroundColor: color }}>
            <Navbar expand="lg" className="fw-bold py-0  container-lg">
                <div onClick={toggle} className="navbar-toggler toggle ms-auto">
                    <i className="bi bi-list"></i>
                </div>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        {menuItems.map((item, index) =>
                            (() => {
                                if (item.submenu !== undefined) {
                                    return (
                                        <UncontrolledDropdown
                                            key={index}
                                            nav
                                            inNavbar
                                            className="position-relative"
                                        >
                                            <DropdownToggle nav caret>
                                                {item.name}
                                            </DropdownToggle>
                                            <DropdownMenu className="p-0 rounded-0">
                                                {item.submenu.map((sub, subindex) => (
                                                    <DropdownItem key={subindex} className="p-0 ">
                                                        <NavLink href={sub.link}>
                                                            {sub.name}
                                                        </NavLink>
                                                    </DropdownItem>
                                                ))}
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    );
                                } else {
                                    return (
                                        <NavItem key={index}>
                                            <NavLink href={item.link}>{item.name}</NavLink>
                                        </NavItem>
                                    );
                                }
                            })()
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default MainMenu;
