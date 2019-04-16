import React from 'react';
// import styled from 'styled-components';
import Post from '../../ui/PostItem';

const fakeContent = [
  { 
    id: 1,
    title: "Why being so functional?", 
    shortText: "Sometimes I asked myself why I've change my perspective for functions",
  },
  {
    id: 2,
    title: "The benefits of Biohackling",
    shortText: "You too can become some sort of Robocop without the need to be a robot neither a cop",
  },
];

const Posts = () => fakeContent.map(post => 
  <Post key={post.id} title={post.title} shortText={post.shortText} id={post.id} />
)

const Blog = () => <Posts />

export default Blog;