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
import './style.css'
const CardSlider = () => {
    const [data, setData] = useState(null)
    const url = "http://localhost:7999/api/Article/GetRandomPost"
    useEffect(() => {
        axios.get(url).then(res => setData(res.data))
      }, [data])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 4
        }
    };
    const renderCardPosts = () => {
        return data.map((item) => {
            return (
                <div style={{ padding: '20px' }}>
                <Card>
                    <Link to={`/pages/article/detail/${item.Slug}`}>
                        <CardImg className='img-fluid slider' src={item.ImageLink} alt={item.Title} top />
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
                        
                        <CardText className='blog-content-truncate'></CardText>
                        
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>                            
                            <Link className='font-weight-bold' to={``}>
                                Đọc bài viết
                            </Link>
                        </div>
                    </CardBody>
                </Card>
                </div>
            )
        })
    }
    return (
        <div>        
             {data !== null ? (
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                autoPlay={false}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                deviceType="desktop"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                
                    {renderCardPosts()}
                
                </Carousel>
             ) : null} 
          </div> 
       
    )
}
export default CardSlider
