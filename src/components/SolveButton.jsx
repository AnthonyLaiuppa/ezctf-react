import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Solve from './Solve';

export default class SolveButton extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
      show: false,
      data: props.data,
    };



  }

  componentWillReceiveProps(nextProps){
			this.setState({data: nextProps.data})
    }

  render() {


    return (

      <div>
        <Button variant="primary" onClick={() => this.setState({ show: true})}> Solve </Button>
        {console.log(this.state.data)}
        <Solve modal={this.state.show} data={this.state.data}/>
      </div>
      

    )
  }

}