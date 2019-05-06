import React from 'react';
import styled from 'styled-components';

export const PostContent = styled.div`
  width: 80%;
  padding: 20px;
  margin-bottom: 24px;
  & pre {
    background-color: black;
    color: white;
    padding: 20px;
    text-align: left;
  }
  & code {
    font-family: 'Source Code Pro', monospace ;
  }
`;

export const PostSection = styled.section`
  margin-top: 60px;
  margin-bottom: 60px;
`

const ReadMore = styled.a`
  position: sticky;
  float: right;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const PostItem = ({ id, title, shortText }) => (
  <PostSection className="nes-container with-title">
    <h3 className="title">{title}</h3>
    <PostContent>
      {shortText}
    </PostContent>
    <ReadMore href={`/blog/${id}`} className="nes-btn is-success">
      Read more
    </ReadMore>
  </PostSection>
);

export default PostItem;