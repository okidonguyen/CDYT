import { Col, Container, Row } from 'reactstrap';
import CompanyLink from '../../components/CompanyLink';
import Majors from '../../components/Majors';
import News from '../../components/News';
import Notification from '../../components/Notification';

function Home() {
    return (
        <Container fluid className="p-0">            
            <Container fluid="lg">
                <Row className='pt-3 pb-3'>
                    <Col className='col-12 col-lg-7 p-0'>
                        <News/>
                    </Col>
                    <Col className='col-12 col-lg-5 p-0'>
                        <Notification />
                    </Col>
                </Row>
            </Container>
            <Majors />
            <CompanyLink />
        </Container>
    );
}

export default Home;
