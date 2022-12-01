import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container } from 'reactstrap';
import { useState } from 'react';

function TintucApi() {
    const Cosmic = require('cosmicjs');
    const api = Cosmic();
    const bucket = api.bucket({
        slug: 'cdyt-production',
        read_key: 'rzSv8CHChQgYql0xsOZ1igGdXTntjzZZ66LscRJXOJM0uEwZWE',
    });

    const getAllPosts = async () => {
        const data = await bucket.objects
            .find({
                type: 'trangchu-tintuc',
            })
            .props('slug,title,metadata');
        setPosts(data.objects);
    };

    const [posts, setPosts] = useState(() => {
        const storageItems = getAllPosts();
        return storageItems ?? [{}];
    });

    console.log(posts.length);

    return (
        <div>
            <h1>okido</h1>
            {posts.length > 0 ? (
                <Container>
                    {posts.map((post, index) => (
                        <Card key={index} className="p-2">
                            <CardImg
                                alt="Card image cap"
                                src={post['metadata']['cover']['url']}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">{post.title}</CardTitle>
                                <CardText>{post['metadata']['shorttext']}</CardText>
                                <Button>Xem tiếp</Button>
                            </CardBody>
                        </Card>
                    ))}
                </Container>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default TintucApi;
