import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './layout/Navbar'
import MainContainer from './layout/MainContainer';
import Blog from './pages/blog';
import About from './pages/about';
import PostDetails from './pages/blog/PostDetails';
import CreatePost from './pages/blog/CreatePost';
import EditPost from './pages/blog/EditPost';
import Login from './pages/auth/Login';

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
        <Route path="/blog_edit/:id" component={EditPost} />
        <Route path="/publish" component={CreatePost} />
        <Route path="/login" component={Login} />
      </MainContainer>
    </AppContainer>
  </Router>
);

export default App;
