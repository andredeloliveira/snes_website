import React from 'react';
import styled from 'styled-components';
import { secondary } from '../../layout/colors'

const AboutContainer = styled.div`
  text-align: center;
  margin: 20px;
  width: 80%;
  font-size: 12px;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const SocialItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 14px;
  &:hover {
    text-decoration: none;
  }
  
`;

const SocialContentText = styled.span`
  margin-left: 10px;
  color: ${secondary};
`;

const Social = () => (
  <React.Fragment>
    <p>Find me in the web</p>
    <SocialContainer>
      <SocialItem href="https://www.github.com/andredeloliveira" target="_blank">
        <i className="nes-icon github is-large"></i> <SocialContentText>Github</SocialContentText>
      </SocialItem>
      <SocialItem href="https://www.linkedin.com/in/andredeoliveira1/" target="_blank">
        <i className="nes-icon linkedin is-large"></i> <SocialContentText>LinkedIn</SocialContentText>
      </SocialItem>
    </SocialContainer>
  </React.Fragment>
);

const About = () => (
  <AboutContainer>
    <p>
      Hi! I'm Andre de Oliveira, a Software Engineer who loves functional programming.
      </p>
    <p>
      I'm pretty much a functional guy, so, functional stuff.
      There are  some other topics that keep me interested like: Music, Health, Fitness and Biohacking.
      </p>
    <p>
      In this blog, you'll find many interesting stuff, but the main topic probably will be programming.
      Any request, suggestion or cuddles, send me an e-mail to: oliveira.andrede@gmail.com
      </p>
    <Social />
  </AboutContainer>
)

export default About;