import React, { Component } from 'react';
import './App.css';
import { Button, Col, Grid, Modal, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.options = [
      {id: 0, name:'?', src: require('./assets/icons/interr.png')},
      {id: 1, name:'PIEDRA', src: require('./assets/icons/piedra.png')},
      {id: 2, name: 'PAPEL', src: require('./assets/icons/papel.png')},
      {id: 3, name: 'TIJERAS', src: require('./assets/icons/tijeras.png')}
    ];
    this.state = {
      countPlayer:0,
      countPc:0,
      show: false,
      result: '',
      image: this.options[0].src,
      imagePc: this.options[0].src
    }
  }

  onChangeImage(e, image, id) {
    this.setState({image});
    this.randomNum = Math.floor(Math.random() * 3) + 1 ;//1, 3, 2
    let imagePc = this.options[this.randomNum].src;
    this.setState({imagePc});
    this.onValues(id, this.randomNum);
  }

  onValues(id, random){
    if ((id === 1 && random === 3) || (id === 2 && random === 1) || (id === 3 && random === 2)){
      //1= piedra 3 = tijera             2= papel, 1=piedra             3= tijera, 2= papel
      this.setState({countPlayer : this.state.countPlayer + 1, result: 'GANASTE!!!!'});
      this.handleShow();
    } else if (id === random){
      let result = 'empate';
      this.setState({result});
    } else {
      this.setState({countPc : this.state.countPc + 1, result: 'PC Gana!!! :('});
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
            <p>{this.state.result}</p>
          <Grid>
              <Row className="show-grid padding">
                <Col md={6} >
                  <p className="p-title">YOUR SCORE: {this.state.countPlayer} </p>                  
                  <div className="div-style">
                        <img src={this.state.image} id="img" alt=""/>
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
                        <img src={this.state.imagePc} id="pcImg" alt=""/>
                    </div> 
                </Col>
              </Row>
          </Grid>
          <Modal show={this.state.show}>
          <Modal.Body><p className="win">YOU WIN!!!</p></Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={() => this.handleClose()}>CONTINUE</Button>
          </Modal.Footer>
        </Modal>
        <p className="p-title"></p>
        </header>
      </div>
    );
  }
}

export default App;