import {    
    Card,
    CardBody,    
    CardImg,    
    CardText,
    CardTitle,
    Container,
    NavLink,
} from 'reactstrap';
import Slider from 'react-slick';
import './News.scss';

const News = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Container fluid>
            <h3 className="border-bottom">TIN TỨC NỔI BẬT</h3>
            <Slider {...settings}>
                <Card className="my-2" >
                    <CardImg
                        alt="Card image cap"
                        src={require('~/assets/images/banner/banner-3.jpg')}
                        top
                        width="100%"
                        height={"320px"}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Trường Cao đẳng Y tế Đắk Lắk thông báo tuyển sinh năm 2022
                        </CardTitle>
                        <CardText style={{height:"80px", textAlign:"justify"}}>
                            Triển khai kế hoạch phát triển nhân lực Nhà trường năm học 2022 - 2023,
                            Trường cao Đẳng Y tế Đắk Lắk thông báo tuyển dụng nhân sự với các thông
                            tin sau.
                        </CardText>
                        <CardText className='p-0 m-0'>
                            <small className="text-muted">Ngày 1/7/22022</small>
                        </CardText>
                        <NavLink className="read-continue float-end p-2">Đọc tiếp</NavLink>
                    </CardBody>
                </Card>
                <Card className="my-2" >
                    <CardImg
                        alt="Card image cap"
                        src={require('~/assets/images/banner/banner-3.jpg')}
                        top
                        width="100%"
                        height={"320px"}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Hội diễn văn nghệ chào mừng ngày Nhà giáo Việt Nam 20/11
                        </CardTitle>
                        <CardText style={{height:"80px", textAlign:"justify"}}>
                            Tối ngày 16/11/2022 - tại hội trường A Trường Cao Đẳng Y tế Đắk Lắk Ban
                            chấp hành Đoàn trường cùng toàn bộ các chi đoàn của Trường Cao đẳng Y tế
                            Đắk Lắk đã tổ chức thành công buổi tổng duyệt văn nghệ chào mừng Ngày
                            nhà giáo Việt Nam 20/11.
                        </CardText>
                        <CardText className='p-0 m-0'>
                            <small className="text-muted">Ngày 1/7/22022</small>
                        </CardText>
                        <NavLink className="read-continue float-end p-2">Đọc tiếp</NavLink>
                    </CardBody>
                </Card>
            </Slider>
        </Container>
    );
};

export default News;
