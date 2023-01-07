import {
    Button,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Label,
    NavLink,
    Row,
} from 'reactstrap';
import AuthService from '~/services/auth.service';
import { withRouter } from '~/common/with-router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Dangnhap = ({ router }) => {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await AuthService()
            .login(data.tendangnhap, data.matkhau)
            .then((res) => {
                //console.log(res);
                if (res.status === 404 || res.status === 401) {
                    setError('api', {
                        type: 'custom',
                        message: 'Tên đăng nhập hoặc mật khẩu chưa đúng!',
                    });
                    reset();
                    // clearErrors() need to invoked manually to remove that custom error
                }

                if (res.status === 200) {
                    console.log('Thanh cong');
                    localStorage.setItem('user', JSON.stringify(res.data));
                    router.navigate('/quantri');
                }
            });
    };

    useEffect(() => {});

    return (
        <Container className="p-5 m-auto">
            <Row>
                <Col className="col-lg d-none d-lg-block">
                    <Card inverse style={{ display: 'flex' }}>
                        <CardImg
                            style={{ alignItems: 'center' }}
                            src={require('~/assets/images/truong-cao-dang-y-te-dak-lak-1.jpg')}
                            alt="Cao dang y te"
                            width={'100%'}
                        />
                        <CardImgOverlay className="d-flex align-items-center justify-content-center">
                            <div style={{ backgroundColor: '#274c3575' }} className="p-3">
                                <CardTitle tag="h1">
                                    PHẦN MỀM <br /> QUẢN LÝ ĐÀO TẠO
                                </CardTitle>
                            </div>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col>
                    <Form className="border p-3" onSubmit={handleSubmit(onSubmit)}>
                        <center>
                            <img
                                src={require('~/assets/images/logo-01.png')}
                                alt="logo"
                                width={'250px'}
                            />
                        </center>
                        <FormGroup>
                            <Label for="tendangnhap">Tên đăng nhập</Label>
                            <input
                                className={`form-control ${errors.tendangnhap && 'is-invalid'} `}
                                aria-invalid={true}
                                id="tendangnhap"
                                type="text"
                                {...register('tendangnhap', { required: true })}
                            />
                            <FormFeedback>Tên đăng nhập không được trống</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="matkhau">Mật khẩu</Label>
                            <input
                                className={`form-control ${errors.matkhau && 'is-invalid'} `}
                                aria-invalid={true}
                                id="matkhau"
                                type="password"
                                {...register('matkhau', { required: true })}
                            />
                            <FormFeedback>Mật khẩu không được trống</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="vaitro">Vai trò</Label>
                            <select className={`form-select`}>
                                <option>Quản trị hệ thống</option>
                                <option>Giáo viên</option>
                                <option>Học Sinh</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button block color="primary">
                                        Đăng nhập
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        block
                                        onClick={() => {
                                            router.navigate('/');
                                        }}
                                    >
                                        TRỞ LẠI
                                    </Button>
                                </Col>
                            </Row>
                            {errors.api && (
                                <p style={{ color: 'red', textAlign: 'center', padding: '5px' }}>
                                    {errors.api.message}
                                </p>
                            )}
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default withRouter(Dangnhap);
