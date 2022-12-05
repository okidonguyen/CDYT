import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { bucket } from '~/cosmicjs';
import FeatureNews from '~/components/FeatureNews';
import Breadcrumbs from '~/components/Breadcrumbs';
import Majors from '~/components/Majors';

function TintucPage() {
    let { slug } = useParams();
    const [contents, setContents] = useState();
    let breadcrumbItems = [
        {
            name: 'Trang chủ',
            href: '/',
        },
        {
            name: 'Tin tức',
            href: '/tintuc',
        },
    ];

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
            <Breadcrumbs items={breadcrumbItems} />
            <Row>
                <Col className="col-12 col-lg-7 text-justify">
                    {contents !== undefined ? (
                        <div>
                            <h1>{contents.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: contents.content }} />
                        </div>
                    ) : (
                        <></>
                    )}
                </Col>
                <Col className="col-12 col-lg-5">
                    <FeatureNews />
                </Col>
            </Row>
        </Container>
    );
}

export default TintucPage;
