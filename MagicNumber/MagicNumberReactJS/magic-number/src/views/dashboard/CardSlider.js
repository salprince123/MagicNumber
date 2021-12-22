import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sliderImage1 from '@src/assets/images/slider/09.jpg'
import sliderImage2 from '@src/assets/images/slider/08.jpg'
import sliderImage3 from '@src/assets/images/slider/10.jpg'
import { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Avatar from '@components/avatar'
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

const CardSlider = () => {
    const [data, setData] = useState(null)
    const url = "http://localhost:55675/api/Article/GetRandomPost"
    useEffect(() => {
        
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 4 // optional, default to 1.
        }
    };
    const renderCardPosts = () => {
        return data.map((item, index) => {
            return (
                <Card>
                    <Link to={``}>
                        <CardImg className='img-fluid' src={item.img} alt={item.title} top />
                    </Link>
                    <CardBody>
                        <CardTitle tag='h4'>
                            <Link className='blog-title-truncate text-body-heading' to={``}>
                                {item.title}
                            </Link>
                        </CardTitle>
                        <Media>
                            <Avatar className='mr-50' img={item.avatar} imgHeight='24' imgWidth='24' />
                            <Media body>
                                <small className='text-muted mr-25'>by</small>
                                <small>
                                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                                        {item.userFullName}
                                    </a>
                                </small>
                            </Media>
                        </Media>
                        <CardText className='blog-content-truncate'>{item.excerpt}</CardText>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to={``}>
                                <MessageSquare size={15} className='text-body mr-50' />
                                <span className='text-body font-weight-bold'>{item.comment} Comments</span>
                            </Link>
                            <Link className='font-weight-bold' to={``}>
                                Read More
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            )
        })
    }
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType="desktop"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {/* {data !== null ? (
                <div style={{ padding: '20px' }}>
                    {renderCardPosts()}
                </div>
            ) : null} */}
            <div style={{ padding: '20px' }}>
                <Card>
                    <Link to={``}>
                        <CardImg className='img-fluid' src={sliderImage1} top />
                    </Link>
                    <CardBody>
                        <CardTitle tag='h4'>
                            <Link className='blog-title-truncate text-body-heading' to={``}>
                                Article Title 1
                            </Link>
                        </CardTitle>
                        <Media>
                            <Avatar className='mr-50' img={sliderImage1} imgHeight='24' imgWidth='24' />
                            <Media body>
                                <small className='text-muted mr-25'>by</small>
                                <small>
                                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                                        Author
                                    </a>
                                </small>
                            </Media>
                        </Media>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to={``}>
                                <MessageSquare size={15} className='text-body mr-50' />
                                <span className='text-body font-weight-bold'>10 Comments</span>
                            </Link>
                            <Link className='font-weight-bold' to={``}>
                                Read More
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div style={{ padding: '20px' }}>
                <Card>
                    <Link to={``}>
                        <CardImg className='img-fluid' src={sliderImage1} top />
                    </Link>
                    <CardBody>
                        <CardTitle tag='h4'>
                            <Link className='blog-title-truncate text-body-heading' to={``}>
                                Article Title 1
                            </Link>
                        </CardTitle>
                        <Media>
                            <Avatar className='mr-50' img={sliderImage1} imgHeight='24' imgWidth='24' />
                            <Media body>
                                <small className='text-muted mr-25'>by</small>
                                <small>
                                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                                        Author
                                    </a>
                                </small>
                            </Media>
                        </Media>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to={``}>
                                <MessageSquare size={15} className='text-body mr-50' />
                                <span className='text-body font-weight-bold'>10 Comments</span>
                            </Link>
                            <Link className='font-weight-bold' to={``}>
                                Read More
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div style={{ padding: '20px' }}>
                <Card>
                    <Link to={``}>
                        <CardImg className='img-fluid' src={sliderImage1} top />
                    </Link>
                    <CardBody>
                        <CardTitle tag='h4'>
                            <Link className='blog-title-truncate text-body-heading' to={``}>
                                Article Title 1
                            </Link>
                        </CardTitle>
                        <Media>
                            <Avatar className='mr-50' img={sliderImage1} imgHeight='24' imgWidth='24' />
                            <Media body>
                                <small className='text-muted mr-25'>by</small>
                                <small>
                                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                                        Author
                                    </a>
                                </small>
                            </Media>
                        </Media>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to={``}>
                                <MessageSquare size={15} className='text-body mr-50' />
                                <span className='text-body font-weight-bold'>10 Comments</span>
                            </Link>
                            <Link className='font-weight-bold' to={``}>
                                Read More
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div style={{ padding: '20px' }}>
                <Card>
                    <Link to={``}>
                        <CardImg className='img-fluid' src={sliderImage1} top />
                    </Link>
                    <CardBody>
                        <CardTitle tag='h4'>
                            <Link className='blog-title-truncate text-body-heading' to={``}>
                                Article Title 1
                            </Link>
                        </CardTitle>
                        <Media>
                            <Avatar className='mr-50' img={sliderImage1} imgHeight='24' imgWidth='24' />
                            <Media body>
                                <small className='text-muted mr-25'>by</small>
                                <small>
                                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                                        Author
                                    </a>
                                </small>
                            </Media>
                        </Media>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to={``}>
                                <MessageSquare size={15} className='text-body mr-50' />
                                <span className='text-body font-weight-bold'>10 Comments</span>
                            </Link>
                            <Link className='font-weight-bold' to={``}>
                                Read More
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div style={{ padding: '20px' }}>
                <Card>
                    <Link to={``}>
                        <CardImg className='img-fluid' src={sliderImage1} top />
                    </Link>
                    <CardBody>
                        <CardTitle tag='h4'>
                            <Link className='blog-title-truncate text-body-heading' to={``}>
                                Article Title 1
                            </Link>
                        </CardTitle>
                        <Media>
                            <Avatar className='mr-50' img={sliderImage1} imgHeight='24' imgWidth='24' />
                            <Media body>
                                <small className='text-muted mr-25'>by</small>
                                <small>
                                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                                        Author
                                    </a>
                                </small>
                            </Media>
                        </Media>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to={``}>
                                <MessageSquare size={15} className='text-body mr-50' />
                                <span className='text-body font-weight-bold'>10 Comments</span>
                            </Link>
                            <Link className='font-weight-bold' to={``}>
                                Read More
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>

        </Carousel>
    )
}
export default CardSlider
