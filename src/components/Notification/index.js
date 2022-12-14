import { Col, Container, NavLink, Row } from 'reactstrap';
import './Notification.scss';
import { notifyData } from '~/data';
import HeadTittle from '~/components/HeadTittle';

const Notification = () => {
    return (
        <Container className="notification border rounded-3" fluid>
            <div>
                <HeadTittle title={'Thông báo'} />
                {notifyData.map((item, index) => (
                    <div key={index}>
                        <Row className="pt-1 pb-1">
                            <Col className="d-flex">
                                <div
                                    style={{ width: '70px' }}
                                    className="dateTimeBox p-2 align-middle"
                                >
                                    {item.date}
                                </div>
                                <NavLink
                                    className="border-bottom"
                                    style={{ width: '100%' }}
                                    href={item.link}
                                >
                                    {item.title.substring(0, 110)}
                                </NavLink>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Notification;
