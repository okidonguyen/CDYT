import { Col, Container, Row } from 'reactstrap';
import News from '~/components/News';
import Notification from '~/components/Notification';
import HeadTittle from '~/components/HeadTittle';
import { useParams } from 'react-router-dom';

function Thongbao() {
    let { slug } = useParams();
    let headerTitle = '';
    return (
        <Container fluid className="p-0">
            <Row className="pt-2 border-bottom">
                <Col className="col-12 col-lg-8">
                    <HeadTittle title={headerTitle} />
                    <News category={slug} />
                </Col>
                <Col className="col-12 col-lg-4">
                    <HeadTittle title={'THÔNG BÁO'} />
                    <Notification />
                </Col>
            </Row>
        </Container>
    );
}

export default Thongbao;
