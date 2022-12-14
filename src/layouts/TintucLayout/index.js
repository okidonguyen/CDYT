import Header from '~/layouts/LayoutElements/Header';
import Footer from '~/layouts/LayoutElements/Footer';
import MainMenu from '~/components/MainMenu';
import RunningText from '~/components/RunningText';
import { trangchuMenu as menuItems } from '~/data';

import { useState } from 'react';
import { Container } from 'reactstrap';

function TintucLayout({ children }) {
    return (
        <div>
            <Header />
            <MainMenu menuItems={menuItems} color={'#288b6c'} />
            <RunningText separator={"/"}/>
            <Container style={{ minHeight: '500px' }}>{children}</Container>
            <Footer />
        </div>
    );
}

export default TintucLayout;
