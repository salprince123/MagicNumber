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

const BlogList = () => {
  const [data, setData] = useState(null)
  const url = "http://localhost:7999/api/Article/GetAll"

  useEffect(() => {
    axios.get(url).then(res => setData(res.data))
  }, [])
  
  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }
  const renderRenderList = () => {
    return data.map(item => {
      /*const renderTags = () => {
        return item.tags.map((tag, index) => {
          return (
            <a key={index} href='/' onClick={e => e.preventDefault()}>
              <Badge
                className={classnames({
                  'mr-50': index !== item.tags.length - 1
                })}
                color={badgeColorsArr[tag]}
                pill
              >
                {tag}
              </Badge>
            </a>
          )
        })
      }*/

      return (
        <Col key={item.Title} md='6'>
          <Card>
            <Link to={`/pages/blog/detail/${item.Slug}`}>
              <CardImg className='img-fluid' src={item.ImageLink} alt={item.Title} top />
            </Link>
            <CardBody>
              <CardTitle tag='h4'>
                <Link className='blog-title-truncate text-body-heading' to={`/pages/blog/detail/${item.Slug}`}>
                  {item.Title}
                </Link>
              </CardTitle>
              <Media>
                <Avatar className='mr-50' img={item.Author.Avatar} imgHeight='24' imgWidth='24' />
                <Media body>
                  <small className='text-muted mr-25'>by</small>
                  <small>
                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                      {item.Title}
                    </a>
                  </small>
                  <span className='text-muted ml-50 mr-25'>|</span>
                  <small className='text-muted'>{item.Title}</small>
                </Media>
              </Media>
              
              <CardText className='blog-content-truncate'>{item.Title}</CardText>
              <hr />
              <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/pages/blog/detail/${item.Slug}`}>
                  <MessageSquare size={15} className='text-body mr-50' />
                  <span className='text-body font-weight-bold'>{item.Title} Comments</span>
                </Link>
                <Link className='font-weight-bold' to={`/pages/blog/detail/${item.Slug}`}>
                  Read More
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
                      <PaginationItem className='prev-item'>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}></PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
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
                      <PaginationItem active>
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
