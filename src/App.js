import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './layout/Navbar'
import MainContainer from './layout/MainContainer';
import Blog from './pages/blog';
import About from './pages/about';

const AppContainer = styled.div`
  font-family: 'Press Start 2P', cursive;
`;


const App = () => (
  <Router>
    <AppContainer> 
      <Navbar />
      <MainContainer>
        <Route exact path="/" component={Blog} />
        <Route path="/about" component={About} />
      </MainContainer>
    </AppContainer>
  </Router>
);

export default App;
