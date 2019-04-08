import React, { Component } from 'react'
import { Container, Col, Badge, Card, Button, Spinner } from 'react-bootstrap';
import './Challenge.css';

export default class Challenge extends Component {
  
  constructor(props){
      super(props);
      this.state = {
        isLoaded: false,
        ID: '',
        CreateAt: '',
        UpdatedAt: '',
        Name: '',
        Category: '',
        Solves: '',
        Points: '',
        Author: '',
        RawText: '',
      }
  }

  componentDidMount(){
    this.fetchData();

  }

  async fetchData(){

  //We'll get ID or something passed in to this component to feed in here for the fetch
  //This component is most used for debugging, will be removed for final version
    await fetch('http://127.0.0.1:8080/api/v1/challenge/c099b03b-8439-410e-9bae-4cbdac145e5c',{
      method: "GET",
      mode : "cors",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
    })
      .then((Response) => Response.json())
      .then((findresponse) => {
        this.setState({
          isLoaded: true,
          //ID: findresponse.id,
          CreatedAt: findresponse.created_at,
          UpdatedAt: findresponse.updated_at,
          Name: findresponse.Name,
          Category: findresponse.Category,
          Solves: findresponse.Solves,
          Points: findresponse.Points,
          Author: findresponse.Author,
          RawText: findresponse.RawText,
        })
      })
      .catch(error => console.log('Parsing failed', error)) 

  }

  render() {


    var { isLoaded, CreatedAt, UpdatedAt, Name, Category, Solves, Points, Author, RawText } = this.state;

    if (!isLoaded){
      return (
        <div>
          <Container>
            <Col xs={12} sm={6} >
             <Spinner animation="grow" variant="primary" />
            </Col>
          </Container>
        </div> 
        );
    }
    else{
      return (
      <div>
      <br />
        <Container>


  <Card className="text-center">
    <Card.Header as="h5">        <div>
          <Badge pill variant="primary" className="pill-info">
            Category: {Category}
          </Badge>&nbsp;
          <Badge pill variant="secondary" className="pill-info">
            Points: {Points}
          </Badge>&nbsp;
          <Badge pill variant="success" className="pill-info">
            Solves: {Solves}
          </Badge>&nbsp;
        </div></Card.Header>
    <Card.Body>
      <Card.Title>
       {Name}
      </Card.Title>
      <Card.Text>
        {RawText}
      </Card.Text>
      <Button variant="success">Answer</Button>
    </Card.Body>
    <Card.Footer className="text-muted">       
      Author: {Author} <br /> 
      <small> Created At: {CreatedAt}  </small> &nbsp;
      <small> Last Updated: {UpdatedAt}  </small> 
    </Card.Footer>
  </Card>


  </Container>
  </div>


      );
    }


  }
}
