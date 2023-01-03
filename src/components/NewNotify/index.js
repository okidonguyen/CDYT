import { bucket } from '../../cosmicjs';
import { useEffect, useState, memo } from 'react';
import HeadTittle from '~/components/HeadTittle';
import { CardBody, CardImg, CardText, CardTitle, Col, Container, NavLink, Row } from 'reactstrap';
import './NewNotify.scss';

function NewNotify({ numbers = 10 }) {
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
                    .props('title,content')
                    .limit(numbers);

                let posts = [];
                data.objects.map((post) =>
                    posts.push({
                        title: post['title'],
                        content: post['content'],
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
                <div key={index}>
                    <HeadTittle title={item.title} />
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    <hr />
                </div>
            ))}
        </>
    );
}

export default memo(NewNotify);
