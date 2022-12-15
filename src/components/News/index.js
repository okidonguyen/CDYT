import { bucket } from '../../cosmicjs';
import { useEffect, useState, memo } from 'react';
import { CardBody, CardImg, CardText, CardTitle, Col, NavLink, Row } from 'reactstrap';
import './News.scss';

function News({ numbers = 10, category = 'dangdoanthe' }) {
    const [items, setItems] = useState(() => {
        return [{}];
    });

    useEffect(() => {
        (async () => {
            try {
                const data = await bucket.objects
                    .find({
                        type: 'trangchu-tintuc',
                        'metadata.nhom_bai_viet': category,
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
            } catch (error) {
                setItems([{}]);
            }
        })();
    }, []);
    console.log(items);
    return (
        <>
            {items.map((item, index) => (
                <Row key={index} className="col-12 pt-3">
                    <Col className="col-4">
                        <CardImg
                            alt="Card image cap"
                            src={item.src}
                            style={{
                                height: '130px',
                                objectFit: 'cover',
                            }}
                        />
                    </Col>
                    <Col className="col-8">
                        <NavLink href={'/tintucchitiet/' + item.slug}>
                            <CardBody>
                                <CardTitle tag="h5" className="pb-1">
                                    {item.title}
                                </CardTitle>
                                <CardText style={{ textAlign: 'justify' }}>{item.content}</CardText>
                            </CardBody>
                        </NavLink>
                    </Col>
                </Row>
            ))}
        </>
    );
}

export default memo(News);
