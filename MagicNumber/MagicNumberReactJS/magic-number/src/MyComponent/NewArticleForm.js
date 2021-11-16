import { Input } from "antd";
import { Button } from "antd/lib/radio";
import { Component } from "react";
import "./NewArticleForm.css";
const { TextArea } = Input;
function NewArticleForm () {
    const onChange = e => {
        console.log('Change:', e.target.value);
      };
    
        return(
            <div className="inputForm">
                <br/>
               <Input size="large" placeholder="Your Title here" onIn  ></Input>
               <TextArea showCount maxLength={2000} placeholder="Detail"
                autoSize={{ minRows: 3 }}></TextArea>
                <br/>
                <br/>
                <Button style={{
                    position: 'absolute', right : '40%',
                    transform: 'translate(-50%, -50%)'
                                }}>Xuất bản</Button>
            </div>
        );
        
    }

export default NewArticleForm;
