import { Card, DatePicker } from "antd";
import { Button } from "antd/lib/radio";
import { Component } from "react";
import { Input } from "antd";
import { useAxiosPost } from "../../MyAPI/Axios";
const { TextArea } = Input;
/**
 * This is a React function component.
 *
 * @param {String} data
 */
export class NewArticle extends Component{    
    constructor(props) {
        super(props);
        this.state = {
            value: 'this is the test detail of article',
            Title: "Sự kiện quan trọng nhất lịch sử châu Âu",
            ImageLink: "https://www.studytienganh.vn/upload/2021/05/98114.jpg",
            Detail: "hahaha",
            Upvote: "0",
            AuthorID: "admin",
            ArticleTypeID: "type2"
        } ;    
        this.url="http://localhost:7999/api/Article/Add";
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDetailChange = this.handleDetailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleTitleChange(event) {
        this.setState({value: event.target.Title});
      }
      handleDetailChange(event) {
        this.setState({value: event.target.Detail});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.Title + '\n' + this.state.Detail );
        event.preventDefault();        
      }
    render(){
        const {deps,data}=this.state;
        return(
            <div className="inputForm">
            <br/>
           <Input  size="large" placeholder="Your Title here"  onChange={this.handleTitleChange} ></Input>
           <TextArea onChange={this.handleDetailChange} 
           showCount maxLength={2000} placeholder="Detail"
            autoSize={{ minRows: 3 }}></TextArea>
            <br/>
            <br/>
            <Button style={{
                position: 'absolute', right : '40%',
                transform: 'translate(-50%, -50%)'
                            }}
                onClick={this.handleSubmit}
            >Xuất bản</Button>
        </div>
        )
            
    }
  }
export default NewArticle;