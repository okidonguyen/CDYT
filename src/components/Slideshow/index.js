import Slider from 'react-slick';
import './Slideshow.scss';

const Slideshow = ({ items, settings }) => {
    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <img alt="" className="imgSlider" key={index} src={item.src} width="100%" />
            ))}
        </Slider>
    );
};

export default Slideshow;
