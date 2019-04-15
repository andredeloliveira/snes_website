import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width: 900px;
   margin-left: auto;
   margin-right: auto;
   margin-top: 40px;
 `;

const MainContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default MainContainer;