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
        <div
            className="okido-mainmenu"
            style={{ backgroundImage: 'repeating-linear-gradient(#288b6c, #35c195)' }}
        >
            <Navbar expand="lg" className="fw-bold py-0 container-xl">
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
                                            className="okido-top-menu"
                                        >
                                            <DropdownToggle nav>
                                                {item.name} <i className="bi bi-caret-down" />
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
                                        <NavItem key={index} className="okido-top-menu">
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

// const MainMenu = () => {
//     return (
//         <div>
//             <Header />
//         </div>
//     );
// };

// export const menuItems = [
//     {
//         title: 'Home',
//         url: '/',
//     },
//     {
//         title: 'Services',
//         url: '/services',
//         submenu: [
//             {
//                 title: 'web design',
//                 url: 'web-design',
//             },
//             {
//                 title: 'web development',
//                 url: 'web-dev',
//                 submenu: [
//                     {
//                         title: 'Frontend',
//                         url: 'frontend',
//                     },
//                     {
//                         title: 'Backend',
//                         submenu: [
//                             {
//                                 title: 'NodeJS',
//                                 url: 'node',
//                             },
//                             {
//                                 title: 'PHP',
//                                 url: 'php',
//                             },
//                         ],
//                     },
//                 ],
//             },
//             {
//                 title: 'SEO',
//                 url: 'seo',
//             },
//         ],
//     },
//     {
//         title: 'About',
//         url: '/about',
//         submenu: [
//             {
//                 title: 'Who we are',
//                 url: 'who-we-are',
//             },
//             {
//                 title: 'Our values',
//                 url: 'our-values',
//             },
//         ],
//     },
// ];

// const Header = () => {
//     return (
//         <header>
//             <div className="nav-area">
//                 <a href="/" className="logo">
//                     Logo
//                 </a>
//                 <Navbar />
//             </div>
//         </header>
//     );
// };

// const Navbar = () => {
//     return (
//         <nav>
//             <ul className="menus">
//                 {menuItems.map((menu, index) => {
//                     const depthLevel = 0;
//                     return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
//                 })}
//             </ul>
//         </nav>
//     );
// };

// const MenuItems = ({ items, depthLevel }) => {
//     const [dropdown, setDropdown] = useState(false);

//     let ref = useRef();

//     useEffect(() => {
//         const handler = (event) => {
//             if (dropdown && ref.current && !ref.current.contains(event.target)) {
//                 setDropdown(false);
//             }
//         };
//         document.addEventListener('mousedown', handler);
//         document.addEventListener('touchstart', handler);
//         return () => {
//             // Cleanup the event listener
//             document.removeEventListener('mousedown', handler);
//             document.removeEventListener('touchstart', handler);
//         };
//     }, [dropdown]);

//     const onMouseEnter = () => {
//         window.innerWidth > 960 && setDropdown(true);
//     };

//     const onMouseLeave = () => {
//         window.innerWidth > 960 && setDropdown(false);
//     };

//     const closeDropdown = () => {
//         dropdown && setDropdown(false);
//     };

//     return (
//         <li
//             className="menu-items"
//             ref={ref}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             onClick={closeDropdown}
//         >
//             {items.url && items.submenu ? (
//                 <>
//                     <button
//                         type="button"
//                         aria-haspopup="menu"
//                         aria-expanded={dropdown ? 'true' : 'false'}
//                         onClick={() => setDropdown((prev) => !prev)}
//                     >
//                         {window.innerWidth < 960 && depthLevel === 0 ? (
//                             items.title
//                         ) : (
//                             <Link to={items.url}>{items.title}</Link>
//                         )}

//                         {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel > 0 &&
//                           window.innerWidth > 960 ? (
//                             <span>&raquo;</span>
//                         ) : (
//                             <span className="arrow" />
//                         )}
//                     </button>
//                     <Dropdown
//                         depthLevel={depthLevel}
//                         submenus={items.submenu}
//                         dropdown={dropdown}
//                     />
//                 </>
//             ) : !items.url && items.submenu ? (
//                 <>
//                     <button
//                         type="button"
//                         aria-haspopup="menu"
//                         aria-expanded={dropdown ? 'true' : 'false'}
//                         onClick={() => setDropdown((prev) => !prev)}
//                     >
//                         {items.title}{' '}
//                         {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
//                     </button>
//                     <Dropdown
//                         depthLevel={depthLevel}
//                         submenus={items.submenu}
//                         dropdown={dropdown}
//                     />
//                 </>
//             ) : (
//                 <Link to={items.url}>{items.title}</Link>
//             )}
//         </li>
//     );
// };

// const Dropdown = ({ submenus, dropdown, depthLevel }) => {
//     depthLevel = depthLevel + 1;
//     const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
//     return (
//         <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
//             {submenus.map((submenu, index) => (
//                 <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
//             ))}
//         </ul>
//     );
// };

// export default MainMenu;
