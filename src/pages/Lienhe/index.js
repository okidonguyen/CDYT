import { CardImg, Col, Container, FormFeedback, Row, Spinner } from 'reactstrap';
import RunningText from '~/components/RunningText';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import HeadTittle from '~/components/HeadTittle';
import { useForm } from 'react-hook-form';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import axios from 'axios';
import authHeader from '~/services/auth-header';
import { useState } from 'react';
import {API_URL} from '~/data';

function Lienhe() {
    const [loadingBtn, setLoadingBtn] = useState(false);
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
                    API_URL + 'contact/',
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
    return (
        <Container fluid className="p-0">
            <RunningText separator={'/'} />
            <Container fluid="lg">
                <HeadTittle title="NHẬP THÔNG TIN LIÊN HỆ" />
                <p>
                    Bạn vui lòng điền đầy đủ thông tin cá nhân và chọn Khoa, phòng ban liên hệ công
                    tác. Chúng tôi sẽ liên hệ lại bạn trong thời gian ngắn nhất.
                </p>
                <Row>
                    <Col className="col-12 col-lg-8">
                        <Form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ border: 'solid 1px #ddd', padding: '20px' }}
                        >
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="con_name">Họ và tên</Label>
                                        <input
                                            className={`form-control ${
                                                errors.con_name && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="con_name"
                                            type="text"
                                            placeholder="Nhập họ và tên ..."
                                            {...register('con_name', { required: true })}
                                        />
                                        <FormFeedback>Họ và tên không được để trống</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="con_phone">Số điện thoại</Label>
                                        <input
                                            className={`form-control ${
                                                errors.con_phone && 'is-invalid'
                                            } `}
                                            aria-invalid={true}
                                            id="con_phone"
                                            type="tel"
                                            placeholder="Nhập số điện thoại ..."
                                            {...register('con_phone', {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]{10}/,
                                                },
                                            })}
                                        />
                                        <FormFeedback>
                                            Số điện thoại không được để trống và 10 chữ số
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="con_email">Email</Label>
                                <input
                                    className={`form-control ${errors.con_email && 'is-invalid'} `}
                                    aria-invalid={true}
                                    id="con_email"
                                    type="email"
                                    placeholder="Nhập Email ..."
                                    {...register('con_email', { required: true })}
                                />
                                <FormFeedback>Email không được trống</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="con_group">Đơn vị liên hệ công tác</Label>
                                <select
                                    className={`form-select ${errors.con_group && 'is-invalid'}`}
                                    {...register('con_group', { required: true })}
                                >
                                    <option value={'Phòng Tổ chức - Hành chính'}>
                                        Phòng Tổ chức - Hành chính
                                    </option>
                                    <option
                                        value={
                                            'Phòng Đào tạo - Nghiên cứu khoa học và Hợp tác quốc tế'
                                        }
                                    >
                                        Phòng Đào tạo - Nghiên cứu khoa học và Hợp tác quốc tế
                                    </option>
                                    <option value={'Phòng Tài chính - Kế toán'}>
                                        Phòng Tài chính - Kế toán
                                    </option>
                                    <option value={'Phòng Công tác học sinh, sinh viên'}>
                                        Phòng Công tác học sinh, sinh viên
                                    </option>
                                    <option value={'Phòng Khảo thí và Kiểm định chất lượng'}>
                                        Phòng Khảo thí và Kiểm định chất lượng
                                    </option>
                                    <option value={'Khoa Khoa học cơ bản'}>
                                        Khoa Khoa học cơ bản
                                    </option>
                                    <option value={'Khoa Y'}>Khoa Y</option>
                                    <option value={'Khoa Điều dưỡng - Kỹ thuật y học'}>
                                        Khoa Điều dưỡng - Kỹ thuật y học
                                    </option>
                                    <option value={'Khoa Dược'}>Khoa Dược</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Label for="con_content">Nội dung liên hệ</Label>
                                <textarea
                                    className={`form-control ${
                                        errors.con_content && 'is-invalid'
                                    } `}
                                    aria-invalid={true}
                                    id="con_content"
                                    placeholder="Nhập nội dung Nội dung liên hệ"
                                    {...register('con_content', { required: true })}
                                />
                                <FormFeedback>Nội dung không được trống</FormFeedback>
                            </FormGroup>
                            <Button block disabled={loadingBtn} color="info">
                                GỬI THÔNG TIN
                                {!loadingBtn ? '' : <Spinner size="sm" />}
                            </Button>
                        </Form>
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

export default Lienhe;
