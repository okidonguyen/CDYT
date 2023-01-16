import { useEffect, useState } from 'react';
import {
    Button,
    Container,
    NavLink,
    Table,
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Fade,
} from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authHeader from '~/services/auth-header';

import axios from 'axios';
import {API_URL} from '~/data';

const DmNghenghiep = () => {
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(API_URL + 'career/', { headers: authHeader() }).then((res) => {
            setData(res.data);
        });
    }, []);

    const handleDestroy = (id) => {
        axios
            .delete(
                API_URL + 'career/' + id,
                data,
                { validateStatus: false },
                { headers: authHeader() }
            )
            .then((res) => {
                //console.log(res);
                if (res.status === 404 || res.status === 401) {
                    console.log(res.data.message);
                }

                if (res.status === 200) {
                    console.log(res.data.message);
                    setData(data.filter((item) => item.id !== id));
                }
            });
    };

    const handleUpdate = (id) => {
        navigate('/quantri/themnghenghiep/' + id);
    };

    return (
        <Container>
            <h1>QUẢN LÝ DANH MỤC NGHỀ</h1>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên nghề nghiệp</th>
                        <th>Mô tả</th>
                        <th>Trạng thái</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((row) => (
                            <tr key={row.id}>
                                <th scope="row">{row.id}</th>
                                <td>{row.title}</td>
                                <td>{row.description}</td>
                                <td>{row.published ? 'Công khai' : 'Không công khai'}</td>
                                <td>
                                    <NavLink
                                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleUpdate(row.id);
                                        }}
                                    >
                                        Cập nhật
                                    </NavLink>{' '}
                                    <NavLink
                                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleDestroy(row.id);
                                        }}
                                    >
                                        Xoá
                                    </NavLink>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Button
                color="primary"
                onClick={() => {
                    navigate('/quantri/themnghenghiep');
                }}
            >
                Thêm mới nghề nghiệp
            </Button>
        </Container>
    );
};

const ThemNghenghiep = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (id) {
            axios.get(API_URL + 'career/' + id, { headers: authHeader() }).then((res) => {
                if (res.status === 200) {
                    setValue('title', res.data.title);
                    setValue('description', res.data.description);
                    setValue('published', res.data.published);
                }
            });
        }
    }, []);

    const onSubmit = (data) => {
        if (id) {
            axios
                .put(
                    API_URL + 'career/' + id,
                    data,
                    { validateStatus: false },
                    { headers: authHeader() }
                )
                .then((res) => {
                    showError(res);
                });
        } else {
            axios
                .post(
                    API_URL + 'career/',
                    data,
                    { validateStatus: false },
                    { headers: authHeader() }
                )
                .then((res) => {
                    showError(res);
                });
        }
    };

    // Show error after response
    const showError = (res) => {
        if (res.status === 404 || res.status === 401) {
            setError('api', {
                type: 'custom',
                message: res.data.message,
            });
        }

        if (res.status === 200) {
            setError('success', {
                type: 'custom',
                message: res.data.message,
            });
        }
    };

    return (
        <Container className="p-5 m-auto" style={{ width: '700px' }}>
            <h1>{id === undefined ? 'Thêm nghề nghiệp' : 'Cập nhật nghề nghiệp'}</h1>
            <Form className="border p-3 m-3" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="title">Tên nghề nghiệp</Label>
                    <input
                        className={`form-control ${errors.title && 'is-invalid'} `}
                        aria-invalid={true}
                        id="title"
                        type="text"
                        {...register('title', { required: true })}
                    />
                    <FormFeedback>Tên nghề nghiệp không được trống</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Mô tả</Label>
                    <textarea
                        className={`form-control ${errors.description && 'is-invalid'} `}
                        aria-invalid={true}
                        id="description"
                        {...register('description', { required: true })}
                    />
                    <FormFeedback>Mô tả không được trống</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="published">Trạng thái</Label>
                    <select className={`form-select`} {...register('published')}>
                        <option value={true}>Công khai</option>
                        <option value={false}>Không Công khai</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <Button block color="primary">
                        {id === undefined ? 'Thêm nghề nghiệp' : 'Cập nhật nghề nghiệp'}
                    </Button>
                    <br />
                    <Button
                        block
                        color="primary"
                        onClick={() => {
                            navigate('/quantri/danhmucnghenghiep');
                        }}
                    >
                        Trở lại
                    </Button>

                    {errors.api && (
                        <p style={{ color: 'red', textAlign: 'center', padding: '5px' }}>
                            {errors.api.message}
                        </p>
                    )}

                    {errors.success && (
                        <Fade style={{ color: 'green', textAlign: 'center', padding: '5px' }}>
                            {errors.success.message}
                        </Fade>
                    )}
                </FormGroup>
            </Form>
        </Container>
    );
};

const Nghenghiep = {
    DmNghenghiep,
    ThemNghenghiep,
};

export default Nghenghiep;
