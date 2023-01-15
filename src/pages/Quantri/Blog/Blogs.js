import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@primer/octicons-react';
import { DataTable } from 'primereact/datatable';
import { Button as PrimeBtn } from 'primereact/button';
import { Column } from 'primereact/column';
import { Button, InputGroup, Input } from 'reactstrap';
import { apiAllBlogs } from './services/api';

function Blog() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [keySearch, setKeySearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [first, setFirst] = useState(0);
    const [visibleModal, setVisibleModal] = useState(false);
    const [detailId, setDetailId] = useState(null);

    const getBlogs = (args) => {
        setLoading(true);
        apiAllBlogs(args)
            .then((response) => response)
            .then((res) => {
                const pagination = res.data.data.pagination;
                // console.log(pagination);
                setTotalRecords(pagination.totalRecords);

                setBlogs(res.data.data.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getBlogs();
    }, []);

    const onSearch = (e) => {
        getBlogs({ keySearch: keySearch });
    };

    const onEnterSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    const onPageChange = async (page) => {
        console.log(page);
        await setPageSize(page.rows);
        await setFirst(page.first);
        getBlogs({
            page: page.page + 1,
            pageSize: page.rows,
        });
    };

    const showPreview = async (id) => {
        window.open(`/quantri/bai-viet/${id}/xem-truoc`); 
    };

    const onClickDeleteBlog = () => {
        console.log('delete');
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

                <DataTable
                    value={blogs}
                    paginator
                    first={first}
                    rows={pageSize}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[2, 10, 25, 50]}
                    totalRecords={totalRecords}
                    dataKey="id"
                    lazy
                    rowHover
                    filterDisplay="menu"
                    loading={loading}
                    responsiveLayout="scroll"
                    emptyMessage="Không tìm thấy bài viết nào."
                    currentPageReportTemplate="Hiển thị {first} - {last} của {totalRecords} trang"
                    onPage={(e) => onPageChange(e)}
                >
                    <Column field="title" header="Tiêu đề"></Column>
                    <Column field="slug" header="slug"></Column>
                    <Column field="user.fullname" header="Người tạo"></Column>
                    <Column field="createdAt" header="Ngày tạo"></Column>
                    <Column
                        style={{ width: '11rem' }}
                        header="Chức năng"
                        body={({ id }) => (
                            <>
                                <PrimeBtn
                                    icon="pi pi-eye"
                                    className="p-button-rounded p-button-text"
                                    onClick={() => showPreview(id)}
                                />
                                <PrimeBtn
                                    icon="pi pi-pencil"
                                    className="p-button-rounded p-button-text"
                                    onClick={() => navigate(`/quantri/bai-viet/${id}/cap-nhat`)}
                                />
                                <PrimeBtn
                                    icon="pi pi-trash"
                                    className="p-button-rounded p-button-text"
                                    onClick={() => onClickDeleteBlog(id)}
                                />
                            </>
                        )}
                    ></Column>
                </DataTable>
            </div>
        </>
    );
}

export default Blog;
