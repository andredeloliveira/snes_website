import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   margin: 60px;
 `;

const MainContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default MainContainer;