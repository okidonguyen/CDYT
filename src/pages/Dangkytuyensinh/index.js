import {
    Card,
    CardBody,
    CardGroup,
    CardText,
    CardTitle,
    CardImg,
    Col,
    Container,
    Row,
    CardImgOverlay,
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import News from '~/components/News';
import { Slideshow } from '~/components';
import { SlideshowSettings as settings } from '~/data';
import { items } from '~/data';

function Dangkytuyensinh() {
    return (
        <Container fluid className="p-0">
            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/350?blur"
                    style={{
                        height: 350,
                    }}
                    width="100%"
                />
                <CardImgOverlay className="text-center p-5">
                    <CardTitle tag="h1" style={{ paddingTop: '70px' }}>
                        TRANG TUYỂN SINH
                    </CardTitle>
                    <CardText tag={'h4'}>Điền đầy đủ thông tin để được tư vấn tuyển sinh</CardText>
                </CardImgOverlay>
            </Card>
            <Container className="p-4  text-center">
                <h3 className="border-bottom">BẠN NÊN CHỌN HỌC TẠI TRƯỜNG VÌ</h3>
                <Row>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="success" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-heart"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>Đội ngũ cán bộ, giảng viên tận tâm</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="warning" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>Sinh viên được phát triển toàn diện</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="danger" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-telephone-plus"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>Được tư vấn hướng nghiệp khi đăng ký</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="info" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-upload"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>
                                    Được giới thiệu việc làm khi ra trường
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid="lg">
                <br />
                <h1>ĐĂNG KÝ TUYỂN SINH </h1>
                <p>
                    Bạn vui lòng điền đầy đủ thông tin cá nhân vào bảng đăng ký xét tuyển trực tuyến
                    bên cạnh để tư vấn viên của trường liên hệ với bạn giải đáp các thắc mắc hoàn
                    toàn miễn phí. Chúng tôi sẽ chủ động liên hệ lại với bạn trong vòng 24h kể từ
                    khi nhận được thông tin đăng ký.
                </p>
                <Row>
                    <Col className="col-12 col-lg-8">
                        <Form style={{ border: 'solid 1px #ddd', padding: '20px' }}>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="fullName">Họ và tên</Label>
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            placeholder="nhập họ và tên"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="phoneNumber">Số điện thoại</Label>
                                        <Input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="nhập số điện thoại"
                                            type="number"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="student-address">Địa chỉ</Label>
                                <Input id="student-address" placeholder="Nhập thông tin" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="student-email">Email</Label>
                                <Input id="student-email" placeholder="Nhập thông tin" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="student-job">Ngành học</Label>
                                <Input type="select">
                                    <option>Chọn ngành học</option>
                                    <option>Khoa y học lâm sàn</option>
                                    <option>Khoa y tế cộng đồng</option>
                                    <option>Khoa điều dưỡng</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="student-job">Thời gian tư vấn</Label>
                                <Input id="exampleSelect" name="select" type="select">
                                    <option value="0">
                                        Thời gian tư vấn từ thứ 2 đến chủ nhật
                                    </option>
                                    <option value="12"> 04:00 PM - 05:00 PM</option>
                                    <option value="11"> 03:00 PM - 04:00 PM</option>
                                    <option value="10"> 02:00 PM - 03:00 PM</option>
                                    <option value="9"> 01:00 PM - 02:00 PM</option>
                                    <option value="8"> 11:00 AM - 12:00 AM</option>
                                    <option value="7"> 10:00 AM - 11:00 AM</option>
                                    <option value="6"> 09:00 AM - 10:00 AM</option>
                                    <option value="5"> 08:00 AM - 09:00 AM</option>
                                </Input>
                            </FormGroup>
                            <Button color="danger" className="w-100">
                                ĐĂNG KÝ NGAY
                            </Button>
                        </Form>
                        <br />
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <CardImg src={require('~/assets/images/hoatdong/10.jpg')} alt="SINH VIEN" />
                    </Col>
                </Row>

                {/* TIN TUC */}
                <Container fluid="lg">
                    <h3 className="border-bottom">Tin tức tuyển sinh</h3>
                    <News numbers={3} />
                </Container>
            </Container>
        </Container>
    );
}

export default Dangkytuyensinh;
