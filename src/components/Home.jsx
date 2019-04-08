import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to EZCTF</h2>
          <p>We play Capture the Flag games here.</p>
          <Link to="/challenges">
            <Button variant="primary">Hack the Planet!</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <h3>Column 1</h3>
            <p>It's amazing what you can do with a little love in your heart. Maybe, just to play a little, we'll put a little tree here. Let's put some happy trees and bushes back in here.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            
            <h3>Column 2</h3>
            <p>Maybe there's a happy little Evergreen that lives here. That's what makes life fun. That you can make these decisions. That you can create the world that you want. The light is your friend. Preserve it. What the devil. Clouds are free. They just float around the sky all day and have fun.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            
            <h3>Column 3</h3>
            <p>You're meant to have fun in life. Those great big fluffy clouds. In your imagination you can go anywhere you want. How do you make a round circle with a square knife? That's your challenge for the day.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
