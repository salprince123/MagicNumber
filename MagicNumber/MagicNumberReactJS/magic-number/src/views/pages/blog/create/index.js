import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Avatar from '@components/avatar'
import htmlToDraft from 'html-to-draftjs'
import { selectThemeColors } from '@utils'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState } from 'draft-js'
import { Link } from 'react-router-dom'
import { convertToHTML } from 'draft-convert';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Media,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  Button
} from 'reactstrap'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
const BlogCreate = () => {
  const initialContent = ``

  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)

  const [data, setData] = useState(null),
    [title, setTitle] = useState('test'),
    [slug, setSlug] = useState(''),
    [content, setContent] = useState(() => EditorState.createEmpty()),
    [featuredImg, setFeaturedImg] = useState("https://www.studytienganh.vn/upload/2021/05/98114.jpg"),
    [imgPath, setImgPath] = useState('banner.jpg'),
    [convertedContent, setConvertedContent] = useState("null")
  const url="http://localhost:7999/api/Article/Add" ;
  const staticData={
    Title: title,
    ImageLink:featuredImg ,
    Detail: convertedContent,
    Upvote: "0",
    AuthorID: "admin",
    ArticleTypeID: "type2"
  }
  

  /*const categories = [
    { value: 'fashion', label: 'Fashion' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'quote', label: 'Quote' },
    { value: 'video', label: 'Video' },
    { value: 'food', label: 'Food' }
  ]*/

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setFeaturedImg(reader.result)
    }
    reader.readAsDataURL(files[0])
    //alert(featuredImg)
  }
  function sendRequest(){    
    axios.post(url,staticData )
        .then(function (response) {
          alert(response.data + content );
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  return (
    <div className='blog-edit-wrapper'>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-title'>Title</Label>
                        <Input id='blog-edit-title' value={title} onChange={e => setTitle(e.target.value)} />
                      </FormGroup>
                    </Col>
                    {/*
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-category'>Category</Label>
                        <Select
                          id='blog-edit-category'
                          isClearable={false}
                          theme={selectThemeColors}
                          value={blogCategories}
                          isMulti
                          name='colors'
                          options={categories}
                          className='react-select'
                          classNamePrefix='select'
                          onChange={data => setBlogCategories(data)}
                        />
                      </FormGroup>
                    </Col>*/
                    }
                    
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Small Detail</Label>
                        <Input id='blog-edit-slug' value={slug} onChange={e => setSlug(e.target.value)} />
                      </FormGroup>
                    </Col>
                    {
                      /*
                       <Col sm='12'>
                      <FormGroup className='mb-2'>
                        <Label>Content</Label>
                        <Editor editorState={content} onEditorStateChange={handleEditorChange} />
                      </FormGroup>
                    </Col>
                      */
                    }
                   
                   <Col sm='12'>
                   <ReactQuill  placeholder="Your text here"  onChange={setConvertedContent}>    
                   </ReactQuill>
                    </Col>
                    <Col className='mb-2' sm='12'>
                      <div className='border rounded p-2'>
                        <h4 className='mb-1'>Featured Image</h4>
                        <Media className='flex-column flex-md-row'>
                          <img
                            className='rounded mr-2 mb-1 mb-md-0'
                            src={featuredImg}
                            alt='featured img'
                            width='170'
                            height='110'
                          />
                          <Media body>
                            <small className='text-muted'>Required image resolution 800x400, image size 10mb.</small>

                            <p className='my-50'>
                              <a href='/' onClick={e => e.preventDefault()}>
                                {imgPath}
                              </a>
                            </p>
                            <div className='d-inline-block'>
                              <FormGroup className='mb-0'>
                                <CustomInput
                                  type='file'
                                  id='exampleCustomFileBrowser'
                                  name='customFile'
                                  onChange={onChange}
                                  accept='.jpg, .png, .gif'
                                />
                              </FormGroup>
                            </div>
                          </Media>
                        </Media>
                      </div>
                    </Col>
                    <Col className='mt-50'>
                      <Button.Ripple color='primary' className='mr-1' onClick={sendRequest} >
                        Save Changes
                      </Button.Ripple>
                      <Button.Ripple color='secondary' outline tag={Link} to='/home'>
                        Cancel
                      </Button.Ripple>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default BlogCreate
