import React, { Component } from 'react';
import './App.css';
import { Button, Col, Grid, Modal, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.options = [
      {id: 0, name:'?', src: require('./assets/icons/interr.png')},
      {id: 1, name:'ROCK', src: require('./assets/icons/piedra.png')},
      {id: 2, name: 'PAPER', src: require('./assets/icons/papel.png')},
      {id: 3, name: 'SCISSORS', src: require('./assets/icons/tijeras.png')}
    ];
    this.state = {
      countPlayer:0,
      countPc:0,
      show: false,
      result: ''
    }
  }

  onChangeImage(e, buttonValue, id){
    document.getElementById("img").src = buttonValue;
    this.randomNum = Math.floor(Math.random() * 3) + 1 ;
    document.getElementById("pcImg").src = this.options[this.randomNum].src;
    this.onValues(id, this.randomNum);
  }

  onValues(playerVal, pcVal){
    if((playerVal === 1 && pcVal === 3 )|| (playerVal === 2 && pcVal === 1 )|| (playerVal === 3 && pcVal === 2 )){
      this.setState({countPlayer : this.state.countPlayer + 1})
      this.handleShow();
    }
    else if (playerVal === pcVal) {
      this.setState({result : 'TIE!'})   
    } else {
      this.setState({countPc : this.state.countPc + 1, result: 'PC WIN :('})
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <p className="title">Let's play rock, paper, scissors!</p>
          <Grid>
              <Row className="show-grid padding">
                <Col md={6} >
                  <p className="p-title">YOUR SCORE: {this.state.countPlayer}</p>                  
                  <div className="div-style">
                        <img src={this.options[0].src} id="img" alt=""/>
                  </div>
                  <div>
                  <Button bsStyle="warning" onClick={(e) => this.onChangeImage(e, this.options[1].src, this.options[1].id)}>{this.options[1].name}</Button>
                  <Button bsStyle="warning" onClick={(e) => this.onChangeImage(e, this.options[2].src, this.options[2].id)}>{this.options[2].name}</Button>
                  <Button bsStyle="warning" onClick={(e) => this.onChangeImage(e, this.options[3].src, this.options[3].id)}>{this.options[3].name}</Button>
                  </div>
                </Col>
                <Col md={6} >
                  <p className="p-title">PC'S SCORE: {this.state.countPc}</p>
                    <div className="div-style">
                        <img src={this.options[0].src} id="pcImg" alt=""/>
                    </div> 
                </Col>
              </Row>
          </Grid>
          <Modal show={this.state.show} >
          <Modal.Body><p className="win">YOU WIN!!!</p></Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={() => this.setState({ show: false })}>CONTINUE</Button>
          </Modal.Footer>
        </Modal>
        <p className="p-title">{this.state.result}</p>
        </header>
      </div>
    );
  }
}

export default App;