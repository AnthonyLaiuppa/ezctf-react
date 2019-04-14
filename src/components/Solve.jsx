import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default class Solve extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
      show: props.modal,
      data: props.data,
     };



  }
  componentWillReceiveProps(nextProps){
		if(this.state.show!==nextProps.modal){
			this.setState({show: nextProps.modal})
      this.setState({data: nextProps.data})
      }
    }

  render() {

  	let close = () => this.setState({ show: false});
    var {data} = this.state;
    return (


        <Modal show={this.state.show} onHide={close}>

          {console.log(data.Name)}
          <div>
          <Modal.Header closeButton> 
            <Modal.Title>{data.Name} </Modal.Title>
          </Modal.Header>

          <Modal.Body>{data.RawText}</Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" onClick={close}>
              Submit
            </Button>
          </Modal.Footer>

          </div>

        </Modal>
    )
  }

}