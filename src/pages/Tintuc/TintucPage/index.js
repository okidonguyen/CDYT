import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import { bucket } from '~/cosmicjs';

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
            {contents !== undefined ? (
                <div>
                    <h1>{contents.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: contents.content }} />
                </div>
            ) : (
                <></>
            )}
        </Container>
    );
}

export default TintucPage;
