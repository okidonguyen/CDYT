import { Col, Container, Row } from 'reactstrap';
import CompanyLink from '~/components/CompanyLink';
import Majors from '~/components/Majors';
import NewsCarousel from '~/components/NewsCarousel';
import Notification from '~/components/Notification';

import { items, footerItems } from '~/data';
import { Slideshow } from '~/components';
import { SlideshowSettings as settings } from '~/data';
import Quotes from '../../components/Quotes';

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
            {/* <ImgCarousel items={items} /> */}
            <Container fluid="lg">
                <Row className="pt-3 pb-3">
                    <Col className="col-12 col-lg-7 p-0">
                        <NewsCarousel />
                    </Col>
                    <Col className="col-12 col-lg-5 p-0">
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
                <h3 className="border-bottom">HÌNH ẢNH HOẠT ĐỘNG</h3>
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
