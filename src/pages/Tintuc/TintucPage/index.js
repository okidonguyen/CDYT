import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { bucket } from '~/cosmicjs';
import FeatureNews from '~/components/FeatureNews';

function TintucPage() {
    let { slug } = useParams();
    const [contents, setContents] = useState();
    useEffect(() => {
        (async () => {
            const data = await bucket.objects
                .find({
                    type: 'trangchu-tintuc',
                    slug: slug,
                })
                .props('title,content');

            //console.log(data.objects[0]);
            setContents(data.objects[0]);
        })();
    }, []);
    return (
        <Container>
            <Row>
                <Col className="col-12 col-lg-7 text-justify">
                    {contents !== undefined ? (
                        <div>
                            <h2>{contents.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: contents.content }} />
                        </div>
                    ) : (
                        <></>
                    )}
                </Col>
                <Col className="col-12 col-lg-5">
                    <h4 className="border-bottom">TIN TỨC NỔI BẬT</h4>
                    <FeatureNews />
                </Col>
            </Row>
        </Container>
    );
}

export default TintucPage;
