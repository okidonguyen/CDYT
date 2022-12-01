import { UncontrolledCarousel } from 'reactstrap';
import './Slideshow.scss';

const Slideshow = ({ items }) => {
    return (
        <UncontrolledCarousel
            className={'UncontrolledCarousel'}
            items={items}
            style={{ zIndex: '-1' }}
        />
    );
};

export default Slideshow;
