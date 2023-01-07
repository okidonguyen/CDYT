import { Col, Container, Row } from 'reactstrap';
import CompanyLink from '~/components/CompanyLink';
import Majors from '~/components/Majors';
import NewsCarousel from '~/components/NewsCarousel';
import Notification from '~/components/Notification';
import Quotes from '~/components/Quotes';
import RunningText from '~/components/RunningText';
import HeadTittle from '~/components/HeadTittle';
import News from '~/components/News';
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
            <Container fluid="lg">
                <Row>
                    <Col className="col-12 col-lg-8 p-2">
                        <NewsCarousel />
                    </Col>
                    <Col className="col-12 col-lg-4 p-2">
                        <Notification />
                    </Col>
                </Row>
            </Container>

            <Container fluid="lg" style={{ paddingBottom: '30px' }}>
                <Row>
                    <Col className="col-12 col-lg-4">
                        <HeadTittle title={'HOẠT ĐỘNG CHUYÊN MÔN'} />
                        <News category={'hoatdongchuyenmon'} numbers={2} imagetop={true} />
                    </Col>

                    <Col className="col-12 col-lg-4">
                        <HeadTittle title={'HOẠT ĐỘNG THI VÀ TUYỂN SINH'} />
                        <News category={'thivatuyensinh'} numbers={2} imagetop={true} />
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <HeadTittle title={'HOẠT ĐỘNG ĐOÀN THANH NIÊN'} />
                        <News category={'doanthanhnien'} numbers={2} imagetop={true} />
                    </Col>
                </Row>
            </Container>
            <Quotes
                title={'TẦM NHÌN - SỨ MỆNH'}
                content={
                    'ĐÀO TẠO NGUỒN NHÂN LỰC Y TẾ CÓ TRÌNH ĐỘ ĐỂ BẢO VỆ CHĂM SÓC VÀ NÂNG CAO SỨC KHỎE CỘNG ĐỒNG VÙNG TÂY NGUYÊN'
                }
                icon={'bi bi-book'}
            />

            <Majors />

            <Container
                className="d-none d-lg-block"
                style={{ paddingTop: '30px', textAlign: 'center' }}
            >
                <HeadTittle title={'HÌNH ẢNH HOẠT ĐỘNG'} />
                <Slideshow
                    items={footerItems}
                    settings={newSettings}
                    cssModule={'home-slider-bottom'}
                />
            </Container>

            <CompanyLink />
        </Container>
    );
}

export default Home;
