import React, { createElement, useState } from 'react';
import './UserDetail.css'
import {Avatar, Tabs,Card, Image,Col, Row,Button, Radio, Pagination,Comment, Tooltip } from 'antd';
import Text from 'antd/lib/typography/Text';
import { render } from '@testing-library/react';
import { DownOutlined , UpOutlined  } from '@ant-design/icons';
const { TabPane } = Tabs;
const { Meta } = Card;
const cardInfo = [
  {
    Title: "Sự kiện quan trọng nhất lịch sử châu Âu",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/c3080ed0805911e8a6b0c5cb69e980dc.jpg",
    SmallDetail: 'Theo bạn, sự kiện nào là quan trọng nhất trong lịch sử châu Âu, và vì sao? ...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Nghi thức tế sống thời cổ đại",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/e3b3de6009e811ea808cb1515b486c8b.jpg",
    SmallDetail: 'Tại sao các nền văn minh cổ đại lại thực hiện nghi thức tế sống? Trả lời bởi Spencer...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Việt Nam trung đại thời Hậu Lê thịnh vượng đến mức nào? [Phần 1] đến mức nào?đến mức nào?đến mức nào?",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/fcda9fc0800811e8b4d50995a8530ace.jpg",
    SmallDetail: 'Source: http://qr.ae/TU1bqW Trả lời bởi Hoang Nghiem (严黄), Quân dục hòa, Tất bị chiến Nhà Lê (1428-1789) về cơ bản chính là “thời...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Các ngôn ngữ Rôman thông hiểu lẫn nhau đến mức độ nào?",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/89ed4ee0766711e8b4294958dde6e8db.jpg",
    SmallDetail: 'Source: http://qr.ae/TUp7YT Trả lời bởi Thomas Bereni, người nói tiếng Pháp bản ngữ Mutual Intelligibility , Romance...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Những chiến binh trung cổ (p.1)",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/ea820a60a10811e68ed297728133375f.jpg",
    SmallDetail: 'Bài viết còn nhiều thiếu sót. Mong được góp ý I. QUÂN CUNG KỴ BINH MÔNG CỔ Sự thành công bành trướng của đại đế chế Mông Cổ gắn...',
    Author: "admin",
    Time: "17.01.2021"
  },
];
const renderCard = (card, index) => {
  return (
    <Card style={{height:90, marginTop:10}}>
    <Row style={{marginLeft:-25, marginTop:-25,maxHeight:90}}>
      <Avatar shape="square" style={{width:90,height:90}}
        src={card.Image}/>
      <Col style={{marginLeft:10}}>
        <Row >
          <Text style={{textAlign:'left',fontSize:20}}>{card.Title}</Text>
        </Row>
        <Row>
          <Text style={{textAlign:'left',fontSize:15}}>{card.SmallDetail}</Text>
        </Row>
        <Row style={{marginTop:10}}>
          <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4 " }}>{card.Author} at</Text>
          <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4 ",marginLeft:5 }}>{card.Time}</Text>
        </Row>
      </Col>
      
    </Row>
  </Card>
   
  );
};

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    <Tooltip key="comment-basic-like" title="Like">
      <span >
        {createElement(  UpOutlined)}
      </span>
      <span style={{marginLeft:10}}>
        1
      </span>
      <span style={{marginLeft:10}}>
        {createElement( DownOutlined)}
      </span>
    </Tooltip>
    {children}
  </Comment>
);
function UserDetail(){    
      return (
        <div className="mainBody">
            <div >
                <Avatar className="wallpaper" 
                src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-cover/9b39f2804d0911e78d979d841160f2c5.jpg"></Avatar>
            </div>
            <Card className="panel-user" style={{ height: 400 }}>
            <Col  align="middle">
                <Avatar className="avatar" alt="example" style={{ height: 150, width:150 }} 
                            src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-avatar/001befb0738b11e98bc52d654e80e4ac.jpg"
                        />
                <Meta className="panel-name"
                    title="SolWannaGone"
                    description="A dreamer"
                    />
                <Row align="center" style={{marginTop:20}}>
                    <Button type="primary" style={{width:100}}> Follow</Button>
                    <Button type="primary" style={{marginLeft:10, width:100}}> Contact</Button>
                </Row>
            </Col>
            </Card>

          <div>        
            <Tabs className="tab" defaultActiveKey="1" type="line" size={"large"} >
              <TabPane tab="Your posts" key="1">
                <Col>
                {cardInfo.map(renderCard)}
                </Col>
              </TabPane>
              <TabPane tab="Favorite list" key="2">
              <Col>
                {cardInfo.map(renderCard)}
                {cardInfo.map(renderCard)}
                </Col>
              </TabPane>
              <TabPane tab="Reading later" key="3">
              <Col>
              <ExampleComment>
            <ExampleComment>
              <ExampleComment />
              <ExampleComment />
            </ExampleComment>
          </ExampleComment>
              </Col>
              <Pagination style={{marginTop:10,float:"right"}} defaultCurrent={1} total={50} />
              </TabPane>
              
            </Tabs>
          </div>

          <div style={{height:50,background:"#adb6c4", marginTop:10}}>THIS IS THE FOOTER</div>
        </div>
    )
  }
  export default UserDetail;
  