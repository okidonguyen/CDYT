import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
} from 'reactstrap';
import './Majors.scss';

function Majors() {
    return (
        <Container fluid className='wrapper-majors'>
            <div style={{ padding: '30px' }} className="majors-container container-lg" >
                <Row className="p-0">
                    <Col className="p-0 col-sm-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0" style={{ color: 'black',height: 200 }}>
                            <br/>
                            <CardTitle tag="h5">NGÀNH ĐÀO TẠO</CardTitle>
                            <CardText>
                                Với triết lý đào tạo “Thực học – Thực nghiệp”, Trường hướng tới đào
                                tạo nguồn nhân lực chất lượng cao với phương pháp giảng dạy qua dự
                                án thật.
                            </CardText>
                        </Card>
                    </Col>
                    <Col className="p-0 col-sm-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src="https://picsum.photos/200/300?random=1"
                                style={{
                                    height: 200,
                                    color: 'white',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="p-0 col-sm-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src="https://picsum.photos/200/300?random=2"
                                style={{
                                    height: 200,
                                    color: 'white',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>                
                    <Col className="p-0 col-sm-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src="https://picsum.photos/200/300?random=3"
                                style={{
                                    height: 200,
                                    color: 'white',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="p-0 col-sm-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src="https://picsum.photos/200/300?random=4"
                                style={{
                                    height: 200,
                                    color: 'white',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="p-0 col-sm-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src="https://picsum.photos/200/300?random=5"
                                style={{
                                    height: 200,
                                    color: 'white',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Majors;
