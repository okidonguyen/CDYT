import { Container } from 'reactstrap';

const imgLink = [
    require('~/assets/images/brands/link-01.png'),
    require('~/assets/images/brands/link-02.png'),
    require('~/assets/images/brands/link-03.png'),
    require('~/assets/images/brands/link-04.png'),
    require('~/assets/images/brands/link-05.png'),
    require('~/assets/images/brands/link-06.jpg'),
];

const CompanyLink = () => {
    return (
        <Container style={{padding:"30px"}}>
            <div>
                <h3 className='border-bottom'>ĐỐI TÁC LIÊN KẾT</h3>
                {imgLink.map((image, index) => (
                    <img key={index} src={image} height="120px" style={{ padding: '10px' }} />
                ))}
            </div>
        </Container>
    );
};

export default CompanyLink;
