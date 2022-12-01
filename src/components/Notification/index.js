import { Col, Container, NavLink, Row } from 'reactstrap';
import './Notification.scss';
import { notifyData } from '~/data';

const Notification = () => {
    return (
        <Container className="notification" fluid>
            <div>
                <h3 className="border-bottom">THÔNG BÁO</h3>

                {notifyData.map((item, index) => (
                    <div key={index}>
                        <Row className="pt-2 pb-2">
                            <Col className="col-2">
                                <div className="dateTimeBox p-2 align-middle">{item.date}</div>
                            </Col>
                            <Col>
                                <NavLink className="" href={item.link}>
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
