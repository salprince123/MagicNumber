import React, { useState } from 'react';
import './MainPage.css'
import { Typography } from 'antd';
import { useAxiosGet, useAxiosGetWithHeader, useAxiosGetWithQuery } from '../../MyAPI/Axios';
import { Avatar, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';
const { Meta } = Card;



const { Title } = Typography;
function TopTrending(){
  //const url = "https://spiderum.com/api/v1/post/getRandomPost";
  const url = "http://localhost:7999/api/Article/GetRandomPost";
  const news = useAxiosGet(url)
  const cardInfo = [];
  let content =null;

  const history = useHistory();

  if(news.error){
      content = <div>
          <div className="bg-blue-300 mb-2 p-3">
              If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
          </div>
          <div className="bg-red-300 p-3">
              There was an error please refresh or try again later.
          </div>
      </div>
  }
  if(news.loading){
      content = <h1>Page is load</h1>
  }

  if(news.data){
      //for (var i = 0; i < Object.keys(news.data).length; i++)
      for (var i = 0; i < 4; i++)
      {
          cardInfo.push(news.data[i]);
      }
      
  }
  const handleClick = (data, e) => {
    history.push("Read"+"/"+data);
    
}
  
  const renderCard = (card, index) => {
      return (
          <div>
              <div className="site-card-wrapper">
                <Row gutter={8} >
                    <Card
                        style={{ width: 300 }} bordered={false}
                        cover={
                            <img alt="example" style={{ height: 150 }}
                                src={card.ImageLink}
                            />
                        }
                        onClick={handleClick.bind(this, card.Slug)}
                        
                    >
                        <Meta
                        avatar={<Avatar src={card.Author.Avatar }/>}
                        title={card.Title}
                        description="THis is the small detail"
                        />
                    </Card>
                </Row>            
              </div>
              
          </div>
       
      );
    };
   
    if(news.data){
      content = 
      <div  >
          <Row gutter={8}>
              {cardInfo.map(renderCard)}
          </Row>   
          
      </div>
  }
    return (
      <div className="container-mx-auto">
          {content}
      </div>
  )
}
export default TopTrending;
