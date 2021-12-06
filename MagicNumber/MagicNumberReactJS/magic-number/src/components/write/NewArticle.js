import { Button } from "antd/lib/radio";
import { useState } from "react";
import { Input } from "antd";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const { TextArea } = Input;
const NewArticle = () => {   
  const [aTitle, setTitle] = useState('Title');
  const [aDetail, setDetail] = useState('Detail');
  const url="http://localhost:7999/api/Article/Add" ;
  const staticData={
    Title: aTitle,
    ImageLink: "https://www.studytienganh.vn/upload/2021/05/98114.jpg",
    Detail: aDetail,
    Upvote: "0",
    AuthorID: "admin",
    ArticleTypeID: "type2"
  }
  function sendRequest(){    
    axios.post(url, staticData)
        .then(function (response) {
          alert(response.data + aTitle);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  return(
      <div className="inputForm">
      <br/>
    <Input  size="large" placeholder="Your Title here"  onChange={e => setTitle(e.target.value)} ></Input>
    <ReactQuill  placeholder="Your text here"  onChange={setDetail}>    
    </ReactQuill>

      <br/>
      <br/>
      <Button style={{position: 'absolute', right : '40%',transform: 'translate(-50%, -50%)'}}
          onClick={sendRequest}>
        Xuất bản
      </Button>
  </div>
  )
}
export default NewArticle;