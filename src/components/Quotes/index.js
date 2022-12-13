import { Container } from 'reactstrap';

function Quotes({ title, content, icon }) {
    return (
        <Container fluid className="text-center p-0">
            <div
                style={{
                    padding: '80px',
                }}
            >
                <h3 className="border-bottom">{title}</h3>
                <div style={{ color: 'var(--secondary)' }}>
                    <i className={icon} style={{ fontSize: '6rem' }}></i>
                    <h3>
                        <i className="bi bi-quote"></i>
                        {content}
                    </h3>
                </div>
            </div>
        </Container>
    );
}

export default Quotes;
