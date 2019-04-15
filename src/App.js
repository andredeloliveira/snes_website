import React from 'react';
import styled from 'styled-components';
import Navbar from './layout/Navbar'
import MainContainer from './layout/MainContainer';
import PostItem from  './ui/PostItem';
const AppContainer = styled.div`
  font-family: 'Press Start 2P', cursive;
`;


const App = () => (
  <AppContainer> 
    <Navbar />
    <MainContainer>
      <PostItem />
    </MainContainer>
  </AppContainer>
);

export default App;
