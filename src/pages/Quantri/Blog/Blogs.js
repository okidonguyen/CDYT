import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import userService from '~/services/user.service';
import { SearchIcon } from '@primer/octicons-react';
import {
    Button,
    Card,
    CardBody,
    PaginationLink,
    PaginationItem,
    Pagination,
    Table,
    InputGroup,
    Input,
} from 'reactstrap';
import AddNewCompoent from './components/AddNewBlogModel';
import { createReactEditorJS } from 'react-editor-js';
import axios from 'axios';

function Blog() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [keySearch, setKeySearch] = useState('');
    const [pagination, setPagination] = useState(null);

    const getBlogs = (args) => {
        axios
            .get('http://localhost:3001/api/admin/posts', {
                params: args,
            })
            .then((response) => response)
            .then((res) => {
                setPagination(res.data.data.pagination);
                setBlogs(res.data.data.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getBlogs();
    }, []);

    const onSearch = (e) => {
        getBlogs({ keySearch: keySearch });
    };

    const onEnterSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch({ keySearch: keySearch });
        }
    };

    const RenderBlog = () => {
        if (blogs.length > 0)
            return blogs.map((blog) => (
                <tr key={blog.id}>
                    <th>{blog?.id || '-'}</th>
                    <th>{blog?.title}</th>
                    <th>{blog?.summary || '-'}</th>
                    <th>{blog?.createdAt || '-'}</th>
                    <th>{blog?.user?.fullname || '-'}</th>
                </tr>
            ));

        return (
            <tr>
                <td colSpan={5} className="text-center">
                    Không tìm thấy bài viết nào
                </td>
            </tr>
        );
    };

    const onPageChange = (page) => {
        getBlogs({ keySearch: keySearch, page: page, pageSize: 10 });
    };

    return (
        <>
            <div className="p-3">
                <Button color="success" onClick={() => navigate('/quantri/tao-bai-viet')}>
                    Thêm mới
                </Button>
            </div>
            <div className="card p-3">
                <div className="row pb-3 border-bottom align-items-center">
                    <h3 className="col-9 p-0 m-0 px-2">Danh sách bài viết</h3>
                    <div className="col-3">
                        <InputGroup>
                            <Input
                                placeholder="Tìm kiếm"
                                value={keySearch}
                                onChange={(e) => setKeySearch(e.target.value)}
                                onKeyPress={onEnterSearch}
                            />
                            <Button onClick={onSearch}>
                                <SearchIcon size={16} />
                            </Button>
                        </InputGroup>
                    </div>
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Tóm tắt</th>
                            <th>Ngày tạo</th>
                            <th>Người tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderBlog />
                    </tbody>
                </Table>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" previous />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" next />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" last />
                    </PaginationItem>
                </Pagination>
            </div>
        </>
    );
}

export default Blog;
