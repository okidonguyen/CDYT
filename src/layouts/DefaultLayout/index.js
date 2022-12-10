import Header from '~/layouts/LayoutElements/Header';
import Footer from '~/layouts/LayoutElements/Footer';
import MainMenu from '~/components/MainMenu';

import RegisterOnline from '~/components/RegisterOnline';
import { trangchuMenu as menuItems } from '~/data';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <MainMenu menuItems={menuItems} color={'#288b6c'} />
            <div style={{ minHeight: '500px' }}>{children}</div>
            <Footer />
            <div
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '30px',
                    textAlign: 'center',
                }}
            >
                <RegisterOnline />
            </div>
        </div>
    );
}

export default DefaultLayout;
