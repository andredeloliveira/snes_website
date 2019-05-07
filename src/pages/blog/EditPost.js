import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import RichTextEditor from 'react-rte';
import blogServices from './services';
import { InputContainer, ActionsContainer } from './CreatePost';


const EditPost = (props) => {
  const { match: { params: { id } } } = props;
  const [body, setBody] = useState(RichTextEditor.createEmptyValue());
  const [post, setPost] = useState(null);
  function handleChangeBody(value) {
    setBody(value);
  }

  useEffect(() => {
    blogServices.blog.getPost(id)
      .then(resp => resp.json())
      .then(json => {
        setPost(json.data)
        setBody(RichTextEditor.createValueFromString(json.data.body, 'html'))
      });
  }, []);
  if (!post) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>Edit a post</h1>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            title: values.title,
            short_text: values.shortText,
            tags: values.tags,
            body: body.toString('html')
          };

          blogServices.blog.editPost(id, { post: { ...payload } })
            .then(resp => {
              if (resp.status === 200) {
                props.history.push("/");
              }
            });
        }}
        initialValues={{
          title: post && post.title,
          shortText: post && post.short_text,
          tags: post && post.tags
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>
              <InputContainer>
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  required
                />
              </InputContainer>
              {errors.title && touched.title && errors.title}
              <InputContainer>
                <label>Short Text: </label>
                <input
                  type="text"
                  name="shortText"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.shortText}
                  required
                />
              </InputContainer>
              <InputContainer>
                <RichTextEditor
                  name="body"
                  value={body}
                  onChange={handleChangeBody}
                />
              </InputContainer>
              <InputContainer>
                <label>Tags <span>Comma separated:</span> </label>
                <input
                  type="text"
                  name="tags"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tags}
                  required
                />
              </InputContainer>
              {errors.body && touched.body && errors.body}
              <ActionsContainer>
                <button className="nes-btn is-primary" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </ActionsContainer>
            </form>
          )}
      </Formik>
    </div>
  )
}

export default EditPost;