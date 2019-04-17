import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Solve.css';


export default class Solve extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
      show: props.modal,
      data: props.data,
      flag: '',
      isLoading: false,
     };



  }
  status(response) {
      if (response.status >= 200 && response.status < 300) {
        console.log('Success!')
        return Promise.resolve(response)
      }else {
        console.log('Invalid flag')
        return Promise.reject()
      }
  }

  json(response) {
      return response.json()
  }

  getToken() {
     return 'Bearer ' + localStorage.getItem('token')
  }

  componentWillReceiveProps(nextProps){
		if(this.state.show!==nextProps.modal){
			this.setState({show: nextProps.modal})
      this.setState({data: nextProps.data})
      }
    }

  handleChange = event => {
      this.setState({
          [event.target.id]: event.target.value
    });
  }

  onSubmit(event){
    
    event.preventDefault();
    
    var submittal = {"Flag": this.state.flag}
    console.log(JSON.stringify(submittal))
    var solveURL = "http://127.0.0.1:8080/api/v1/solve/challenge/";
    var challenge = this.state.data.id;
    var res = solveURL.concat(challenge)
    console.log(res)
    this.setState({isLoading:true});

 
    setTimeout(() =>{
  
      fetch(res, {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': this.getToken()
        },
        body: JSON.stringify(submittal)
      })
      .then(this.status)
      .then(this.json)
      .then(function(data){
          console.log(data)
          //localStorage.setItem('token', data['token']);
        });
        
      this.setState.flag='';

      this.setState({ isLoading:false});
      this.setState({ show:false});
      
    
    }, 2000);


  }


  render() {

  	let close = () => this.setState({ show: false});
    var {data, isLoading} = this.state;
    return (


        <Modal show={this.state.show} onHide={close}>

          
          <div>
          <Modal.Header closeButton> 
            <Modal.Title>{data.Name} </Modal.Title>
          </Modal.Header>

          <Modal.Body>

            {data.RawText}
            <br /><hr />
            <Form onSubmit={!isLoading ? (event) => this.onSubmit(event) : null}>
              <Form.Group controlId="flag">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="ezctf{flag}" onChange={event => this.handleChange(event)} value={this.state.flag} />
                <Form.Text className="text-muted">
                   Submit your flag here.
                </Form.Text>
              </Form.Group>


              <Button variant="primary" type="submit" id="submitButton">
                Submit
              </Button>


            </Form>
            
          </Modal.Body>
          



          </div>

        </Modal>
    )
  }

}