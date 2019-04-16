import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './layout/Navbar'
import MainContainer from './layout/MainContainer';
import Blog from './pages/blog';
import About from './pages/about';
import PostDetails from './pages/blog/PostDetails';

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
        <Route path="/blog/:id" component={PostDetails} />
      </MainContainer>
    </AppContainer>
  </Router>
);

export default App;
