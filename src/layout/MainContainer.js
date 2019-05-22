import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   margin-top: 50px;
   margin-bottom: 50px;
   margin-left: 16px;
   margin-right: 15px;
 `;

const MainContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default MainContainer;