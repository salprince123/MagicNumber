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
/**
 * This is a React function component.
 * @param {Object} targetURL
 * @param {Object} targetURL.location
 * @param {String} targetURL.location.pathname
 */
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const NumberForm = () => {
    const temp= window.location.href.replace("http://localhost:3000/find-number/result/","").replace("%7D","").replace("&","\\").replaceAll("%20"," ")
    const array = temp.split("\\")
    const url="http://localhost:7999/api/Number/SubmitForm"
    const tempData={
        "NumberID": "",
        "Title": "",
        "Detail":"ahahah" 
        }
    const [name, setName]= useState(array[1])
    const [birthday, setBirthday]= useState(array[0])
    const [data, setData]= useState(null)    
    useEffect(() => {     
        axios.get(url, {
            params: {
                date: birthday
            }
        }).then(res => setData(res.data[0]));
      }, [])

    return (
        <div>
        {data !== null ? (        
        <Card>            
            <CardHeader>
                <CardTitle tag='h4'>Con số chủ đạo của bạn là {data.NumberID[2]}{data.NumberID[3]}</CardTitle>
            </CardHeader>
            <CardBody>
                <Label >{data.Detail}</Label>
            </CardBody>
        </Card>
        ) : null}
        </div>
    )
}
export default NumberForm
