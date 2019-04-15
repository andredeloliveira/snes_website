import React from 'react';
import styled from 'styled-components';
import Navbar from './layout/Navbar'
import MainContainer from './layout/MainContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppContainer = styled.div`
  font-family: 'Press Start 2P', cursive;
`;

const Blog = () => <div>Blog</div>
const About = () => <div>About</div>

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
