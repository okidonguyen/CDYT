import { Container } from 'reactstrap';
import CompanyLink from '~/components/CompanyLink';
import { Slideshow } from '~/components';
import { footerItems } from '~/data';
import { SlideshowSettings as settings } from '~/data';
import News from '~/components/News';
import HeadTittle from '~/components/HeadTittle';

function Tintuc() {
    return (
        <Container fluid className="p-0">
            <Container fluid="lg">
                <News />
            </Container>
            <Container
                className="d-none d-lg-block"
            >                
                <HeadTittle title={'HÌNH ẢNH HOẠT ĐỘNG'}/>
            </Container>
            <Container className="d-none d-lg-block">
                <Slideshow items={footerItems} settings={settings} />
            </Container>
            <CompanyLink />
        </Container>
    );
}

export default Tintuc;
