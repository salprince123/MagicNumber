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
import ChartTree from "./ChartTree";
import "./index.css";
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const NumberForm = () => {
    const temp= window.location.href.replace("http://localhost:3000/find-number/result/","").replace("%7D","").replace("&","\\").replaceAll("%20"," ")
    const array = temp.split("\\")
    const url="http://localhost:7999/api/Number/SubmitForm"
    const mainNumber={
        "NumberID": "",
        "Title": "",
        "Detail":"ahahah" 
    }
    const tempData={
        "returnNumber":mainNumber,
        "birthdayChart": []
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
        <div>
        <Card>            
            <CardHeader>
                <CardTitle tag='h4'>Bạn sinh ngày {birthday[0]}{birthday[1]}/{birthday[2]}{birthday[3]}/{birthday[4]}{birthday[5]}{birthday[6]}{birthday[7]}</CardTitle>
                </CardHeader>
            <CardHeader>
                <CardTitle tag='h4'>Con số chủ đạo(con số đường đời) của bạn là {data.returnNumber.NumberID[2]}{data.returnNumber.NumberID[3]}</CardTitle>
            </CardHeader>
            <CardBody>
                <Label >{data.returnNumber.Detail}</Label>
               
            </CardBody>
        </Card>
        <Card>            
            <CardHeader>
                <CardTitle tag='h4'>Sau đây là biểu đồ ngày sinh của bạn</CardTitle>
            </CardHeader>
            <CardBody>                
                <div class="board">
                    <button disabled={true} class="squares">{data.birthdayChart[3]}</button>
                    <button disabled={true} class="squares">{data.birthdayChart[6]}</button>
                    <button disabled={true} class="squares">{data.birthdayChart[9]}</button>

                    <button disabled={true} class="squares">{data.birthdayChart[2]}</button>
                    <button disabled={true} class="squares">{data.birthdayChart[5]}</button>
                    <button disabled={true} class="squares">{data.birthdayChart[8]}</button>

                    <button disabled={true} class="squares">{data.birthdayChart[1]}</button>
                    <button disabled={true} class="squares">{data.birthdayChart[4]}</button>
                    <button disabled={true} class="squares">{data.birthdayChart[7]}</button>
                    
                </div>
                
            </CardBody>
        </Card>
        </div>
        ) : null}
        </div>
    )
}
export default NumberForm
