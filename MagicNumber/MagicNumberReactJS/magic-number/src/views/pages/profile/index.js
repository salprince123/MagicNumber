import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UILoader from '@components/ui-loader'
import ProfileAbout from './ProfileAbout'
import ProfilePosts from './ProfilePosts'
import ProfileHeader from './ProfileHeader'
import { Row, Col, Button } from 'reactstrap'

import '@styles/react/pages/page-profile.scss'

const Profile = () => {
  const [data, setData] = useState(null)
  const [header, setHeader] = useState(null)
  const [block, setBlock] = useState(false)
  const url= "http://localhost:7999/api/User/GetByID"
  const handleBlock = () => {
    setBlock(true)
    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }

  useEffect(() => {
    axios.get(url,{
      params: {
        id: 'admin'
      }
    }).then(response => setHeader(response.data))
  }, [])

  useEffect(() => {
    axios.get('/profile/data').then(response => setData(response.data))
  }, [])
  return (
    <Fragment>
      {data !== null && header !== null ? (
        <div id='user-profile'>
          <Row>
            <Col sm='12'>
              <ProfileHeader data={header[0]} />
            </Col>
          </Row>
          <section id='profile-info'>
            <Row>
              <Col lg={{ size: 3, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
                <ProfileAbout data={header[0]} />
              </Col>
              <Col lg={{ size: 6, order: 2 }} sm={{ size: 12 }} xs={{ order: 1 }}>
              </Col>
            </Row>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
