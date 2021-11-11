import React, { useState } from 'react';
import './UserDetail.css'
import {Avatar, Tabs,Card, Image,Col, Row,Button, Radio } from 'antd';
const { TabPane } = Tabs;
const { Meta } = Card;
function UserDetail(){    
      return (
        <div className="mainBody">
            <div className="wallpaper">
                <Image src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></Image>
            </div>
            <Card className="panel-user" style={{ height: 400 }}>
            <Col  align="middle">
                <Avatar className="avatar" alt="example" style={{ height: 150, width:150 }} 
                            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
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
                <Card title="post1"></Card>
                <Card title="post2"></Card>
                <Card title="post3"></Card>
            </Col>
          </TabPane>
          <TabPane tab="Favorite list" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Reading later" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
      </div>
        </div>
    )
  }
  export default UserDetail;
  