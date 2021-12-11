import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    Label,
    CustomInput
} from 'reactstrap'

import { Fragment, useState } from 'react'
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const NumberForm = () => {
    const [picker, setPicker] = useState(new Date())
    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Find Out Your Magic Number</CardTitle>
            </CardHeader>

            <CardBody>
                <Form>
                    <Row>
                        <Col sm='12'>
                            <FormGroup>
                                <Label for='nameVertical'>Input Your Fullname</Label>
                                <Input type='text' name='name' id='nameVertical' placeholder='Full Name' />
                            </FormGroup>
                        </Col>
                        <Col sm='12'>
                            <FormGroup>
                                <Fragment>
                                    <Label for='default-picker'>Select Your Date of Birth</Label>
                                    <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                                </Fragment>
                            </FormGroup>
                        </Col>
                        <Col sm='12'>
                            <FormGroup className='d-flex mb-0'>
                                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                                    See Result
                                </Button.Ripple>
                                <Button.Ripple outline color='secondary' type='reset'>
                                    Reset
                                </Button.Ripple>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}
export default NumberForm
