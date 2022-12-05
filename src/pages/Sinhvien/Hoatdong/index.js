import { Col, Container, Row } from 'reactstrap';
import NewsCarousel from '~/components/NewsCarousel';
import Notification from '~/components/Notification';
import { Slideshow } from '~/components';
import { items, footerItems, SlideshowSettings as settings } from '~/data';

function HoatdongSinhvien() {
    return (
        <Container fluid className="p-0">
            <Slideshow items={items} settings={settings} />
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
            <Container className="d-none d-lg-block">
                <Slideshow items={footerItems} settings={settings} />
            </Container>
            <br />
        </Container>
    );
}

export default HoatdongSinhvien;
