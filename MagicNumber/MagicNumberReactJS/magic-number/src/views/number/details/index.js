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

const NumberForm = () => {
    const tempData={
        "NumberID": "",
        "Title": "",
        "Detail":"ahahah" 
        }
    const [data, setData]= useState(tempData)    

    useEffect(() => {
      }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Your Magic Number Is {data.NumberID}</CardTitle>
            </CardHeader>
            <CardBody>
                <Label >{data.Detail}</Label>
            </CardBody>
        </Card>
    )
}
export default NumberForm
