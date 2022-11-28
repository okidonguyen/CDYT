import {
    UncontrolledCarousel,
} from 'reactstrap';
import './Slideshow.scss';

const Slideshow = () => {
    return (
        <UncontrolledCarousel
            className={'UncontrolledCarousel'}
            items={[
                {
                    altText: '',
                    caption: '',
                    key: 1,
                    src: (require('~/assets/images/banner/banner-1.jpg')),
                },
                {
                    altText: '',
                    caption: '',
                    key: 2,
                    src: (require('~/assets/images/banner/banner-2.jpg')),
                },
                {
                    altText: '',
                    caption: '',
                    key: 3,
                    src: (require('~/assets/images/banner/banner-3.jpg')),
                },
            ]}
            style={{ zIndex: '-1' }}
        />
    );
};

export default Slideshow;
