import { Container } from 'reactstrap';
import HeadTittle from '~/components/HeadTittle';

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
        <Container
            className="d-none d-lg-block"
            style={{ padding: '30px 0px', textAlign: 'center' }}
        >
            <div>
                <HeadTittle title={'ĐỐI TÁC LIÊN KẾT'} />
                {imgLink.map((image, index) => (
                    <img
                        alt=""
                        key={index}
                        src={image}
                        height="120px"
                        style={{ padding: '10px' }}
                    />
                ))}
            </div>
        </Container>
    );
};

export default CompanyLink;
