import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import './Login.css';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit= this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      email: '',
      password: '',
      isLoading: false,

    };

  }

  status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      }else {
        return Promise.reject()
      }
  }

  json(response) {
      return response.json()
  }

  onSubmit(event){
    
    event.preventDefault();
    
    var submittal = {"email": this.state.email, "password": this.state.password}
    console.log(JSON.stringify(submittal))
    var loginURL = "http://127.0.0.1:8080/login";
    this.setState({isLoading:true});

 
    setTimeout(() =>{
  
      fetch(loginURL, {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submittal)
      })
      .then(this.status)
      .then(this.json)
      .then(function(data){
          //console.log(data)
          localStorage.setItem('token', data['token']);
        });
        
      this.setState.email='';
      this.setState.password='';
      this.setState({ isLoading:false});
      this.props.history.push("/");
    
    }, 2000);


  }

  handleChange = event => {
      this.setState({
          [event.target.id]: event.target.value
    });
  }


  render() {
    const { isLoading } = this.state;
    return (
      
    <Container>
      <br /> <br />

      <Form onSubmit={!isLoading ? (event) => this.onSubmit(event) : null}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={event => this.handleChange(event)} value={this.state.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={event => this.handleChange(event)} value={this.state.password}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          {isLoading ? 'Logging in... ' : 'Submit'}
        </Button>
      </Form>
    </Container>
    )
  }
}
