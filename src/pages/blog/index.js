import React, { useEffect, useState } from 'react';
import blogServices from './services';
import Post from '../../ui/PostItem';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    blogServices.blog.getPosts()
      .then(response =>
        response.json()
      ).then(json => setPosts(json.data));
  }, []);

  if (posts && posts.length) {
    return posts.map(post =>
      <Post key={post.slug} id={post.id} title={post.title} shortText={post.short_text} />
    );
  } else {
    return "Oh man, there are still no posts, oh jeez"
  }
}


const Blog = () => <Posts />

export default Blog;