import React, { Component } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import SolveButton from './SolveButton'
import './Challenges.css';

export default class Challenges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount(){
    this.fetchData();
  }

async fetchData(){

    await fetch('http://127.0.0.1:8080/api/v1/challenges/', {
      method: "GET",
      mode : "cors",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
    })
      .then((Response) => Response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
      .catch(error => console.log('Parsing failed', error)) 

      var sItems= this.groupBy(this.state.items, 'Category')
      this.setState.items = JSON.stringify(sItems)

  }


    groupBy(array, property) {
    var hash = {};
    for (var i = 0; i < array.length; i++) {
        if (!hash[array[i][property]]) hash[array[i][property]] = [];
        hash[array[i][property]].push(array[i]);
    }
    return hash;
  }

  render() {


    var {isLoaded, items} = this.state;

    if (!isLoaded){
      return (
        <div>
          <Container>
             <Spinner animation="grow" variant="primary" />
          </Container>
        </div> 
        );
    }
    return (
      <div>
        <br /><br />
        <Container>
          
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Points</th>
                <th>Solves</th>
                <th>Last Updated</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {items.map(row => (
              <tr key={row.id}>
                <td key={row.Name}>{row.Name}</td>
                <td key={row.Category}>{row.Category}</td>
                <td>{row.Points}</td>
                <td>{row.Solves}</td>
                <td key={row.updated_at}>{row.updated_at}</td>
                <td key={row}><SolveButton data={row}/></td>        
              </tr>
            ))}

            </tbody>
          </Table>   



        </Container>
      </div>
    )
  }
}