import {
    Col,
    Container,
    Row,
    Card,
    CardText,
    CardTitle,
    CardBody,
    Alert,
    Spinner,
} from 'reactstrap';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import News from '~/components/News';
import HeadTittle from '~/components/HeadTittle';
import Quotes from '~/components/Quotes';
import RunningText from '~/components/RunningText';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { Provinces, Districts, Wards } from '~/data/provinces';

import axios from 'axios';
import authHeader from '~/services/auth-header';
const API_URL = 'http://localhost:3001/api/';

function Huongnghiep() {
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        setLoadingBtn(true);
        try {
            axios
                .post(
                    API_URL + 'advise/',
                    data,
                    { validateStatus: false },
                    { headers: authHeader() }
                )
                .then((res) => {
                    showError(res);
                    e.target.reset();
                    reset();
                })
                .finally(() => setLoadingBtn(false));
        } catch (error) {
            console.log(error);
        }
    };

    // Show error after response
    const showError = (res) => {
        if (res.status === 404 || res.status === 401) {
            NotificationManager.error(res.data.message);
        }

        if (res.status === 200) {
            NotificationManager.success(res.data.message);
        }
    };

    // API GET TINH THANH PHO HUYEN XA
    const [tinh, setTinh] = useState(() => {
        return {
            isLoaded: false,
            items: [],
            choosenCode: 0,
        };
    });

    const onTinhChange = (e) => {
        tinh.choosenCode = e.target.value.split('$')[0];
        if (tinh.choosenCode !== 0) {
            setQuanHuyen({
                items: Districts.filter((p) => p.province_code == tinh.choosenCode),
                isLoaded: true,
                choosenCode: 0,
            });

            setXaphuong({
                isLoaded: false,
                items: [],
                choosenCode: 0,
            });
        }
    };

    const [quanHuyen, setQuanHuyen] = useState(() => {
        return {
            isLoaded: false,
            items: [],
            choosenCode: 0,
        };
    });

    const onquanHuyenChange = (e) => {
        quanHuyen.choosenCode = e.target.value.split('$')[0];
        if (quanHuyen.choosenCode !== 0) {
            setXaphuong({
                items: Wards.filter((p) => p.district_code == quanHuyen.choosenCode),
                isLoaded: true,
                choosenCode: 0,
            });
        }
    };

    const [xaPhuong, setXaphuong] = useState(() => {
        return {
            isLoaded: false,
            items: [],
            choosenCode: 0,
        };
    });

    useEffect(() => {
        setTinh({
            items: Provinces,
            isLoaded: true,
            choosenCode: 0,
        });
    }, []);

    return (
        <Container fluid className="p-0">
            <RunningText separator={'/'} />
            <Quotes
                title={'TRANG TƯ VẤN HƯỚNG NGHIỆP'}
                content={
                    'Nhà trường luôn sẵn sàng đồng hành cùng bạn để giải quyết các băn khoăn, trăn trở liên quan đến định hướng và phát triển nghề nghiệp.'
                }
                icon={'bi bi-book'}
            />
            <Container className="text-center">
                <HeadTittle title={'Bạn nhận được những gì khi đăng ký hướng nghiệp?'} />
                <Row>
                    <Col className="col-12 col-lg-4">
                        <Card className="m-2" color="danger" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-telephone-plus"></i>
                                </CardTitle>
                                <CardText tag={'h5'} style={{ height: '100px', padding: '20px' }}>
                                    Được tư vấn viên của nhà trường hướng dẫn lựa chọn đúng ngành
                                    nghề phù hợp
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <Card className="m-2" color="warning" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </CardTitle>
                                <CardText tag={'h5'} style={{ height: '100px', padding: '20px' }}>
                                    Biết được những ngành nghề đang phát triển và có cơ hội việc làm
                                    cao
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <Card className="m-2" color="info" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-upload"></i>
                                </CardTitle>
                                <CardText tag={'h5'} style={{ height: '100px', padding: '20px' }}>
                                    Hạn chế những sai sót trong quá trình đăng ký tuyển sinh online
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container
                fluid="lg"
                style={{
                    backgroundColor: 'rgb(114 14 16)',
                    color: 'white',
                    padding: '50px',
                    marginTop: '30px',
                    marginBottom: '30px',
                }}
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6} className="d-flex flex-column justify-content-center">
                            <HeadTittle title={'ĐĂNG KÝ HƯỚNG NGHIỆP'} color={'white'} />
                            <br />
                            <h4>
                                Nhập thông tin để tư vấn viên của trường liên hệ giải đáp các thắc
                                mắc hoàn toàn miễn phí. Chúng tôi sẽ chủ động liên hệ lại với bạn
                                trong vòng 24h kể từ khi nhận được thông tin đăng ký.
                            </h4>
                        </Col>
                        <Col md={6} className="border p-3  rounded-3">
                            <FormGroup>
                                <Label for="student_name">Họ và tên</Label>
                                <input
                                    className={`form-control ${
                                        errors.student_name && 'is-invalid'
                                    } `}
                                    aria-invalid={true}
                                    id="student_name"
                                    type="text"
                                    placeholder="Nhập họ và tên ..."
                                    {...register('student_name', { required: true })}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="student_phone">Số điện thoại</Label>
                                <input
                                    className={`form-control ${
                                        errors.student_phone && 'is-invalid'
                                    } `}
                                    aria-invalid={true}
                                    id="student_phone"
                                    type="number"
                                    placeholder="Nhập Số điện thoại ..."
                                    {...register('student_phone', { required: true })}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="student_street">Địa chỉ thường trú</Label>
                                <input
                                    className={`form-control ${
                                        errors.student_street && 'is-invalid'
                                    } `}
                                    aria-invalid={true}
                                    id="student_street"
                                    type="text"
                                    placeholder="Nhập số nhà ..."
                                    {...register('student_street', { required: true })}
                                />
                                <br />
                                <select
                                    className={`form-select ${
                                        errors.student_province && 'is-invalid'
                                    }`}
                                    {...register('student_province', { required: true })}
                                    onChange={onTinhChange}
                                >
                                    <option value="">Tỉnh</option>
                                    {tinh.isLoaded === true ? (
                                        tinh.items.map((item) => (
                                            <option
                                                key={item.code}
                                                value={item.code + '$' + item.name}
                                            >
                                                {item.name}
                                            </option>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </select>
                                <br />
                                <select
                                    className={`form-select ${
                                        errors.student_district && 'is-invalid'
                                    }`}
                                    {...register('student_district', { required: true })}
                                    onChange={onquanHuyenChange}
                                >
                                    <option value="">TP, Quận, Huyện</option>
                                    {quanHuyen.isLoaded === true ? (
                                        quanHuyen.items.map((item) => (
                                            <option
                                                key={item.code}
                                                value={item.code + '$' + item.name}
                                            >
                                                {item.name}
                                            </option>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </select>
                                <br />
                                <select
                                    className={`form-select ${errors.student_ward && 'is-invalid'}`}
                                    {...register('student_ward', { required: true })}
                                >
                                    <option value="">Xã, Phường</option>
                                    {xaPhuong.isLoaded === true ? (
                                        xaPhuong.items.map((item) => (
                                            <option
                                                key={item.code}
                                                value={item.code + '$' + item.name}
                                            >
                                                {item.name}
                                            </option>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="student-job">Thời gian tư vấn</Label>
                                <Row>
                                    <Col className="col-3">
                                        <DatePicker
                                            selected={startDate}
                                            dateFormat="yyyy-MM-dd"
                                            onChange={(date) => {
                                                date !== null
                                                    ? setStartDate(date)
                                                    : setStartDate(new Date());
                                            }}
                                            className="form-control"
                                        />
                                        <input
                                            className={`form-control ${
                                                errors.advise_date && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            type="hidden"
                                            value={startDate}
                                            {...register('advise_date', { required: true })}
                                        />
                                    </Col>
                                    <Col className="col-9">
                                        <select
                                            className={`form-select ${
                                                errors.advise_time && 'is-invalid'
                                            }`}
                                            {...register('advise_time', { required: true })}
                                        >
                                            <option value="">Chọn khung giờ tư vấn</option>
                                            <option value="08:00 AM - 09:00 AM">
                                                08:00 AM - 09:00 AM
                                            </option>
                                            <option value="09:00 AM - 10:00 AM">
                                                09:00 AM - 10:00 AM
                                            </option>
                                            <option value="10:00 AM - 11:00 AM">
                                                10:00 AM - 11:00 AM
                                            </option>
                                            <option value="11:00 AM - 12:00 AM">
                                                11:00 AM - 12:00 AM
                                            </option>
                                            <option value="01:00 PM - 02:00 PM">
                                                01:00 PM - 02:00 PM
                                            </option>
                                            <option value="02:00 PM - 03:00 PM">
                                                02:00 PM - 03:00 PM
                                            </option>
                                            <option value="03:00 PM - 04:00 PM">
                                                03:00 PM - 04:00 PM
                                            </option>
                                            <option value="04:00 PM - 05:00 PM">
                                                04:00 PM - 05:00 PM
                                            </option>
                                        </select>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <br />
                            <Button block disabled={loadingBtn} color="info">
                                ĐĂNG KÝ HƯỚNG NGHIỆP
                                {!loadingBtn ? '' : <Spinner size="sm" />}
                            </Button>
                            {errors.api && (
                                <Alert
                                    style={{ color: 'red', textAlign: 'center', padding: '5px' }}
                                >
                                    {errors.api.message}
                                </Alert>
                            )}

                            {errors.success && (
                                <Alert
                                    style={{ color: 'green', textAlign: 'center', padding: '5px' }}
                                >
                                    {errors.success.message}
                                </Alert>
                            )}
                        </Col>
                    </Row>

                    <br />
                </Form>
            </Container>
            {/* TIN TUC */}
            <Container fluid="lg">
                <HeadTittle title={'TIN TỨC HƯỚNG NGHIỆP'} />
                <News numbers={3} />
            </Container>
            <br />
            <NotificationContainer enterTimeout={800} leaveTimeout={500} />
        </Container>
    );
}

export default Huongnghiep;
