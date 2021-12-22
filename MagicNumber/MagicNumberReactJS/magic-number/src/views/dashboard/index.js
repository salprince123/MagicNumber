import { Fragment, useState, useEffect, useContext } from 'react'

import Avatar from '@components/avatar'
import classnames from 'classnames'

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
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Sidebar from '../pages/blog/BlogSidebar'
import CarouselCaptions from './CarouselCaptions'
import CardSlider from './CardSlider'

const Dashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <Fragment>
      <div className='blog-wrapper'>
        <div className='content-detached'>
          <div className='content-body'>
            <Row className='match-height'>
              <Col lg='10' xs='12'>
                <Card>
                  <CarouselCaptions />
                </Card>
              </Col>
              <Col lg='2' md='6' xs='12'>
                <Sidebar />
              </Col>
              <h1 style={{padding:'20px'}}>Most favorite posts</h1>
              <CardSlider></CardSlider>
            </Row>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Dashboard
