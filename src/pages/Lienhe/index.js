import { CardImg, Col, Container, Row } from 'reactstrap';
import RunningText from '~/components/RunningText';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import HeadTittle from '~/components/HeadTittle';

function Lienhe() {
    return (
        <Container fluid className="p-0">
            <RunningText separator={'/'} />
            <Container fluid="lg">
                <HeadTittle title="NHẬP THÔNG TIN LIÊN HỆ" />
                <p>
                    Bạn vui lòng điền đầy đủ thông tin cá nhân và chọn Khoa, phòng ban liên hệ công
                    tác. Chúng tôi sẽ liên hệ lại bạn trong thời gian ngắn nhất.
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
                                            placeholder="Nhập họ và tên"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="phoneNumber">Số điện thoại</Label>
                                        <Input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="Nhập số điện thoại"
                                            type="number"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="student-email">Email</Label>
                                <Input id="student-email" placeholder="Nhập thông tin" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="student-job">Đơn vị liên hệ công tác</Label>
                                <Input type="select">
                                    <option>Phòng Tổ chức - Hành chính</option>
                                    <option>
                                        Phòng Đào tạo - Nghiên cứu khoa học và Hợp tác quốc tế
                                    </option>
                                    <option>Phòng Tài chính - Kế toán</option>
                                    <option>Phòng Công tác học sinh, sinh viên</option>
                                    <option>Phòng Khảo thí và Kiểm định chất lượng</option>
                                    <option>Khoa Khoa học cơ bản</option>
                                    <option>Khoa Y</option>
                                    <option>Khoa Điều dưỡng - Kỹ thuật y học</option>
                                    <option>Khoa Dược</option>
                                </Input>
                            </FormGroup>
                            <Button color="danger" className="w-100">
                                Gửi thông tin
                            </Button>
                        </Form>
                        <br />
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <CardImg src={require('~/assets/images/hoatdong/10.jpg')} alt="SINH VIEN" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Lienhe;
