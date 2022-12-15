import { Container } from 'reactstrap';
import HeadTittle from '~/components/HeadTittle';

function Quotes({ title, content, icon }) {
    return (
        <Container className="text-center pt-5 pb-5">
            <HeadTittle title={title} />
            <div style={{ color: 'var(--secondary)' }}>
                <i className={icon} style={{ fontSize: '6rem' }}></i>
                <h3>
                    <i className="bi bi-quote"></i>
                    {content}
                </h3>
            </div>
        </Container>
    );
}

export default Quotes;
