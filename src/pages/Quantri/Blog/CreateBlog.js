import { Editor } from 'primereact/editor';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useNavigate } from 'react-router-dom';
// move style to index.js
import Categories from './components/Categories';
import { useState } from 'react';
import { slugVietnamese } from '../../../common/utils.js';
import axios from 'axios';
import { NotificationManager, NotificationContainer } from 'react-notifications';
// move style to index.js
import './styles.scss';

function CreateBlog() {
    const navigate = useNavigate();
    const [slug, setSlug] = useState('');
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [coverImage, setCoverImage] = useState(null);

    const defaultValues = {
        title: '',
        metaTitle: '',
        categories: [],
        summary: '',
        content: '',
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ defaultValues });

    const handleTile = (event) => {
        if (!event) {
            setSlug('slug');
            return;
        }
        const title = event.target.value;
        const slug = slugVietnamese(title);
        setSlug(slug);
    };

    const refreshForm = () => {
        setSlug('');
        setCoverImage(null);
        reset();
    };

    const createBlogAction = (data) => {
        setLoadingBtn(true);
        axios
            .post('http://localhost:3001/api/admin/post-create', data)
            .then((response) => response)
            .then((res) => {
                NotificationManager.success(res.data.message);

                if (res?.data?.success) refreshForm();
            })
            .catch((err) => {
                NotificationManager.error('Lỗi kết nối server!');
            })
            .finally(() => setLoadingBtn(false));
    };

    const removeCoverImage = () => {
        setCoverImage(null);
    };

    const handleCoverImage = (e) => {
        const file = e?.target?.files?.[0];
        if (!file) return;

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setCoverImage({
                ...file,
                base64: reader.result,
            });
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    const onSubmit = (data) => {
        const categoryId = data.categories.length > 0 ? data.categories.map(({ id }) => id) : [];
        const inputs = {
            ...data,
            slug: slug,
            categoryIds: JSON.stringify(categoryId),
        };
        if (coverImage?.base64) inputs.coverImage = coverImage.base64;

        createBlogAction(inputs);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <>
            <div className="card p-3 mb-3">
                <h3>Thêm bài viết mới</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-4">
                            {/* START: Title */}
                            <div className="d-flex flex-column">
                                <label
                                    htmlFor="title"
                                    className={classNames({ 'p-error': errors.title })}
                                >
                                    Tiêu đề *
                                </label>
                                <Controller
                                    name="title"
                                    control={control}
                                    rules={{
                                        required: 'Băt buộc nhập tiêu đề.',
                                        maxLength: {
                                            value: 255,
                                            message: 'Tiêu đề quá dài.',
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.title}
                                            {...field}
                                            onInput={(e) => handleTile(e)}
                                            className={`${classNames({
                                                'p-invalid': fieldState.invalid,
                                            })}`}
                                            placeholder="Nhập tiêu đề"
                                        />
                                    )}
                                />

                                {getFormErrorMessage('title')}
                                {slug && (
                                    <small className="text-muted py-2">
                                        {slug ? `Slug: ${slug}` : ''}
                                    </small>
                                )}
                            </div>
                            {/* END: Title */}

                            {/* START: Meta title */}
                            <div className="d-flex flex-column mt-2">
                                <label
                                    htmlFor="metaTitle"
                                    className={classNames({ 'p-error': errors.metaTitle })}
                                >
                                    Tiêu đề meta
                                </label>
                                <Controller
                                    name="metaTitle"
                                    control={control}
                                    rules={{
                                        maxLength: {
                                            value: 255,
                                            message: 'Tiêu đề meta quá dài.',
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.metaTitle}
                                            {...field}
                                            className={`${classNames({
                                                'p-invalid': fieldState.invalid,
                                            })}`}
                                            placeholder="Nhập tiêu đề meta"
                                        />
                                    )}
                                />

                                {getFormErrorMessage('metaTitle')}
                            </div>
                            {/* END: Meta title */}

                            {/* START: Category */}
                            <div className="d-flex flex-column mt-2">
                                <label
                                    htmlFor="categories"
                                    className={classNames({ 'p-error': errors.categories })}
                                >
                                    Danh mục
                                </label>
                                <Controller
                                    name="categories"
                                    control={control}
                                    rules={{
                                        required: 'Bắt buộc chọn danh mục.',
                                    }}
                                    render={({ field, fieldState }) => (
                                        <Categories
                                            id={field.categories}
                                            value={field.value}
                                            className={`${classNames({
                                                'p-invalid': fieldState.invalid,
                                            })}`}
                                            onSelectedItems={(e) => field.onChange(e)}
                                        />
                                    )}
                                />

                                {getFormErrorMessage('categories')}
                            </div>
                            {/* END: Category */}
                        </div>

                        <div className="col-4">
                            {/* START: Meta title */}
                            <div className="d-flex flex-column mt-2">
                                <label
                                    htmlFor="summary"
                                    className={classNames({ 'p-error': errors.summary })}
                                >
                                    Tóm tắt nội dung
                                </label>
                                <Controller
                                    name="summary"
                                    control={control}
                                    rules={{
                                        maxLength: {
                                            value: 255,
                                            message: 'Tiêu đề meta quá dài.',
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <InputTextarea
                                            id={field.summary}
                                            value={field.value}
                                            className={` ${classNames({
                                                'p-invalid': fieldState.invalid,
                                            })}`}
                                            rows={8}
                                            cols={30}
                                            placeholder="Tóm tắt nội dung bài viết"
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />
                                    )}
                                />

                                {getFormErrorMessage('summary')}
                            </div>
                            {/* END: Meta title */}
                        </div>

                        <div className="col-4 d-flex flex-column">
                            Ảnh bìa
                            {coverImage ? (
                                <div className="cover-image-preview">
                                    <i className="pi pi-times" onClick={removeCoverImage}></i>
                                    <img src={coverImage.base64} alt="test" />
                                </div>
                            ) : (
                                <label
                                    className="cover-image mt-3 d-flex justify-content-center align-items-center"
                                    htmlFor="coverImage"
                                >
                                    <i className="pi pi-camera" style={{ fontSize: '2em' }}></i>
                                    <input
                                        id="coverImage"
                                        accept="image/*"
                                        onChange={(e) => handleCoverImage(e)}
                                        type="file"
                                        hidden
                                    />
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* START: Content */}
                            <div className="d-flex flex-column mt-2">
                                <label
                                    htmlFor="content"
                                    className={classNames({ 'p-error': errors.content })}
                                >
                                    Nội dung
                                </label>
                                <Controller
                                    name="content"
                                    control={control}
                                    rules={{
                                        required: 'Bắt buộc nhập nội dung.',
                                        maxLength: {
                                            value: 255,
                                            message: 'Tiêu đề meta quá dài.',
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <Editor
                                            id={field.content}
                                            style={{ height: '300px' }}
                                            value={field.value}
                                            className={` ${classNames({
                                                'p-invalid': fieldState.invalid,
                                            })}`}
                                            placeholder="Nội dung bài viết"
                                            onTextChange={(e) => field.onChange(e.htmlValue)}
                                        />
                                    )}
                                />

                                {getFormErrorMessage('content')}
                            </div>
                            {/* END: Content */}
                        </div>
                        <div className="col-12"></div>
                    </div>
                    <div className="pt-3 pb-0 d-flex gap-2">
                        <Button
                            label="Quay lại"
                            type="button"
                            className="p-button-danger"
                            onClick={() => navigate('/quantri/bai-viet')}
                        />
                        <Button label="Làm mới" type="button" onClick={refreshForm} />
                        <Button
                            label="Tạo"
                            className="p-button-success"
                            loading={loadingBtn}
                            type="submit"
                        />
                    </div>
                </form>
            </div>
            <NotificationContainer enterTimeout={800} leaveTimeout={500} />
        </>
    );
}

export default CreateBlog;
