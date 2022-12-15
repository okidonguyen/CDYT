import { bucket } from '../../cosmicjs';
import { useEffect, useState, memo } from 'react';
import { CardBody, CardImg, CardText, CardTitle, NavLink, Container, Row, Col } from 'reactstrap';
import './FeatureNews.scss';

function FeatureNews(args) {
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
                .props('slug,title,metadata')
                .limit(5);

            let posts = [];
            data.objects.map((post) =>
                posts.push({
                    src: post['metadata']['cover']['url'],
                    slug: post['slug'],
                    title: post['title'],
                    content: post['metadata']['shorttext'].substring(0, 130) + ' ...',
                    date: post['metadata']['ngaythang'],
                })
            );
            //console.log(items);
            setItems(posts);
        })();
    }, []);

    const featureNews = items.map((item, index) => {
        return (
            <NavLink
                key={index}
                href={item.slug}
                className="read-continue float-end "
                style={{ zIndex: '10' }}
            >
                <Row className="border-bottom" style={{ fontSize: 'small' }}>
                    <Col className="col-4 p-2">
                        <CardImg
                            alt="Card image cap"
                            src={item.src}
                            top
                            style={{ height: '100px', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col className="col-8 p-2">
                        <CardBody>
                            <CardTitle style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                                {item.title}
                            </CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>{item.content}</CardText>
                        </CardBody>
                    </Col>
                </Row>
            </NavLink>
        );
    });

    return <Container>{featureNews}</Container>;
}

export default memo(FeatureNews);
