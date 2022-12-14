import { Col, Container, Row } from 'reactstrap';
import CompanyLink from '~/components/CompanyLink';
import Majors from '~/components/Majors';
import NewsCarousel from '~/components/NewsCarousel';
import Notification from '~/components/Notification';
import Quotes from '~/components/Quotes';
import RunningText from '~/components/RunningText';
import HeadTittle from '~/components/HeadTittle';
import { Slideshow } from '~/components';
import { items, footerItems } from '~/data';
import { SlideshowSettings as settings } from '~/data';

function Home() {
    let newSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        height: '200px',
    };
    return (
        <Container fluid className="p-0">
            <Slideshow items={items} settings={settings} />
            <RunningText separator={'/'} />
            <Container fluid="lg" className="">
                <Row>
                    <Col className="col-12 col-lg-8 p-2">
                        <NewsCarousel />
                    </Col>
                    <Col className="col-12 col-lg-4 p-2">
                        <Notification />
                    </Col>
                </Row>
            </Container>
            <Majors />
            <Quotes
                title={'TẦM NHÌN - SỨ MỆNH'}
                content={
                    'ĐÀO TẠO NGUỒN NHÂN LỰC Y TẾ CÓ TRÌNH ĐỘ ĐỂ BẢO VỆ CHĂM SÓC VÀ NÂNG CAO SỨC KHỎE CỘNG ĐỒNG VÙNG TÂY NGUYÊN'
                }
                icon={'bi bi-book'}
            />

            <Container
                className="d-none d-lg-block"
                style={{ padding: '30px', textAlign: 'center' }}
            >
                <HeadTittle title={'HÌNH ẢNH HOẠT ĐỘNG'} />
                <Slideshow
                    items={footerItems}
                    settings={newSettings}
                    cssModule={'home-slider-bottom'}
                />
            </Container>
            <Container className="d-none d-lg-block"></Container>
            <CompanyLink />
        </Container>
    );
}

export default Home;
