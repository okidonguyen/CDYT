import { FormGroup, Card, Label, PaginationLink, PaginationItem, Button, Table, InputGroup, Input  } from 'reactstrap';
import { Editor } from 'primereact/editor';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button as BtnPrime } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import MultiSelectDemo from './components/Categories';
import { useEffect, useState } from 'react';
import { slugVietnamese } from "../../../common/utils.js"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss'

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [coverImage, setCoverImage] = useState(null);

  const handleTile = event => {
    if (!event) {
      setTitle("");
      setSlug("slug");
      return
    }
    const title = event.target.value;
    const slug = slugVietnamese(title);
    setTitle(title);
    setSlug(slug);
  }

  const refreshForm = () => {
    setTitle("");
    setSlug("");
    setMetaTitle("");
    setCategories([]);
    setContent("");
    setSummary("");
    setCoverImage(null);
  }

  const createBlogAction = () => {
    setLoadingBtn(true)
    const categoryId = categories?.length > 0 ? categories.map(({id}) => id) : [];

    const data = {
      title: title,
      slug: slug,
      metaTitle: metaTitle,
      categoryIds: JSON.stringify(categoryId),
      content: content,
      summary: summary,
      coverImage: coverImage?.base64
    }

    axios.post("http://localhost:3001/api/admin/post-create", data)
      .then(response => response)
      .then(res => {
          toast(res.data.message);

          if (res?.data?.success) refreshForm();
      })
      .catch(err => {
        toast("Lỗi kết nối server!");
      })
      .finally(() => setLoadingBtn(false));
  }

  const removeCoverImage = () => {
    setCoverImage(null);
  }

  const handleCoverImage = e => {
    const file = e?.target?.files?.[0]
    if (!file) return;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setCoverImage({
        ...file,
        base64: reader.result
      });
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
  }

  return (
    <>
    <ToastContainer />
    <div className="card p-3">
      <h3>Thêm bài viết mới</h3>
      <div className='row'>
        <div className='col-4'>
          <FormGroup>
            <Label for="title">
              Tiêu đề
            </Label>
            <Input
              id="title"
              type="text"
              name="text"
              placeholder="Nhập tiêu đề"
              value={title}
              onChange={e => handleTile(e) }
            />
            <small className='text-muted pt-2'>{slug ? `Slug: ${slug}` : ""}</small>
          </FormGroup>
          <FormGroup>
            <Label for="metaTitle">
              Tiêu đề meta
            </Label>
            <Input
              id="metaTitle"
              type="text"
              name="text"
              value={metaTitle}
              placeholder="Nhập tiêu đề meta"
              onChange={e => setMetaTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
          <Label >
            Danh mục
          </Label>
          <MultiSelectDemo onSelectedItems={value => setCategories(value)}/>
        </FormGroup>
        </div>

        <div className='col-4'>
          <FormGroup>
            <Label >
              Tóm tắt nội dung
            </Label>
            <InputTextarea className='w-100' rows={8} cols={30} value={summary} onChange={(e) => setSummary(e.target.value)} />
          </FormGroup>
        </div>

        <div className='col-4 d-flex flex-column'>
          Ảnh bìa
          {
            coverImage ? (
              <div className='cover-image-preview'>
                <i className="pi pi-times" onClick={removeCoverImage}></i>
                <img src={coverImage.base64} alt="test" />
              </div>
              ) : (
              <label 
                className='cover-image mt-3 d-flex justify-content-center align-items-center' 
                htmlFor="coverImage">
                <i className="pi pi-camera" style={{'fontSize': '2em'}}></i>
                <input id='coverImage' accept="image/*" onChange={e => handleCoverImage(e)} type="file" hidden/>
              </label>)
          }
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <FormGroup>
            <Label >
              Nội dung
            </Label>
            <Editor style={{height:'300px'}} value={content} onTextChange={e => setContent(e.htmlValue)} />
          </FormGroup>
        </div>
        <div className='col-12'>
          
        </div>
      </div>
      <div className='p-3'>
        <BtnPrime label="Tạo" icon="pi pi-check" className="p-button-success" loading={loadingBtn} onClick={createBlogAction}/>
      </div>
    </div>
    </>
  );
}

export default CreateBlog;
