import React from 'react';
import styled from 'styled-components';

const PostContent = styled.div`
  width: 80%;
  padding: 20px;
`;

const ReadMore = styled.a`
  position: sticky;
  float: right;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const PostItem = () => (
  <section className="nes-container with-title">
    <h3 className="title">Some title</h3>
    <PostContent>
      Some really breaf comments about the blog post
    </PostContent>
    <ReadMore href="#" className="nes-btn is-success">
      Read more
    </ReadMore>
  </section>
);

export default PostItem;