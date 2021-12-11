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

import { Fragment, useState, useEffect, useCallback } from 'react'
import Flatpickr from 'react-flatpickr'
import { Link } from 'react-router-dom'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import axios from 'axios'
import { format } from "date-fns";


const NumberForm = () => {
    const tempData = {
        "NumberID": "",
        "Title": "",
        "Detail": "ahahah"
    }
    const [picker, setPicker] = useState(new Date())
    const [data, setData] = useState(tempData)
    const [name, setName]= useState("default")
    const url = "http://localhost:7999/api/Number/SubmitForm"
    const findNumber = () => {
        e.preventDefault();
        alert(picker);
        /*if (isSending) return
        setIsSending(true)*/
        // send the actual request
        //change Date into string
        var temp = new Date(picker);
        var month0 = temp.getMonth() + 1;
        var month = ("0" + month0).slice(-2)
        var day = ("0" + temp.getDate()).slice(-2)
        var fullDate = day + "/" + month + "/" + temp.getFullYear()
        // complete change Date into string
        
        /*setData(tempData);
        await
            axios.get(url, {
                params: {
                    date: fullDate
                }
            }).then(res => setData(res.data));
        setIsSending(false)
        if (data != null)
            alert(JSON.stringify(data))*/
    }    
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
                                <Input type='text' id='nameVertical' placeholder='Full Name' onChange={e => setName(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col sm='12'>
                            <FormGroup>
                                <Fragment>
                                    <Label for='default-picker'>Select Your Date of Birth</Label>
                                    <Flatpickr className='form-control' options={{
                                        dateFormat: "d-m-Y",
                                    }} value={picker} onChange={date => setPicker(date[0])} id='default-picker' />
                                </Fragment>
                            </FormGroup>
                        </Col>
                        <Col sm='12'>
                            <FormGroup className='d-flex mb-0' >
                                <Link to={`/find-number/result/${("0" + picker.getDate()).slice(-2)}${("0" + (picker.getMonth()+1)).slice(-2)}${picker.getFullYear()}&${name}}`} >
                                    <Button.Ripple className='mr-1' color='primary' type='submit' >
                                        See Result
                                    </Button.Ripple>
                                </Link>
                                <Button.Ripple outline color='secondary' type='reset'>
                                    Reset
                                </Button.Ripple>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card >
    )
}
export default NumberForm
//{format(picker, "dd/MM/yyyy")
//${("0" + picker.getDate()).slice(-2)}${("0" + picker.getMonth()+1).slice(-2)}${picker.getFullYear()}&${name}}`