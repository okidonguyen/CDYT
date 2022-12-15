import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { bucket } from '~/cosmicjs';
import HeadTittle from '~/components/HeadTittle';
import Notification from '~/components/Notification';

function Thongbaochitiet() {
    let { slug } = useParams();
    const [contents, setContents] = useState();
    useEffect(() => {
        (async () => {
            const data = await bucket.objects
                .find({
                    type: 'thongbao',
                    slug: slug,
                })
                .props('title,content');

            //console.log(data.objects[0]);
            setContents(data.objects[0]);
        })();
    }, []);
    return (
        <Container fluid className="pt-3">
            <Row>
                <Col className="col-12 col-lg-8 text-justify">
                    {contents !== undefined ? (
                        <div>
                            <HeadTittle title={'NỘI DUNG THÔNG BÁO'} />
                            <div dangerouslySetInnerHTML={{ __html: contents.content }} />
                        </div>
                    ) : (
                        <></>
                    )}
                </Col>
                <Col className="col-12 col-lg-4">
                    <Notification />
                </Col>
            </Row>
        </Container>
    );
}

export default Thongbaochitiet;
