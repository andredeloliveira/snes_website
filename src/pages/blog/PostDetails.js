import React, { useEffect, useState } from 'react';
import { PostSection, PostContent } from '../../ui/PostItem'
import blogServices from './services';

const PostDetails = (props) => {
  const { match: { params: { id } } } = props;
  const [post, setPost] = useState({});
  useEffect(() => {
    blogServices.blog.getPost(id)
      .then(resp => resp.json())
      .then(json => setPost(json.data));
  }, []);
  return (
    <PostSection className="nes-container with-title">
      <h3 className="title">{post && post.title}</h3>
      <PostContent>
        {post && post.body}
      </PostContent>
    </PostSection>
  );
}

export default PostDetails; 