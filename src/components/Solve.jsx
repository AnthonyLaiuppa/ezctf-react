import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default class Solve extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { show: props.modal };


    this.state = {
      show: false,
    };
  }
  componentWillReceiveProps(nextProps){
		if(this.state.show!==nextProps.modal){
			this.setState({show: nextProps.modal})
      }
    }

  render() {

  	let close = () => this.setState({ show: false});

    return (

        <Modal show={this.state.show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Challenge Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>The text of the challenge will go here</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" onClick={close}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
    )
  }

}