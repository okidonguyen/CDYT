import {
    Card,
    CardBody,
    CardGroup,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    NavLink,
} from 'reactstrap';
import CompanyLink from '~/components/CompanyLink';
import { Slideshow } from '~/components';
import { footerItems } from '~/data';
import { SlideshowSettings as settings } from '~/data';
import { useState } from 'react';

function Tintuc() {
    const getAllPosts = () => {
        fetch(
            'https://api.cosmicjs.com/v2/buckets/cdyt-production/objects?pretty=true&query=%7B%22type%22%3A%22trangchu-tintuc%22%7D&read_key=rzSv8CHChQgYql0xsOZ1igGdXTntjzZZ66LscRJXOJM0uEwZWE&limit=20&props=slug,title,metadata,'
        )
            .then((res) => res.json())
            .then((result) => {
                setPosts(result);
            });
    };
    const [posts, setPosts] = useState(() => {
        const storageItems = getAllPosts();
        return storageItems ?? [{}];
    });

    return (
        <Container fluid className="p-3">
            <Container fluid="lg">
                {posts['objects'] !== undefined ? (
                    <CardGroup>
                        {posts['objects'].map((post, index) => (
                            <Col className="col-12 col-lg-4">
                                <Card key={index} className="my-2 p-3 m-3 border">
                                    <CardImg
                                        alt="Card image cap"
                                        src={post['metadata']['cover']['url']}
                                        top
                                        width="100%"
                                        height={"300px"}
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">{post.title.substring(0,50)}</CardTitle>
                                        <CardText
                                            style={{ minHeight: '130px', textAlign: 'justify' }}
                                        >
                                            {post['metadata']['shorttext'].substring(0,220)+" ..."}
                                        </CardText>
                                        <CardText className="p-0 m-0">
                                            <small className="text-muted">
                                                {post['metadata']['ngaythang']}
                                            </small>
                                        </CardText>
                                        <NavLink className="read-continue float-end p-2">
                                            Đọc tiếp
                                        </NavLink>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </CardGroup>
                ) : (
                    <div></div>
                )}
            </Container>
            <Container
                className="d-none d-lg-block"
                style={{ padding: '30px', textAlign: 'center' }}
            >
                <h3 className="border-bottom">HÌNH ẢNH HOẠT ĐỘNG</h3>
            </Container>
            <Container className="d-none d-lg-block">
                <Slideshow items={footerItems} settings={settings} />
            </Container>
            <CompanyLink />
        </Container>
    );
}

export default Tintuc;
