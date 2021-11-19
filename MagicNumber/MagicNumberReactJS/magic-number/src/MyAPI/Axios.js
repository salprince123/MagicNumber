import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}
export function useAxiosGetWithQuery(url, params){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url,{params:params})
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}
export function useAxiosPost(url, data)
{
    const json = JSON.stringify(data);
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.post(url, json)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }, [url])

    return request
}
export default axios.create({
    baseURL: "http://localhost:7999/api/Article/Add",
    headers: {
        "Title": "Test 19200",
        "ImageLink": "https://www.studytienganh.vn/upload/2021/05/98114.jpg",
        "Detail": "hahaha",
        "Upvote": "0",
        "AuthorID": "admin",
        "ArticleTypeID": "type2"
    }
  });