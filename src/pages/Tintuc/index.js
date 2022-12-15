import { Col, Container, Row } from 'reactstrap';
import News from '~/components/News';
import FeatureNews from '~/components/FeatureNews';
import HeadTittle from '~/components/HeadTittle';
import { useParams } from 'react-router-dom';

function Tintuc() {
    let { slug } = useParams();
    let headerTitle = '';
    switch (slug) {
        case 'hoatdongchuyenmon':
            headerTitle = 'TIN TỨC HOẠT ĐỘNG CHUYÊN MÔN';
            break;
        case 'thivatuyensinh':
            headerTitle = 'TIN TỨC THI VÀ TUYỂN SINH';
            break;
        case 'hoatdongkhac':
            headerTitle = 'TIN TỨC HOẠT ĐỘNG KHÁC';
            break;
        default:
            headerTitle = 'TIN TỨC ĐẢNG - ĐOÀN THỂ';
            break;
    }

    return (
        <Container fluid className="p-0">
            <Row className="pt-2 border-bottom">
                <Col className="col-12 col-lg-8">
                    <HeadTittle title={headerTitle} />
                    <News category={slug} />
                </Col>
                <Col className="col-12 col-lg-4">
                    <HeadTittle title={'TIN TỨC NỔI BẬT'} />
                    <FeatureNews />
                </Col>
            </Row>
        </Container>
    );
}

export default Tintuc;
