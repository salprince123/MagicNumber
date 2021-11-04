import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const addNewArticle = () => {
    setVisible(true);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://localhost:3000/MainPage">Magic Number</a>
        </div>
       
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="http://localhost:3000/MainPage" title="MainPage" />
            <Link href="#about" title="About" />
            
            
            <Button type="primary" className="button-add-article" >
              <a href="http://localhost:3000/NewArticle">Write</a>
            </Button>
          </Anchor>
          
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="http://localhost:3000/Home" title="Home" />
              <Link href="#about" title="About" />
              
              
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;