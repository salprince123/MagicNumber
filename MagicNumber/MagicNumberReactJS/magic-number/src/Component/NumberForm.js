import { Card, DatePicker } from "antd";
import { Button } from "antd/lib/radio";
import { Component } from "react";
export class NumberForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={deps:[],chooseDate :'17/06/2000' }

    }
    onDateSelection = (value, dateString) => {
        if(value)
            this.setState({chooseDate: value.format("DD/MM/YYYY")})
    }
    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:55675/api/Number/SubmitForm?date='+this.state.chooseDate )
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
        //alert(this.state.chooseDate);
    }
        render(){
            const {deps,chooseDate}=this.state;
            return(
                <div>
                    <div style={{
                    position: 'absolute', left: '35%', top: '14.5%',
                    transform: 'translate(-50%, -50%)'
                                }}>Birthday</div>
                    <DatePicker name="datepicker" style={{
                    position: 'absolute', left: '50%', top: '15%',
                    transform: 'translate(-50%, -50%)'
                                } 
                    }
                    format="DD/MM/YYYY"
                    onChange={this.onDateSelection}
                    />
                    <Button type="primary"  shape="round"  size="large"
                    style={{
                        position: 'absolute', left: '50%', top: '20%',
                        transform: 'translate(-50%, -50%)'
                                    }}
                    onClick={this.handleSubmit}
                    >
                    Submit
                    </Button>
                    
                    {deps.map(dep=>
                          <Card title={dep.Title} style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)'
                                        }}>
                              
                              <p>{dep.Title}</p>
                              <p>{dep.Detail}</p>
                          </Card>)}
                </div>
                
            )
            
    }
  }
export default NumberForm;