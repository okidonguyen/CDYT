// import { Editor } from 'primereact/editor';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Button } from 'primereact/button';
// import { useForm, Controller } from 'react-hook-form';
// import { InputText } from 'primereact/inputtext';
// import { classNames } from 'primereact/utils';
// import { useNavigate } from 'react-router-dom';
// // move style to index.js
// import Categories from './components/Categories';
// import { useState } from 'react';
// import { slugVietnamese } from '../../../common/utils.js';

// import { NotificationManager, NotificationContainer } from 'react-notifications';
// // move style to index.js
// import './styles.scss';
import { apiBlogDetails } from '../services/api';
import { Dialog } from 'primereact/dialog';
import { Button as PrimeBtn } from 'primereact/button';
import { useEffect, useState } from 'react';

function UpdateAndPreview(props) {
    const [blog, setBlogs] = useState({});
    const [modalW, setModalW] = useState('70vw');

    const onHide = () => {
        props.onHide();
    };

    const getBlogDetails = async () => {
        
       await apiBlogDetails(props.blogId)
            .then((response) => response)
            .then((res) => {
                console.log(res.data.data);
                setBlogs(res.data.data);
            });

            console.log(blog);
    };

    return (
        <>
            <Dialog
                visible={props.visible}
                onHide={onHide}
                onShow={() => getBlogDetails()}
                breakpoints={{ '960px': '80vw', '640px': '100vw' }}
                style={{ width: modalW }}
                header={() => (
                    <h5 className='m-0'>{blog.title}</h5>
                )}
                draggable={false}
            >
                <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
            </Dialog>
        </>
    );
}

export default UpdateAndPreview;
