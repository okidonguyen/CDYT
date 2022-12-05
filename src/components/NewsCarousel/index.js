import { bucket } from '../../cosmicjs';
import { useEffect, useState, memo } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    NavLink,
} from 'reactstrap';
import './NewsCarousel.scss';

function NewsCarousel(args) {
    const [items, setItems] = useState(() => {
        return [{}];
    });

    useEffect(() => {
        (async () => {
            console.log('katub');
            const data = await bucket.objects
                .find({
                    type: 'trangchu-tintuc',
                    'metadata.bai_viet_noi_bat': true,
                })
                .props('slug,title,metadata');

            let posts = [];
            data.objects.map((post) =>
                posts.push({
                    src: post['metadata']['cover']['url'],
                    slug: post['slug'],
                    title: post['title'],
                    content: post['metadata']['shorttext'].substring(0, 180) + ' ...',
                    date: post['metadata']['ngaythang'],
                })
            );
            //console.log(items);
            setItems(posts);
        })();
    }, []);

    // return <h1>slide</h1>;

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
                        style={{ height: '350px', objectFit: 'cover' }}
                    />
                    <CardBody>
                        <CardTitle style={{ height: '50px', textAlign: 'justify' }} tag="h5">
                            {item.title}
                        </CardTitle>
                        <CardText style={{ height: '80px', textAlign: 'justify' }}>
                            {item.content}
                        </CardText>
                        <CardText className="p-0 m-0">
                            <small className="text-muted">{item.date}</small>
                        </CardText>
                        <NavLink
                            href={`tintuc/` + item.slug}
                            className="read-continue float-end p-2 "
                            style={{ zIndex: '10' }}
                        >
                            Đọc tiếp
                        </NavLink>
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
            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
        </Carousel>
    );
}

export default memo(NewsCarousel);
