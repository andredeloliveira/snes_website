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

  return posts && posts.map(post =>
    <Post key={post.slug} id={post.id} title={post.title} shortText={post.short_text} />
  );
}


const Blog = () => <Posts />

export default Blog;