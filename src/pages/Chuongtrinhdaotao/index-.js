import React from 'react';
import HeadTittle from '~/components/HeadTittle';
import RunningText from '~/components/RunningText';
import FeatureNews from '~/components/FeatureNews';
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
    UncontrolledAccordion,
} from 'reactstrap';

function Nganhnghe(props) {
    const nganhnghedaotao = [
        {
            id: '1',
            title: ' Ngành Điều dưỡng',
            answer: 'Để động viên và khuyến khích tinh thần học tập của tân sinh viên, hằng năm Cao đẳng Y tế Đắk Lắk đều có học bổng dành cho tân sinh viên. Năm 2021, trường dành 10 suất học bổng 20 triệu đồng cho ngành Y khoa,15 triệu đồng cho ngành Dược học, 10 triệu đồng cho ngành Điều dưỡng và 10 triệu đồng cho ngành Y tế công cộng.',
        },
        {
            id: '2',
            title: ' Ngành Dược',
            answer: 'Làm việc tại hệ thống bệnh viện, trung tâm y tế. Dược sĩ lâm sàng chịu trách nhiệm cung ứng đảm bảo lượng thuốc về số lượng và chất lượng, cảnh bảo tương tác và hướng dẫn sử dụng thuốc… Làm việc tại những cơ sở sản xuất, công ty dược phẩm với nhiệm vụ nghiên cứu quy trình sản xuất, công thức, dạng bào chế, đảm bảo thuốc sản xuất ra đạt chết lượng..Bên cạnh đó, bạn cũng có thể làm việc tại Viện hay những Trung tâm kiểm nghiệm hay mở cơ sở kinh doanh dược phẩm như Nhà thuốc, Công ty phân phối hay Công ty nhập khẩu thuốc… Sinh viên cũng có thể làm việc tại những trường y dược, đảm nhận công tác giảng dạy hay kỹ thuật viên. Ngoài ra, bạn cũng có thể đảm nhận nhiều vị trí khác như nhân viên tư vấn dược phẩm, trình dược viên…',
        },
        {
            id: '3',
            title: ' Ngành Hộ Sinh',
            answer: 'Các bác sĩ đa khoa được đào tạo toàn diện; có nhiệm vụ khám chữa bệnh tại các sơ sở y tế, điều trị và hướng dẫn chăm sóc bệnh nhân tại nhà, thực hiện công tác phòng bệnh, giáo dục sức khỏe, tổ chức và quản lý các dịch vụ chăm sóc sức khỏe tại cộng đồng, tham gia công tác đào tạo và nghiên cứu khoa học…',
        },
        {
            id: '4',
            title: 'Ngành Vật lý trị liệu, phục hồi chức năng',
            answer: 'Để tăng khả năng trúng tuyển vào trường, thí sinh có thể đăng ký nhiều nguyện vọng để xét tuyển vào một trường. Tuy nhiên, phải lưu ý nên đặt tổ hợp gồm các môn thi mà thí sinh có ưu thế và ngành có nguyện vọng học ở thứ tự ưu tiên cao hơn.',
        },
    ];

    return (
        <div>
            <RunningText separator={'/'} />
            <Container className="col-lg-12 p-3">
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                        src={require('~/assets/images/banner/Photo-03.jpg')}
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
                <Row>
                    <Col>
                        <HeadTittle title="NGÀNH NGHỀ ĐÀO TẠO" />
                        <br />
                        <UncontrolledAccordion defaultOpen="1">
                            {nganhnghedaotao.map((ques, index) => (
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
                    <Col className="col-12 col-lg-4">
                        <HeadTittle title={'TIN TỨC NỔI BẬT'} />
                        <FeatureNews />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Nganhnghe;
