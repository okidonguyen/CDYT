import React from 'react';
import HeadTittle from '~/components/HeadTittle';
import RunningText from '~/components/RunningText';
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    UncontrolledAccordion,
} from 'reactstrap';

function Hoidap(props) {
    const questions = [
        {
            id: '1',
            title: ' CÂU 1: Chính sách học bổng của trường như thế nào?',
            answer: 'Để động viên và khuyến khích tinh thần học tập của tân sinh viên, hằng năm Cao đẳng Y tế Đắk Lắk đều có học bổng dành cho tân sinh viên. Năm 2021, trường dành 10 suất học bổng 20 triệu đồng cho ngành Y khoa,15 triệu đồng cho ngành Dược học, 10 triệu đồng cho ngành Điều dưỡng và 10 triệu đồng cho ngành Y tế công cộng.',
        },
        {
            id: '2',
            title: ' CÂU 2: Cơ hội việc làm của ngành Dược sau khi tốt nghiệp như thế nào?',
            answer: 'Làm việc tại hệ thống bệnh viện, trung tâm y tế. Dược sĩ lâm sàng chịu trách nhiệm cung ứng đảm bảo lượng thuốc về số lượng và chất lượng, cảnh bảo tương tác và hướng dẫn sử dụng thuốc… Làm việc tại những cơ sở sản xuất, công ty dược phẩm với nhiệm vụ nghiên cứu quy trình sản xuất, công thức, dạng bào chế, đảm bảo thuốc sản xuất ra đạt chết lượng..Bên cạnh đó, bạn cũng có thể làm việc tại Viện hay những Trung tâm kiểm nghiệm hay mở cơ sở kinh doanh dược phẩm như Nhà thuốc, Công ty phân phối hay Công ty nhập khẩu thuốc… Sinh viên cũng có thể làm việc tại những trường y dược, đảm nhận công tác giảng dạy hay kỹ thuật viên. Ngoài ra, bạn cũng có thể đảm nhận nhiều vị trí khác như nhân viên tư vấn dược phẩm, trình dược viên…',
        },
        {
            id: '3',
            title: ' CÂU 3: Cơ hội việc làm của ngành Y khoa sau khi tốt nghiệp như thế nào?',
            answer: 'Các bác sĩ đa khoa được đào tạo toàn diện; có nhiệm vụ khám chữa bệnh tại các sơ sở y tế, điều trị và hướng dẫn chăm sóc bệnh nhân tại nhà, thực hiện công tác phòng bệnh, giáo dục sức khỏe, tổ chức và quản lý các dịch vụ chăm sóc sức khỏe tại cộng đồng, tham gia công tác đào tạo và nghiên cứu khoa học…',
        },
        {
            id: '4',
            title: ' CÂU 4: Em chuẩn bị tham gia kì thi THPT quốc gia để xét tuyển vào đại học, em có thể đăng kí xét tuyển vào cả 4 ngành của trường được không?',
            answer: 'Để tăng khả năng trúng tuyển vào trường, thí sinh có thể đăng ký nhiều nguyện vọng để xét tuyển vào một trường. Tuy nhiên, phải lưu ý nên đặt tổ hợp gồm các môn thi mà thí sinh có ưu thế và ngành có nguyện vọng học ở thứ tự ưu tiên cao hơn.',
        },
        {
            id: '5',
            title: ' CÂU 5: Năm nay có một số thay đổi, thời gian học rút ngắn, nội dung thi cũng khác. Như vậy điểm tuyển sinh của Cao đẳng Y tế Đắk Lắk có thay đổi gì không? Khung điểm tuyển sinh của các ngành học như thế nào?',
            answer: 'Điểm tuyển sinh của Cao đẳng Y tế Đắk Lắk cũng không thay đổi nhiều, vì sau khi có kết quả của điểm thi tốt nghiệp THPT năm 2021, Bộ GDĐT sẽ có quy định ngưỡng đảm bảo chất lượng đầu vào đối với phương thức xét điểm thi THPT nhóm ngành Sức khỏe và Giáo viên',
        },
        {
            id: '6',
            title: ' CÂU 6: Trường có xét học bạ không? Nếu có thì thời gian nhận xét tuyển từ khi nào và học sinh cần nộp những giấy tờ gì ?',
            answer: '- Nhà trường có sử dụng phương thức xét tuyển bằng học bạ THPT, là 1 trong các phương thức xét tuyển bằng học bạ THPT.- Thời gian xét tuyển: Tạo điều kiện cho thí sinh. Nhà trường chia thành nhiều đợt xét tuyển trong năm kéo dài từ tháng 20/02 đến cuối tháng 8 năm 2021 (06 đợt). - Về Hồ sơ thí sinh có thể liên hệ nộp trực tiếp tại Trường, gửi qua bưu điện hoặc nộp trực tuyến trên website tuyển sinh của Trường: tuyensinh.bmtu.edu.vn',
        },
        {
            id: '7',
            title: ' CÂU 7: Trường Cao đẳng y tế Đắk Lắk có xét tuyển học bạ ngành Y khoa không?',
            answer: 'Năm 2021, theo đề án tuyển sinh riêng của trường, trường có ưu tiên xét tuyển 5% chỉ tiêu ngành Y khoa cho thí sinh đạt học lực loại Giỏi năm lớp 12.',
        },
    ];

    return (
        <div>
            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/350?blur"
                    style={{
                        height: 350,
                    }}
                    width="100%"
                />
                <CardImgOverlay className="d-flex align-items-center justify-content-center">
                    <div style={{ backgroundColor: '#274c3575' }} className="p-3">
                        <CardTitle tag="h1">NHỮNG CÂU HỎI THƯỜNG GẶP</CardTitle>
                        <CardText tag={'h4'}>
                            Đây là những câu hỏi & trả lời được nhiều bạn thắc mắc nhất.
                        </CardText>
                    </div>
                </CardImgOverlay>
            </Card>
            <RunningText separator={'/'} />
            <Container className="col-lg-12 p-3">
                <Row>
                    <Col>
                        <HeadTittle title="Danh sách câu hỏi" />
                        <br />
                        <UncontrolledAccordion defaultOpen="1">
                            {questions.map((ques, index) => (
                                <AccordionItem key={index}>
                                    <AccordionHeader targetId={ques.id}>
                                        <strong>{ques.title}</strong>
                                    </AccordionHeader>
                                    <AccordionBody accordionId={ques.id}>
                                        {ques.answer}
                                    </AccordionBody>
                                </AccordionItem>
                            ))}
                        </UncontrolledAccordion>
                        <br />
                    </Col>
                    <Col
                        className="col-12 col-lg-4 border rounded-3"
                        style={{ backgroundColor: '#c1bdbd' }}
                    >
                        <Form>
                            <HeadTittle title="Đặt câu hỏi" />
                            <br />
                            <FormGroup>
                                <Label for="exampleName">Nhập họ & tên:</Label>
                                <Input
                                    id="exampleName"
                                    name="text"
                                    type="text"
                                    placeholder="Nhập họ tên ..."
                                />
                                <Label for="exampleEmail">Email của bạn:</Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    type="email"
                                    placeholder="Nhập email ..."
                                />
                                <Label for="sodienthoai">Số điện thoại của bạn:</Label>
                                <Input
                                    id="sodienthoai"
                                    name="sodienthoai"
                                    type="number"
                                    placeholder="Nhập số điện thoại ..."
                                />
                                <Label for="exampleText">Nhập câu hỏi:</Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                    placeholder="Nhập câu hỏi"
                                />
                            </FormGroup>
                            <Button className="w-100">Gửi câu hỏi</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hoidap;
