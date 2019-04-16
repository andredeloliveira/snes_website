import React from 'react';
import styled from 'styled-components';

// I'll have everything related to Code here.

const CodeContainer = styled.section`
  font-family: 'Source Code Pro', monospace;
`;



const Code = () => (
  <CodeContainer className="nes-container is-dark with-title">
      Some code that we have in here...
  </CodeContainer>
);

export default Code;