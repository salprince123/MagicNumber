import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
import Avatar from '@components/avatar'
import moment from 'moment';
import cmtImg from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import { kFormatter } from '@utils'
import {
  Share2,
  MessageSquare,
  Bookmark,
  GitHub,
  Gitlab,
  Facebook,
  Twitter,
  Linkedin,
  CornerUpLeft
} from 'react-feather'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Badge,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Form,
  Input,
  Button,
  FormGroup,
  CustomInput
} from 'reactstrap'
/**
 * This is a React function component.
 * @param {Object} targetURL
 * @param {Object} targetURL.location
 * @param {String} targetURL.location.pathname
 */
import '@styles/base/pages/page-blog.scss'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const BlogDetails = (targetURL) => {
  const fakeComment = [
    {
      "Detail": "hahaha",
      "ID": "hahaha"
    },
    {
      "Detail": "hahaha",
      "ID": "hahaha"
    },
    {
      "Detail": "hahaha",
      "ID": "hahaha"
    }
  ]
  const [data, setData] = useState(null)
  const [comment, setComment] = useState(null)
  const [author, setAuthor] = useState(JSON.parse(localStorage.getItem('userData')))
  const [commentDetail, setCommentDetail] = useState("")
  const slug = targetURL.location.pathname.substr(22, targetURL.location.pathname.length);
  const url = "http://localhost:7999/api/Article/GetBySlug/" + slug;
  const urlDelete = "http://localhost:7999/api/Article/Delete";
  const urlAddComment = "http://localhost:7999/api/Article/AddComment";
  const urlGetCommnent = "http://localhost:7999/api/Article/GetComment";
  const history = useHistory()
  useEffect(() => {
    axios.get(url).then(
      res => setData(res.data))
      .catch(function (error) {
        console.log(error);
      });
    axios.get(urlGetCommnent, {
      params: {
        slug: slug
      }
    }).then(
      res => setComment(res.data))
      .catch(function (error) {
        console.log(error);
      });

  }, [slug])

  function sendDeleteRequest() {
    axios.delete(urlDelete, {
      params: {
        slug: slug
      }
    }).then(
      history.push(`/home`),
      alert("Xóa bài viết thành công")
    );
  }

  function addComment() {
    if (commentDetail != "") {
      axios.post("http://localhost:7999/api/Article/AddComment", {
        Slug: slug,
        Detail: commentDetail,
        UserID: author['email']
      })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })
      setComment(comment => [...comment, {
        "UserID": author['email'],
        "Time": moment().format('DD/MM/YYYY h:mm:ss A'),
        "Detail": commentDetail,
        "ArticleID": null,
        "UserAvatar": author['avatar'],
        "UserName": author['fullName']
      }]);
    }

  }
  const renderComment = () => {
    return comment.map(item => {
      return (
        <Card className='mb-3' key={item.UserName}>
          <CardBody>
            <Media>
              <Avatar className='mr-75' img={item.UserAvatar} width='38' height='38' />
              <Media body>
                <h6 className='font-weight-bolder mb-25'>{item.UserName}</h6>
                <CardText>{item.Time}</CardText>
                <CardText>{item.Detail}</CardText>
                <a href='/' onClick={e => e.preventDefault()}>
                  <div className='d-inline-flex align-items-center'>
                    <CornerUpLeft size={18} className='mr-50' />
                    <span>Trả lời</span>
                  </div>
                </a>
              </Media>
            </Media>
          </CardBody>
        </Card>
      )
    })
  }
  return (
    <Fragment>
      <div className='blog-wrapper'>
        <div className='content-detached content-left'>
          <div className='content-body'>
            {data !== null ? (
              <Row>
                <Col sm='12'>
                  <Card className='mb-3'>
                    <CardImg src={data[0].ImageLink} className='img-fluid' top />
                    <CardBody>
                      <CardTitle tag='h4'>{data[0].Title}</CardTitle>
                      <Media>
                        <Avatar className='mr-50' img={data[0].Author.Avatar} imgHeight='24' imgWidth='24' />
                        <Media body>
                          <small className='text-muted mr-25'>Viết bởi</small>
                          <small>
                            <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                              {data[0].Author.Name}
                            </a>
                          </small>
                          <span className='text-muted ml-50 mr-25'>|</span>
                          <small className='text-muted'>17.11.2021</small>
                        </Media>
                        {author['email'] == "admin@demo.com" ? (
                            <div className="text-right"><Button.Ripple color='primary' onClick={sendDeleteRequest} >Xóa bài viết</Button.Ripple></div>
                          ) : <></>}
                      </Media>
                      <div className='my-1 py-25'></div>
                      <div
                        dangerouslySetInnerHTML={{ __html: data[0].Detail }}
                      ></div>
                    </CardBody>

                  </Card>

                </Col>

                <Col sm='12'>
                  <h6 className='section-label'>Bình luận</h6>
                </Col>
                
                <Col sm='12'>
                {author['fullName'] != "Guest" ? (
                  <h6 className='section-label'>Viết bình luận</h6>
                ):<></>}
                {author['fullName'] != "Guest" ? (
                  <Card>
                    <CardBody>
                      <Form className='form' onSubmit={e => e.preventDefault()}>
                      
                        <Row>
                          <Col sm='12'>
                            <FormGroup className='mb-2'>
                              <Input className='mb-2' type='textarea' rows='4' placeholder='Comment'
                                value={commentDetail} onChange={e => setCommentDetail(e.target.value)} />
                            </FormGroup>
                          </Col>
                          <Col sm='12'>
                            <Button.Ripple color='primary' onClick={addComment}>Đăng bình luận</Button.Ripple>
                          </Col>
                        </Row>
                                             
                      </Form>
                    </CardBody>
                  </Card>
                  ):<></>} 
                 
                  <Card>  
                  {comment !== null ? (                
                    <Col sm='12'>
                      {renderComment()}
                    </Col>   
                     ) : <CardTitle>Bài viết này chưa có bình luận nào!</CardTitle>}                    
                  </Card>
                  
                </Col>
              </Row>
            ) : <>Trang không tồn tại</>}
          </div>
        </div>
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default BlogDetails
