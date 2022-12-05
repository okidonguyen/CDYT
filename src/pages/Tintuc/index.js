import { Container } from 'reactstrap';
import CompanyLink from '~/components/CompanyLink';
import { Slideshow } from '~/components';
import { footerItems } from '~/data';
import { SlideshowSettings as settings } from '~/data';
import Breadcrumbs from '~/components/Breadcrumbs';
import News from '~/components/News';

function Tintuc() {
    let breadcrumbItems = [
        {
            name: 'Trang chủ',
            href: '/',
        },
        {
            name: 'Tin tức',
            href: '/tintuc',
        },
    ];

    return (
        <Container fluid className="p-0">
            <Container fluid="lg">
                <Breadcrumbs items={breadcrumbItems} />
                <News />
            </Container>
            <Container
                className="d-none d-lg-block"
                style={{ padding: '30px', textAlign: 'center' }}
            >
                <h3 className="border-bottom">HÌNH ẢNH HOẠT ĐỘNG</h3>
            </Container>
            <Container className="d-none d-lg-block">
                <Slideshow items={footerItems} settings={settings} />
            </Container>
            <CompanyLink />
        </Container>
    );
}

export default Tintuc;
