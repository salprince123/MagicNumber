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
  const [block, setBlock] = useState(false)

  const handleBlock = () => {
    setBlock(true)
    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }

  useEffect(() => {
    axios.get('/profile/data').then(response => setData(response.data))
  }, [])
  return (
    <Fragment>
      {data !== null ? (
        <div id='user-profile'>
          <Row>
            <Col sm='12'>
              <ProfileHeader data={data.header} />
            </Col>
          </Row>
          <section id='profile-info'>
            <Row>
              <Col lg={{ size: 3, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
                <ProfileAbout data={data.userAbout} />
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
