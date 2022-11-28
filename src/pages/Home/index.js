import { Col, Container, Row } from 'reactstrap';
import CompanyLink from '../../components/CompanyLink';
import Majors from '../../components/Majors';
import News from '../../components/News';
import Notification from '../../components/Notification';

function Home() {
    return (
        <Container fluid className="p-0">            
            <Container fluid="lg">
                <Row>
                    <Col className='col-lg-7'>
                        <News/>
                    </Col>
                    <Col className='col-lg-5'>
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
