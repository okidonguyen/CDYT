import { Col, Container, Row } from 'reactstrap';
import FeatureNews from '~/components/FeatureNews';
import HeadTittle from '~/components/HeadTittle';
import { useParams } from 'react-router-dom';
import NewNotify from '../../components/NewNotify';

function Thongbao() {
    return (
        <Container fluid className="p-0">
            <Row className="pt-2 border-bottom">
                <Col className="col-12 col-lg-8">
                    <NewNotify />
                </Col>
                <Col className="col-12 col-lg-4">
                    <HeadTittle title={'TIN TỨC NỔI BẬT'} />
                    <FeatureNews />
                </Col>
            </Row>
        </Container>
    );
}

export default Thongbao;
