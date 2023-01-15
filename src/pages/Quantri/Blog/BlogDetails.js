import { useEffect, useState } from 'react';
import { apiBlogDetails } from './services/api';
import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'primereact/button';

function PreviewBlog(props) {
    let { id } = useParams();
    const [blog, setBlog] = useState({});

    const getBlogDetails = () => {
        apiBlogDetails(id)
            .then((response) => response)
            .then((res) => {
                console.log(res.data.data);
                setBlog(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => getBlogDetails(), []);

    return (
        <>
            <h3>{blog.title}</h3>
            <div className='d-flex flex-column text-muted' style={{"font-size": "12px"}}>
                <spa>Ngày tạo: {format(new Date(blog?.createdAt || null), 'dd/MM/yyyy')}</spa>
                <span>Đường dẫn: {blog.slug}</span>
                <span>Người tạo: {blog?.user?.fullname}</span>
            </div>
            <div className='mt-3' dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </>
    );
}

export default PreviewBlog;
