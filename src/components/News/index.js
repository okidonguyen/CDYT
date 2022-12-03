import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card,
    CardBody,    
    CardImg,    
    CardText,
    CardTitle,    
    NavLink,
} from 'reactstrap';

const items = [
    {
        src: require('~/assets/images/banner/banner-3.jpg'),
        altText: 'Slide 2',
        caption: 'Slide 2',
        title: 'Trường Cao đẳng Y tế Đắk Lắk thông báo tuyển sinh năm 2022 1'
    },
    {
        src: require('~/assets/images/banner/banner-3.jpg'),
        altText: 'Slide 2',
        caption: 'Slide 2',
        title: 'Trường Cao đẳng Y tế Đắk Lắk thông báo tuyển sinh năm 2022 2'
    },
    {
        src: require('~/assets/images/banner/banner-3.jpg'),
        altText: 'Slide 3',
        caption: 'Slide 3',
        title: 'Trường Cao đẳng Y tế Đắk Lắk thông báo tuyển sinh năm 2022 3'
    },
];

function News(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <Card className="my-2">
                    <CardImg
                        alt="Card image cap"
                        src={item.src}
                        top
                        width="100%"
                        style={{ maxHeight: '350px' }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.title}
                        </CardTitle>
                        <CardText style={{ height: '80px', textAlign: 'justify' }}>
                            Triển khai kế hoạch phát triển nhân lực Nhà trường năm học 2022 - 2023,
                            Trường cao Đẳng Y tế Đắk Lắk thông báo tuyển dụng nhân sự với các thông
                            tin sau.
                        </CardText>
                        <CardText className="p-0 m-0">
                            <small className="text-muted">Ngày 1/7/22022</small>
                        </CardText>
                        <NavLink className="read-continue float-end p-2">Đọc tiếp</NavLink>
                    </CardBody>
                </Card>                
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default News;
