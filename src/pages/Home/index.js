import { Col, Container, Row } from 'reactstrap';
import CompanyLink from '~/components/CompanyLink';
import Majors from '~/components/Majors';
import News from '~/components/News';
import Notification from '~/components/Notification';
import { Slideshow } from '~/components';
import {items, footerItems} from "~/data";

function Home() {    
    return (
        <Container fluid className="p-0">            
            <Slideshow items={items} />            
            <Container fluid="lg">
                <Row className="pt-3 pb-3">
                    <Col className="col-12 col-lg-7 p-0">
                        <News />
                    </Col>
                    <Col className="col-12 col-lg-5 p-0">
                        <Notification />
                    </Col>
                </Row>
            </Container>
            <Majors />
            <Container className='d-none d-lg-block' style={{padding:"30px", textAlign:"center"}}>
            <h3 className='border-bottom'>HÌNH ẢNH HOẠT ĐỘNG</h3>
            </Container>
            <Container className='d-none d-lg-block'>            
                <Slideshow items={footerItems} />
            </Container>
            <CompanyLink />
        </Container>
    );
}

export default Home;
