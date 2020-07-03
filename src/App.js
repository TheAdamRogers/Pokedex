import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import DetailPage from './Screens/DetailPage/DetailPage';
import Pokedex from './Screens/Pokedex/Pokedex';

const AppContainer = styled.div`
  text-align: center;
  background-color: #282B34;
  flex: 1;
  display: flex;
  min-height: 100vh;
`;

const TopRight = styled.div`
  position: absolute;
  background-color: red;
  height: 200px;
  width: 200px;
  right: 0px;
  -webkit-clip-path: polygon(0px 50px,150px 200px,200px 200px,200px 0px,0px 0px);
`;

const BottomLeft = styled.div`
  position: absolute;
  background-color: red;
  height: 200px;
  width: 200px;
  left: 0px;
  bottom: 0px;
  -webkit-clip-path: polygon(0px 200px,200px 200px,200px 150px,50px 0px,0px 0px);
`;
 
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <Router>
        <AppContainer>
          <TopRight /> 
          <BottomLeft />
          <Route path="/" exact component={Pokedex} />
          <Route path="/pokemon/:pokeID" exact component={DetailPage} />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
