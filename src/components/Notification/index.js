import { Col, Container, NavLink, Row } from 'reactstrap';
import './Notification.scss';
import { notifyData } from '~/data';

const Notification = () => {
    return (
        <Container className="notification border rounded-3" fluid>
            <div>
                <h3
                    className="border-bottom"
                    style={{
                        height: '52px',
                        background: `url(${require('~/assets/images/bg_title.png')}) no-repeat top right`,                        
                        borderTop: `4px solid var(--primary)`,
                        lineHeight:"52px",
                        color:"var(--primary)",
                        fontWeight: 600
                    }}
                >
                    THÔNG BÁO
                </h3>
                {notifyData.map((item, index) => (
                    <div key={index}>
                        <Row className="pt-2 pb-2">
                            <Col className="d-flex">
                                <div
                                    style={{ width: '60px' }}
                                    className="dateTimeBox p-2 align-middle"
                                >
                                    {item.date}
                                </div>
                                <NavLink className="" style={{ width: '100%' }} href={item.link}>
                                    {item.title}
                                </NavLink>
                            </Col>
                        </Row>
                        <div className="border-bottom"></div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Notification;
