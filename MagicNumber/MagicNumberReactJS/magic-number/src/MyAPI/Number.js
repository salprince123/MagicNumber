import { Component } from "react";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonToolbar} from 'react-bootstrap';
export class Number extends Component{
  constructor(props){
    super(props);
    this.state={deps:[], addModalShow:false, editModalShow:false}
  }

  refreshList(){
      fetch('http://localhost:55675/api/number')
      .then(response=>response.json())
      .then(data=>{
          this.setState({deps:data});
      });
  }

  componentDidMount(){
      this.refreshList();
  }

  componentDidUpdate(){
      this.refreshList();
  }
    render(){
      const {deps}=this.state;
      return(
          <div >
              <Table className="mt-4" striped bordered hover size="sm">
                  <thead>
                      <tr>
                          <th>Number ID</th>
                      <th>Title</th>
                      <th>Detail</th>
                      <th>Options</th>
                      </tr>
                  </thead>
                  <tbody>
                      {deps.map(dep=>
                          <tr key={dep.NumberID}>
                              <td>{dep.NumberID}</td>
                              <td>{dep.Title}</td>
                              <td>{dep.Detail}</td>
                              <td>
                                <ButtonToolbar>
                                  <Button className="mr-2" variant="info">
                                          Edit
                                      </Button>

                                      <Button className="mr-2" variant="danger">
                                          Delete
                                      </Button>

                                </ButtonToolbar>

                              </td>

                          </tr>)}
                  </tbody>

              </Table>
          </div>
      )
  }
}
export default Number;