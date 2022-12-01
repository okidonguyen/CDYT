import Slider from 'react-slick';
import './Slideshow.scss';

// const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

const Slideshow = ({items, settings}) => {    
    return (
        <Slider {...settings}>
            {
                items.map((item, index)=>(
                    <img className='imgSlider' key={index} src={item.src} width="100vw" height={settings.height} style={{objectFit:"cover"}}/>
                ))
            }
        </Slider>
    );
};

export default Slideshow;
