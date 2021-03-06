import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
import { MessageSquare } from 'react-feather'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Badge,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

import '@styles/base/pages/page-blog.scss'
import './index.css'

const BlogList = () => {
  const [data, setData] = useState(null)
  const url = "http://localhost:7999/api/Article/GetAll"
  const [currentPage, setCurrentPage]= useState(0)
  const [pagesCount, setPageCount]= useState(3)
  useEffect(() => {
    axios.get(url).then(res => setData(res.data))
    if(data!=null)
    {
      if(data.length%5==0)
      setPageCount(data.length%5)
      else setPageCount(parseInt(data.length/5)+1 )
      if(data.length<=5)
        setPageCount(1)
    }
    // if(data!=null)
    // alert(data.length)
  }, [data])
  
  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }
  const renderRenderList = () => {     
    return data.slice(currentPage*5,(currentPage+1)*5).map(item => {
      return (
        <Col key={item.Title} md='6'>
          <Card>
            <Link to={`/pages/article/detail/${item.Slug}`}>
              <CardImg className='img-fluid list' src={item.ImageLink} alt={item.Title} top />
            </Link>
            <CardBody>
              <CardTitle tag='h4'>
                <Link className='blog-title-truncate text-body-heading' to={`/pages/article/detail/${item.Slug}`}>
                  {item.Title}
                </Link>
              </CardTitle>
              <Media>
                <Avatar className='mr-50' img={item.Author.Avatar} imgHeight='24' imgWidth='24' />
                <Media body>
                  <small className='text-muted mr-25'>Viết bởi</small>
                  <small>
                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                      {item.Author.Name}
                    </a>
                  </small>
                </Media>
              </Media>
              
              <CardText className='blog-content-truncate'>{item.Title}</CardText>
              <hr />
              <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/pages/article/detail/${item.Slug}`}>
                 
                </Link>
                <Link className='font-weight-bold' to={`/pages/article/detail/${item.Slug}`}>
                  Đọc bài viết
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      )
    })
  }

  return (
    <Fragment>
      <div className='blog-wrapper'>
        <div className='content-detached content-left'>
          <div className='content-body'>
            {data !== null ? (
              <div className='blog-list-wrapper'>
                <Row>{renderRenderList()}</Row>
                <Row>
                  <Col sm='12'>
                  <Pagination className='d-flex justify-content-center mt-2'>            
                    <PaginationItem disabled={currentPage <= 0}>                      
                      <PaginationLink  
                                              
                        previous
                        href="#"
                      />                      
                    </PaginationItem>
                    {[...Array(pagesCount)].map((page, i) => 
                      <PaginationItem active={i === currentPage} key={i}>
                        <PaginationLink  href="#" onClick={e => setCurrentPage(i)}>
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={currentPage >= pagesCount - 1}>                      
                      <PaginationLink                        
                        next
                        href="#"
                      />                      
                    </PaginationItem>                    
                  </Pagination>
                    {
                      /*<Pagination className='d-flex justify-content-center mt-2'>
                      <PaginationItem className='prev-item'>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}></PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem >
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          4
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          5
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          6
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          7
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className='next-item'>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}></PaginationLink>
                      </PaginationItem>
                    </Pagination>
                    */
                    }
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>
        </div>
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default BlogList
