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

import { Fragment, useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'


const NumberForm = () => {
    const [picker, setPicker] = useState(new Date())
    const [data, setData]= useState("test")    
    const findNumber= (e) =>
    {
        e.preventDefault();
        setData("ahaha");
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Find Out Your Magic Number</CardTitle>
            </CardHeader>

            <CardBody>
                <Form onSubmit={findNumber}>
                    <Row>
                        <Col sm='12'>
                            <FormGroup>
                                <Label for='nameVertical'>Input Your Fullname</Label>
                                <Input type='text' id='nameVertical' placeholder='Full Name' />
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
                                <Button.Ripple className='mr-1' color='primary' type='submit'>
                                    See Result
                                </Button.Ripple>
                                <Button.Ripple outline color='secondary' type='reset'>
                                    Reset
                                </Button.Ripple>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                {data}
            </CardBody>
        </Card>
    )
}
export default NumberForm
