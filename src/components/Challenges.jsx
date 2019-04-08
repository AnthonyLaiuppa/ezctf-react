import React, { Component } from 'react';
import { Container, Spinner, Card, CardColumns, Badge, Button } from 'react-bootstrap';
import Solve from './Solve'
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

  //We'll get ID or something passed in to this component to feed in here for the fetch
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
          <CardColumns>
          {items.map(item => ( 
            <Card key={item.id} className="text-center">
              <Card.Header as="h5">        <div>
                <Badge pill variant="primary" className="pill-info">
                  Type: {item.Category}
                </Badge>&nbsp;
                <Badge pill variant="secondary" className="pill-info">
                  Points: {item.Points}
                </Badge>&nbsp;
                <Badge pill variant="success" className="pill-info">
                  Solves: {item.Solves}
                </Badge>&nbsp;
                </div></Card.Header>
                <Card.Body>
                  <Card.Title>{item.Name}</Card.Title>
                  <Solve modal={this.state.show} />

                  <Button variant="info" onClick={() => this.setState({ show: true})}>Solve</Button>

                  <Card.Text>
                    <small> Last Updated: {item.updated_at}  </small> 
                  </Card.Text>
              </Card.Body>
            </Card>
          ))}
          </CardColumns>
        </Container>
      </div>
    )
  }
}
