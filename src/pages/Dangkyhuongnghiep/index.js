import {
    Col,
    Container,
    Row,
    Card,
    CardImgOverlay,
    CardText,
    CardTitle,
    CardImg,
    CardBody,
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ProvinceLists } from '~/components';
import { Slideshow } from '~/components';
import { SlideshowSettings as settings } from '~/data';
import { items } from '~/data';
import News from '~/components/News';
import Quotes from '../../components/Quotes';

function Dangkyhuongnghiep() {
    return (
        <Container fluid className="p-0">
            <Card inverse>
                <CardImg
                    className="rounded-0"
                    alt="Card image cap"
                    src={require('~/assets/images/banner/Photo-05.jpg')}
                    width="100%"
                />
                <CardImgOverlay className="text-center" style={{ paddingTop: '170px' }}>
                    <CardTitle tag="h1">TƯ VẤN HƯỚNG NGHIỆP</CardTitle>
                </CardImgOverlay>
            </Card>
            <Quotes
                title={'Bạn đang gặp các vấn đề chọn ngành, chọn nghề?'}
                content={
                    'Nhà trường luôn sẵn sàng đồng hành cùng bạn để giải quyết các băn khoăn, trăn trở liên quan đến định hướng và phát triển nghề nghiệp.'
                }
                icon={'bi bi-book'}
            />
            <Container className="text-center">
                <h3 className="border-bottom">Bạn nhận được những gì khi đăng ký hướng nghiệp?</h3>
                <Row>
                    <Col className="col-12 col-lg-4">
                        <Card className="m-2" color="danger" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-telephone-plus"></i>
                                </CardTitle>
                                <CardText tag={'h5'} style={{ height: '100px', padding: '20px' }}>
                                    Được tư vấn viên của nhà trường hướng dẫn lựa chọn đúng ngành
                                    nghề phù hợp
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <Card className="m-2" color="warning" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </CardTitle>
                                <CardText tag={'h5'} style={{ height: '100px', padding: '20px' }}>
                                    Biết được những ngành nghề đang phát triển và có cơ hội việc làm
                                    cao
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <Card className="m-2" color="info" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-upload"></i>
                                </CardTitle>
                                <CardText tag={'h5'} style={{ height: '100px', padding: '20px' }}>
                                    Hạn chế những sai xót trong quá trình đăng ký tuyển sinh online
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container
                fluid="lg"
                style={{
                    backgroundColor: '#b02225',
                    color: 'white',
                    padding: '50px',
                    marginTop: '30px',
                    marginBottom: '30px',
                }}
            >
                <Form>
                    <Row>
                        <Col md={6} className="d-flex flex-column justify-content-center">
                            <h3>ĐĂNG KÝ HƯỚNG NGHIỆP </h3>
                            <br />
                            <h4>
                                Nhập thông tin để tư vấn viên của trường liên hệ giải đáp các thắc
                                mắc hoàn toàn miễn phí. Chúng tôi sẽ chủ động liên hệ lại với bạn
                                trong vòng 24h kể từ khi nhận được thông tin đăng ký.
                            </h4>
                        </Col>
                        <Col md={6} className="border p-3">
                            <FormGroup>
                                <Label for="fullName">Họ và tên</Label>
                                <Input id="fullName" name="fullName" placeholder="nhập họ và tên" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phoneNumber">Số điện thoại</Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="nhập số điện thoại"
                                    type="number"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="student-address">Địa chỉ</Label>
                                <Input id="student-address" placeholder="Nhập thông tin" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="student-job">Thời gian tư vấn</Label>
                                <Input placeholder="Nhập thời gian để tư vấn gọi điện"></Input>
                            </FormGroup>
                            <Button color="primary">GỬI ĐĂNG KÝ</Button>
                        </Col>
                    </Row>

                    <br />
                </Form>
            </Container>
            {/* TIN TUC */}
            <Container fluid="lg">
                <h3 className="border-bottom">Tin tức hướng nghiệp</h3>
                <News numbers={3} />
            </Container>
        </Container>
    );
}

export default Dangkyhuongnghiep;
