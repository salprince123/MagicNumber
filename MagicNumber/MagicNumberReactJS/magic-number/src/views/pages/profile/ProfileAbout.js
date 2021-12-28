import { Card, CardBody, CardText } from 'reactstrap'

const ProfileAbout = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <h5 className='mb-75'>Giới thiệu bản thân</h5>
        <CardText>{data.About}</CardText>
        
      </CardBody>
    </Card>
  )
}
/*<div className='mt-2'>
          <h5 className='mb-75'>Joined:</h5>
          <CardText>{data.joined}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Lives:</h5>
          <CardText>{data.lives}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Email:</h5>
          <CardText>{data.email}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Website:</h5>
          <CardText>{data.website}</CardText>
        </div> */
export default ProfileAbout
