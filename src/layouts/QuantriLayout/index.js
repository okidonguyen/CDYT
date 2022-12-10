import Sidebar from '~/layouts/LayoutElements/Sidebar';
import Topbar from '~/layouts/LayoutElements/Topbar';
import { useState } from 'react';
import { Container } from 'reactstrap';

const QuantriLayout = ({ children }) => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <div className="admin-wrapper">
            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Container fluid>
                <Topbar toggleSidebar={toggleSidebar} />
                {children}
            </Container>
        </div>
    );
};

export default QuantriLayout;
