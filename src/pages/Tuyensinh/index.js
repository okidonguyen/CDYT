import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardImg,
    Col,
    Container,
    Row,
    Spinner,
    Button,
} from 'reactstrap';
import { Form, FormGroup, Label } from 'reactstrap';
import News from '~/components/News';
import HeadTittle from '~/components/HeadTittle';
import Quotes from '~/components/Quotes';
import RunningText from '~/components/RunningText';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Provinces, Districts, Wards } from '~/data/provinces';

import axios from 'axios';
import authHeader from '~/services/auth-header';
const API_URL = 'http://localhost:3001/api/';

function Tuyensinh() {
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
                    API_URL + 'admissions/',
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
                title={'TRANG TƯ VẤN TUYỂN SINH'}
                content={'Hãy đăng ký liên hệ nhà trường để được hỗ trợ, hướng dẫn.'}
                icon={'bi bi-book'}
            />
            <Container className="p-4  text-center">
                <HeadTittle title={'BẠN NÊN CHỌN HỌC TẠI TRƯỜNG VÌ'} />
                <Row>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="success" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-heart"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>Đội ngũ cán bộ, giảng viên tận tâm</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="warning" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>Sinh viên được phát triển toàn diện</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="danger" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-telephone-plus"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>Được tư vấn hướng nghiệp khi đăng ký</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <Card className="m-2" color="info" inverse>
                            <CardBody>
                                <CardTitle tag="h1">
                                    <i className="bi bi-upload"></i>
                                </CardTitle>
                                <CardText tag={'h5'}>
                                    Được giới thiệu việc làm khi ra trường
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid="lg">
                <br />
                <Row>
                    <Col className="col-12 col-lg-8">
                        <HeadTittle title={'Đăng ký tuyển sinh'} />
                        <p>
                            Bạn vui lòng điền đầy đủ thông tin cá nhân vào bảng đăng ký xét tuyển
                            trực tuyến bên cạnh để tư vấn viên của trường liên hệ với bạn giải đáp
                            các thắc mắc hoàn toàn miễn phí. Chúng tôi sẽ chủ động liên hệ lại với
                            bạn trong vòng 24h kể từ khi nhận được thông tin đăng ký.
                        </p>
                        <Form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ border: 'solid 1px #ddd', padding: '20px' }}
                        >
                            <Row>
                                <Col md={7}>
                                    <FormGroup>
                                        <Label for="student_name">Họ và tên</Label>
                                        <input
                                            autoComplete="off"
                                            className={`form-control ${
                                                errors.student_name && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="student_name"
                                            type="text"
                                            placeholder="Họ và tên *"
                                            {...register('student_name', { required: true })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="student_birthday">Ngày sinh</Label>
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
                                            autoComplete="off"
                                            className={`form-control ${
                                                errors.student_birthday && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            type="hidden"
                                            value={startDate}
                                            {...register('student_birthday', { required: true })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="student_gen">Giới tính</Label>
                                        <select
                                            className={`form-select ${
                                                errors.student_gen && 'is-invalid'
                                            }`}
                                            {...register('student_gen', { required: true })}
                                        >
                                            <option value={'Nam'}>Nam</option>
                                            <option value={'Nữ'}>Nữ</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="student_rel">Tôn giáo</Label>
                                        <select
                                            className={`form-select ${
                                                errors.student_rel && 'is-invalid'
                                            }`}
                                            {...register('student_rel', { required: true })}
                                        >
                                            <option value={'Không'}>Không</option>
                                            <option value={'Có'}>Có</option>
                                        </select>
                                    </FormGroup>
                                </Col>

                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="student_nation">Dân tộc</Label>
                                        <input
                                            autoComplete="off"
                                            className={`form-control ${
                                                errors.student_nation && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="student_nation"
                                            type="text"
                                            placeholder="Dân tộc *"
                                            {...register('student_nation', { required: true })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="student_level">Trình độ </Label>
                                        <select
                                            className={`form-select`}
                                            {...register('student_level')}
                                        >
                                            <option value={'THCS'}>THCS</option>
                                            <option value={'THPT'}>THPT</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="student_subject">Đối tượng ưu tiên</Label>
                                        <input
                                            autoComplete="off"
                                            className={`form-control ${
                                                errors.student_subject && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="student_subject"
                                            type="text"
                                            placeholder="Đối tượng ưu tiên *"
                                            {...register('student_subject', { required: true })}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="student_job">Ngành học</Label>
                                        <select
                                            className={`form-select ${
                                                errors.student_job && 'is-invalid'
                                            }`}
                                            {...register('student_job', { required: true })}
                                        >
                                            <option value={''}>Chọn ngành học</option>
                                            <option value={'Điều dưỡng'}>Điều dưỡng</option>
                                            <option value={'Dược'}>Dược</option>
                                            <option value={'Hộ sinh'}>Hộ sinh</option>
                                            <option value={'VLTL-PHCN'}>
                                                Vật lý trị liệu - Phục hồi chức năng
                                            </option>
                                        </select>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="student_email">Email</Label>
                                        <input
                                            autoComplete="off"
                                            className={`form-control ${
                                                errors.student_email && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="student_email"
                                            type="email"
                                            placeholder="Email *"
                                            {...register('student_email', { required: true })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="student_phone">Số điện thoại</Label>
                                        <input
                                            autoComplete="off"
                                            className={`form-control ${
                                                errors.student_phone && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="student_phone"
                                            type="number"
                                            placeholder="Số điện thoại *"
                                            {...register('student_phone', { required: true })}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="student_street">Địa chỉ liên hệ</Label>
                                        <input
                                            autoComplete="off"
                                            className={`form-control ${
                                                errors.student_street && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="student_street"
                                            type="text"
                                            placeholder="Nhập số nhà ..."
                                            {...register('student_street', { required: true })}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
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
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
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
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <select
                                            className={`form-select ${
                                                errors.student_ward && 'is-invalid'
                                            }`}
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
                                </Col>
                            </Row>

                            <Button block disabled={setLoadingBtn ? false : true} color="info">
                                ĐĂNG KÝ NGAY
                                {setLoadingBtn ? '' : <Spinner size="sm" />}
                            </Button>
                        </Form>
                        <br />
                        {/* TIN TUC */}
                        <HeadTittle title={'Tin tức tuyển sinh'} />
                        <News numbers={3} />
                        <br />
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <CardImg src={require('~/assets/images/hoatdong/10.jpg')} alt="SINH VIEN" />
                    </Col>
                </Row>
            </Container>
            <NotificationContainer enterTimeout={800} leaveTimeout={500} />
        </Container>
    );
}

export default Tuyensinh;
