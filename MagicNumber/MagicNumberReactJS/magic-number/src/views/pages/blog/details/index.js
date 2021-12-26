import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
import Avatar from '@components/avatar'
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
  const [data, setData] = useState(null)
  const slug= targetURL.location.pathname.substr(22,targetURL.location.pathname.length);
  const url="http://localhost:7999/api/Article/GetBySlug/" +slug;
  const urlDelete="http://localhost:7999/api/Article/Delete";
  const history = useHistory()
  useEffect(() => {
    axios.get(url).then(
      res => setData(res.data))
      .catch(function (error) {
        console.log(error);
      });   
  }, [slug])
  //alert(url);
  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }

  function sendDeleteRequest(){    
    axios.delete(urlDelete, {
      params: {
          slug: slug
      }
  }).then(
    history.push(`/home`),
    alert("Xóa bài viết thành công")
  );
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
                          <small className='text-muted mr-25'>by</small>
                          <small>
                            <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                              {data[0].Author.Name}
                            </a>
                          </small>
                          <span className='text-muted ml-50 mr-25'>|</span>
                          <small className='text-muted'>17.11.2021</small>
                        </Media>
                      </Media>
                      <div className='my-1 py-25'></div>
                      <div
                        dangerouslySetInnerHTML={{ __html: data[0].Detail  }}
                      ></div>
                    </CardBody>
                    <Button.Ripple color='primary' onClick={sendDeleteRequest} >Xoa bai viet</Button.Ripple>
                  </Card>
                  
                </Col>
                <Col sm='12'>
                  <h6 className='section-label'>Comment</h6>
                  COMMENT HERE
                </Col>
                <Col sm='12'>
                  <h6 className='section-label'>Leave a Comment</h6>
                  <Card>
                    <CardBody>
                      <Form className='form' onSubmit={e => e.preventDefault()}>
                        <Row>
                        {
                            /*
                          <Col sm='6'>
                            <FormGroup className='mb-2'>
                              <Input placeholder='Name' />
                            </FormGroup>
                          </Col>
                          
                            <Col sm='6'>
                            <FormGroup className='mb-2'>
                              <Input type='email' placeholder='Email' />
                            </FormGroup>
                          </Col>
                          <Col sm='6'>
                            <FormGroup className='mb-2'>
                              <Input type='url' placeholder='Website' />
                            </FormGroup>
                          </Col>
                            */

                          }
                          
                          <Col sm='12'>
                            <FormGroup className='mb-2'>
                              <Input className='mb-2' type='textarea' rows='4' placeholder='Comment' />
                            </FormGroup>
                          </Col>
                          {
                            /*
                            <Col sm='12'>
                            <CustomInput
                              className='mb-2'
                              type='checkbox'
                              id='exampleCustomCheckbox4'
                              label='Save my name, email, and website in this browser for the next time I comment.'
                              htmlFor='exampleCustomCheckbox4'
                            />
                          </Col>  
                            */
                          }
                          
                          <Col sm='12'>
                            <Button.Ripple color='primary'>Post Comment</Button.Ripple>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : <>Trang khong ton tai</>}
          </div>
        </div>
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default BlogDetails
