import { Col, Container, NavLink, Row } from 'reactstrap';
import { bucket } from '~/cosmicjs';
import HeadTittle from '~/components/HeadTittle';
import './Notification.scss';
import { useEffect, useState } from 'react';

const Notification = () => {
    const [items, setItems] = useState(() => {
        return [{}];
    });

    useEffect(() => {
        (async () => {
            try {
                const data = await bucket.objects
                    .find({
                        type: 'thongbao',
                    })
                    .props('slug,title,metadata')
                    .limit(7);

                let posts = [];
                data.objects.map((post) =>
                    posts.push({
                        slug: `/thongbao/${post['slug']}`,
                        title: post['title'].substring(0, 100),
                        date: post['metadata']['ngay_thang'],
                    })
                );
                setItems(posts);
            } catch (error) {
                setItems([{}]);
            }
        })();
    }, []);
    return (
        <Container className="notificationNews border rounded-3" fluid>
            <div>
                <HeadTittle title={'Thông báo'} />
                {items.map((item, index) => (
                    <div key={index}>
                        <Row className="pt-1 pb-1">
                            <Col className="d-flex">
                                <div
                                    style={{ width: '70px' }}
                                    className="dateTimeBox p-2 align-middle"
                                >
                                    {item.date}
                                </div>
                                <NavLink
                                    className="border-bottom"
                                    style={{ width: '100%' }}
                                    href={item.slug}
                                >
                                    {item.title}
                                </NavLink>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Notification;
