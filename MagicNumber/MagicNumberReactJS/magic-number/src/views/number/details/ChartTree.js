import React, { Component } from 'react';
import { Line } from 'react-lineto';
import { Button, Labelk, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import "./index.css";
import Pyramid from '@src/assets/images/pyramid-line.png'

const PyramidNumber = ({ dateNumber, monthNumber, yearNumber }) => {

    const firstLayer = {
        "Month": dateNumber,
        "Date": monthNumber,
        "Year": yearNumber
    }

    const secondLayer = {
        "Month_Date": 6,
        "Date_Year": 4,
    }

    const thirdLayer = 0;

    const fourthLayer = 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Sau đây là kim tự tháp ngày sinh của bạn</CardTitle>
            </CardHeader>
            <CardBody>
                <div className="pyramid" style={{ padding: '40px', height: '450px' }}>
                    <div style={{ paddingLeft: '50px' }}></div>
                    <div className='pyramid-line' style={{
                        top: '40px',
                        backgroundImage: `url(${require("@src/assets/images/pyramid-line.png").default})`,
                        width: "830px",
                        height: "300px",
                        backgroundSize: "cover",
                    }}
                    />
                    <Button.Ripple className='rounded-circle Layer 4' color='primary' style={{ width: '60px', height: '60px', left: '490px' }}>
                        {fourthLayer}
                    </Button.Ripple>

                    <Button.Ripple className='rounded-circle Layer 1' color='primary' style={{ width: '60px', height: '60px', top: '320px', left: '80px' }}>
                        {firstLayer.Month}
                    </Button.Ripple>
                    <Button.Ripple className='rounded-circle Layer 1' color='primary' style={{ width: '60px', height: '60px', top: '330px', left: '488px' }}>
                        {firstLayer.Year}
                    </Button.Ripple>
                    <Button.Ripple className='rounded-circle Layer 1' color='primary' style={{ width: '60px', height: '60px', top: '320px', left: '900px' }}>
                        {firstLayer.Date}
                    </Button.Ripple>

                    <Button.Ripple className='rounded-circle Layer 3' color='primary' style={{ width: '60px', height: '60px', top: '150px', left: '490px' }}>
                        {thirdLayer}
                    </Button.Ripple>

                    <Button.Ripple className='rounded-circle Layer 2' color='primary' style={{ width: '60px', height: '60px', top: '250px', left: '290px' }}>
                        {secondLayer.Month_Date}
                    </Button.Ripple>
                    <Button.Ripple className='rounded-circle Layer 2' color='primary' style={{ width: '60px', height: '60px', top: '250px', left: '690px' }}>
                        {secondLayer.Date_Year}
                    </Button.Ripple>

                </div>
            </CardBody>

        </Card>
    );
}
export default PyramidNumber;

