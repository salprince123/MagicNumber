import { Avatar, Card, Row } from "antd";

const CommentInfo = [    
    {
      Author: "",
      Avatar: "",
      Detail: "",
      Time: "",
      Upvote: "0"
    },
  ];
  const renderComment = (comment, index) => {
    return (
      <Card style={{height:90, marginTop:10}}>
      <Row style={{marginLeft:-25, marginTop:-25,maxHeight:90}}>
        <Avatar shape="square" style={{width:90,height:90}}
          src={comment.Avatar}/>
        <Col style={{marginLeft:10}}>
          <Row >
            <Text style={{textAlign:'left',fontSize:20}}>{comment.Detail}</Text>
          </Row>
          <Row>
            <Text style={{textAlign:'left',fontSize:15}}>{comment.Detail}</Text>
          </Row>
          <Row style={{marginTop:10}}>
            <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4 " }}>{comment.Author} at</Text>
            <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4 ",marginLeft:5 }}>{comment.Time}</Text>
          </Row>
        </Col>
        
      </Row>
    </Card>
     
    );
  };
function Comment(){    
    return (
        <div>
            {CommentInfo.map(renderComment)}
        </div>
  )
}
export default Comment;