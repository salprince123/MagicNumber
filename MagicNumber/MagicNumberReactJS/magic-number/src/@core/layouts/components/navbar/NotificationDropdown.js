// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import { useState } from 'react'
// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell, X, Check, AlertTriangle } from 'react-feather'
import {
  Button,
  Badge,
  Media,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const NotificationDropdown = () => {
  // ** Notification Array
 
  const notificationsArray = [
    {
      img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      subtitle: 'Bài viết của bạn có 10 bình luận mới',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Bình luận mới</span>&nbsp;
        </Media>
      )
    },
    {
      title: <h6 className='font-weight-bolder mr-auto mb-0'>Thông báo của hệ thống</h6>,
      switch: <CustomInput type='switch' id='primary' name='primary' inline defaultChecked />
    },
    {
      avatarIcon: <X size={14} />,
      color: 'light-danger',
      subtitle: 'Hệ thống bảo trì vào 20/12/2021',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Bảo trì hệ thống</span>&nbsp;
        </Media>
      )
    }
  ]
  const [author, setAuthor]= useState(JSON.parse(localStorage.getItem('userData')))
  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
     
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <Media left>
                      <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 32, imgWidth: 32 }
                          : item.avatarContent
                          ? {
                              content: item.avatarContent,
                              color: item.color
                            }
                          : item.avatarIcon
                          ? {
                              icon: item.avatarIcon,
                              color: item.color
                            }
                          : null)}
                      />
                    </Media>
                    <Media body>
                      {item.title}
                      <small className='notification-text'>{item.subtitle}</small>
                    </Media>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </Media>
            </a>
          )
        })}
      </PerfectScrollbar>
        
    )
  }
  /*eslint-enable */

  return (
    <div>
    {author['username'] != "Guest" ? (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
        <Bell size={21} />
        <Badge pill color='danger' className='badge-up'>
          5
        </Badge>
      </DropdownToggle>
      <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 mr-auto'>Thông báo</h4>
            <Badge tag='div' color='light-primary' pill>
              1 thông báo mới
            </Badge>
          </DropdownItem>
        </li>
        {renderNotificationItems()}
        <li className='dropdown-menu-footer'>
          <Button.Ripple color='primary' block>
            Xem tất cả
          </Button.Ripple>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
    ):<></>}
    </div>
  )
}

export default NotificationDropdown
