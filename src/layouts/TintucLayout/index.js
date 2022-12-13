import Header from '~/layouts/LayoutElements/Header';
import Footer from '~/layouts/LayoutElements/Footer';
import MainMenu from '~/components/MainMenu';
import { trangchuMenu as menuItems } from '~/data';
import { Container } from 'reactstrap';
import { useState } from 'react';

function TintucLayout({ children }) {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <div>
            <Header />
            <MainMenu menuItems={menuItems} color={'#288b6c'} />
            <Container style={{ minHeight: '500px' }}>{children}</Container>
            <Footer />
        </div>
    );
}

export default TintucLayout;
