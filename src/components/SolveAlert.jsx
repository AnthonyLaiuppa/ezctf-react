import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class SolveAlert extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
      alert: props.alert,
      status: props.status,
      variant: '',
      msg: '',
    };

    this.getVariant = this.getVariant.bind(this)

  }


  getVariant(){
    if (this.state.status === 200){
      this.setState({variant:'success'})
      this.setState({msg: 'Correct!'})
      return
    } else if (this.state.status === 403) {
      this.setState({variant:'danger'})
      this.setState({msg: "You've already solved this challenge!"})
      return
    } else if (this.state.status === 401) {
      this.setState({variant:'warning'})
      this.setState({msg: 'You must be logged in to submit an answer.'})
      return
    }else {
      this.setState({variant:'danger'})
      this.setState({msg: 'Incorrect answer!'})
      return
    }
  }


  componentDidMount(){
    this.getVariant();
  }


  componentWillUnmount(){
    this.setState.status = ''
    this.setState.alert = false
    this.setState.variant = ''
    this.setState.msg = ''
  }


  render() {

    //let close = () => this.setState({alert: false});
    var {alert, variant, status, msg} = this.state;
    return (

      <div>
        <Alert key={status} variant={variant} show={alert}>
          {msg}
        </Alert>
      </div>
      

    )
  }

}