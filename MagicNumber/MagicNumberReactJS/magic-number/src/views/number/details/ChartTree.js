import React, { Component } from 'react';
import { Line } from 'react-lineto';
import { Button, Label } from 'reactstrap'

const PyramidNumber = ({ dateNumber, monthNumber, yearNumber }) => {

    const firstLayer = {
        "Month": 5,
        "Date": 1,
        "Year": 3
    }

    const secondLayer = {
        "Month_Date": 6,
        "Date_Year": 4,
    }

    const thirdLayer = 0;

    const fourthLayer = 0;

    function makeShape(x, y, n, initialAngle, side, lineLength, extraGap) {
        const elems = [];
        const angle = Math.PI - Math.PI / n;

        let x0 = x;
        let y0 = y;

        for (let i = 0, theta = initialAngle; i < n; i += 1, theta += angle) {
            const x1 = x0 + lineLength * Math.cos(theta) - extraGap;
            const y1 = y0 + lineLength * Math.sin(theta);
            if (side === "left")
                if (i != 0 && i != 1)
                    elems.push(<Line key={i} x0={x0} y0={y0} x1={x1} y1={y1} />);
            if (side === "right")
                if (i != 2 && i != 1)
                    elems.push(<Line key={i} x0={x0} y0={y0} x1={x1} y1={y1} />);
            x0 = x1;
            y0 = y1;
        }

        return elems;
    };
    const triangle = makeShape(520, 465, 3, Math.PI / 2, 'left', 500, 0);
    const triangle2 = makeShape(520, 465, 3, Math.PI / 6, 'right', 500, 0);

    const triangle3 = makeShape(547, 550, 3, Math.PI / 2, 'left', 200, 20);
    const triangle4 = makeShape(547, 550, 3, Math.PI / 6, 'right', 200, 20);

    const triangle5 = makeShape(333, 660, 3, Math.PI / 1.75, 'left', 200, 20);
    const triangle6 = makeShape(333, 660, 3, Math.PI / 6, 'right', 200, 20);

    const triangle7 = makeShape(759, 660, 3, Math.PI / 2, 'left', 200, 20);
    const triangle8 = makeShape(761, 660, 3, Math.PI / 9, 'right', 200, 20);
    return (
        <div className="pyramid" style={{ width: '50em', height: '30em' }}>
            <Button.Ripple className='rounded-circle Layer 4' color='primary' style={{ width: '60px', height: '60px', left: '63%' }}>
                {fourthLayer}
            </Button.Ripple>
            {triangle}
            {triangle2}
            <Button.Ripple className='rounded-circle Layer 1' color='primary' style={{ width: '60px', height: '60px', top: '60%' }}>
                {firstLayer.Month}
            </Button.Ripple>
            <Button.Ripple className='rounded-circle Layer 1' color='primary' style={{ width: '60px', height: '60px', top: '60%', left: '118%' }}>
                {firstLayer.Year}
            </Button.Ripple>
            <Button.Ripple className='rounded-circle Layer 1' color='primary' style={{ width: '60px', height: '60px', top: '60%', left: '45%' }}>
                {firstLayer.Date}
            </Button.Ripple>
            <Button.Ripple className='rounded-circle Layer 3' color='primary' style={{ width: '60px', height: '60px', top: '8%', left: '37%' }}>
                {thirdLayer}
            </Button.Ripple>
            {triangle3}
            {triangle4}
            <Button.Ripple className='rounded-circle Layer 2' color='primary' style={{ width: '60px', height: '60px', top: '20%', left: '32%' }}>
                {secondLayer.Month_Date}
            </Button.Ripple>
            <Button.Ripple className='rounded-circle Layer 2' color='primary' style={{ width: '60px', height: '60px', top: '20%', left: '84.5%' }}>
                {secondLayer.Date_Year}
            </Button.Ripple>
            {triangle5}
            {triangle6}
            {triangle7}
            {triangle8}
        </div>
    );
}
export default PyramidNumber;

