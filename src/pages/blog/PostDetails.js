import React, { useEffect, useState } from 'react';
import parser from 'html-react-parser';
import { PostSection, PostContent, PostActions } from '../../ui/PostItem'
import blogServices from './services';

const parseStringToHTML = (str) => {
  return parser(str);
}


const PostDetails = (props) => {
  const { match: { params: { id } }, history } = props;
  const [post, setPost] = useState({});
  const isAuthenticated = sessionStorage.getItem("token");
  const handleRemove = (id) => {
    blogServices.blog.removePost(id).then(response => {
      history.goBack();
    })
  }
  const handleEdit = (id) => {
    console.log(props)
  }
  useEffect(() => {
    blogServices.blog.getPost(id)
      .then(resp => resp.json())
      .then(json => setPost(json.data));
  }, []);
  return (
    <PostSection className="nes-container with-title">
      <h3 className="title">{post && post.title}</h3>
      {isAuthenticated ?
        <PostActions>
          <button className="nes-btn is-error" onClick={() => handleRemove(id)}>Remove</button>
          <a href={`/blog_edit/${id}`} className="nes-btn" onClick={() => handleEdit(id)}>Edit</a>
        </PostActions> :
        ''
      }
      <PostContent>
        {post && post.body && parseStringToHTML(post.body)}
      </PostContent>
    </PostSection>
  );
}

export default PostDetails; 