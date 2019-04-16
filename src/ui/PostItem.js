import React from 'react';
import styled from 'styled-components';

export const PostContent = styled.div`
  width: 80%;
  padding: 20px;
`;

export const PostSection = styled.section`
  margin-top: 60px;
`

const ReadMore = styled.a`
  position: sticky;
  float: right;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const PostItem = ({ id, title, shortText}) => (
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