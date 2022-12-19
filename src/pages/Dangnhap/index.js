import {
    Alert,
    Button,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    NavLink,
} from 'reactstrap';
import AuthService from '~/services/auth.service';
import { withRouter } from '~/common/with-router';
import { useForm } from 'react-hook-form';

const Dangnhap = ({ router }) => {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        // await AuthService()
        //     .login(data.tendangnhap, data.matkhau)
        //     .then(
        //         (response) => {
        //             console.log('vao day');
        //             console.log(response);
        //             //props.navigate('/profile');
        //             //window.location.reload();
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     );
        //console.log(data);
        await AuthService()
            .login(data.tendangnhap, data.matkhau)
            .then((res) => {
                //console.log(res);
                if (res.status === 404 || res.status === 401) {
                    setError('api', {
                        type: 'custom',
                        message: 'Tên đăng nhập hoặc mật khẩu chưa đúng!',
                    });
                    //reset();
                    // clearErrors() need to invoked manually to remove that custom error
                }

                if (res.status === 200) {
                    console.log('Thanh cong');
                    router.navigate('/quantri');
                }
            });
    };

    return (
        <Container className="p-5 m-auto" style={{ width: '500px' }}>
            <Form className="border p-3 m-3" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <h1>ĐĂNG NHẬP</h1>
                </FormGroup>
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
                    <Button block color="primary">
                        Đăng nhập
                    </Button>
                    <NavLink href="/">Về trang chủ</NavLink>
                    {errors.api && (
                        <p style={{ color: 'red', textAlign: 'center', padding: '5px' }}>
                            {errors.api.message}
                        </p>
                    )}
                </FormGroup>
            </Form>
        </Container>
    );
};
export default withRouter(Dangnhap);
