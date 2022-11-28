import { Card, CardBody, CardImg, CardText, CardTitle, Container, List, NavLink } from 'reactstrap';

const News = () => {
    return (
        <Container fluid style={{ paddingTop: '30px' }}>
            <h3 className='border-bottom'>TIN TỨC NỔI BẬT</h3>
            <Card className="my-2">
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/180"
                    style={{
                        height: 180,
                    }}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">Trường Cao đẳng Y tế Đắk Lắk thông báo tuyển sinh năm 2022</CardTitle>
                    <CardText>
                    Triển khai kế hoạch phát triển nhân lực Nhà trường năm học 2022 - 2023, Trường cao Đẳng Y tế Đắk Lắk thông báo tuyển dụng nhân sự với các thông tin sau.
                    </CardText>
                    <CardText>
                        <small className="text-muted">Ngày 1/7/22022</small>
                    </CardText>
                    <NavLink>Đọc tiếp</NavLink>
                </CardBody>
            </Card>
        </Container>
    );
};

export default News;
