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
                    content: post['metadata']['shorttext'],
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
                <NavLink
                            href={`tintuc/` + item.slug}
                            className="read-continue float-end p-2 "
                            style={{ zIndex: '10' }}
                        >
                <Card className="p-0 m-0 rounded-0">
                    <CardImg
                        alt="Card image cap"
                        src={item.src}
                        top
                        style={{ height: '350px', objectFit: 'cover', borderRadius: '0px' }}
                    />
                    <CardBody>
                        <CardTitle style={{ textAlign: 'justify' }} tag="h5">
                            {item.title}
                        </CardTitle>
                        <CardText style={{minHeight: '100px', textAlign: 'justify', paddingBottom:"10px" }}>
                            {item.content}
                        </CardText>                        
                    </CardBody>
                </Card>
                </NavLink>
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
            
            {slides}

            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                style={{display:"none"}}
            />
            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
        </Carousel>
    );
}

export default memo(NewsCarousel);
