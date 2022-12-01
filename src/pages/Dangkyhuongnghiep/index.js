import { Col, Container, Row } from 'reactstrap';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

function Dangkyhuongnghiep() {
    return (
        <Container fluid className="p-0">
            <Container fluid="lg">
                <br />
                <h1>ĐĂNG KÝ HƯỚNG NGHIỆP </h1>
                <p>
                    Bạn vui lòng điền đầy đủ thông tin cá nhân vào bảng đăng ký xét tuyển trực tuyến
                    bên cạnh để tư vấn viên của trường liên hệ với bạn giải đáp các thắc mắc hoàn
                    toàn miễn phí. Chúng tôi sẽ chủ động liên hệ lại với bạn trong vòng 24h kể từ
                    khi nhận được thông tin đăng ký. Lưu ý: Những mục đánh dấu (*) là thông tin bắt
                    buộc phải điền.
                </p>

                <div style={{border:"solid 1px #ddd", padding:"20px"}}>
                    <Form>
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
                            <Input placeholder='Nhập thời gian để tư vấn gọi điện'></Input>
                        </FormGroup>                    
                        <Button color="primary">GỬI ĐĂNG KÝ</Button>
                        <br/>
                    </Form>
                </div>
            </Container>
        </Container>
    );
}

export default Dangkyhuongnghiep;
