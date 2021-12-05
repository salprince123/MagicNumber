
import { Avatar, Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useAxiosGet, useAxiosGetWithHeader, useAxiosGetWithQuery } from '../../MyAPI/Axios';
import './MainPage.css'
import TopTrending from './TopTrending';
const { Meta } = Card;

function MainPage(){
    return (
        <TopTrending></TopTrending>
    )



}
export default MainPage;
