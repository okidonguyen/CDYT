import { bucket } from '../../cosmicjs';
import { useEffect, useState, memo } from 'react';
import {
    Card,
    CardBody,
    CardGroup,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container,
    NavLink,
} from 'reactstrap';
import './News.scss';

function News({ numbers = 10 }) {
    const [items, setItems] = useState(() => {
        return [{}];
    });

    useEffect(() => {
        (async () => {
            const data = await bucket.objects
                .find({
                    type: 'trangchu-tintuc',
                })
                .props('slug,title,metadata')
                .limit(numbers);

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
            setItems(posts);
        })();
    }, []);

    return (
        <CardGroup>
            {items.map((item, index) => (
                <Col key={index} className="col-12 col-lg-4 p-0">
                    <Card className="my-2 p-2 m-2 border">
                        <CardImg
                            alt="Card image cap"
                            src={item.src}
                            top
                            width="100%"
                            style={{
                                height: '200px',
                                objectFit: 'cover',
                            }}
                        />
                        <CardBody>
                            <CardTitle
                                tag="h5"
                                style={{
                                    height: '80px',
                                }}
                            >
                                {item.title}
                            </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                {item.date}
                            </CardSubtitle>
                            <CardText style={{ minHeight: '100px', textAlign: 'justify' }}>
                                {item.content}
                            </CardText>
                            <NavLink
                                href={'tintuc/' + item.slug}
                                className="read-continue float-end p-0 "
                            >
                                Đọc tiếp
                            </NavLink>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </CardGroup>
    );
}

export default memo(News);
