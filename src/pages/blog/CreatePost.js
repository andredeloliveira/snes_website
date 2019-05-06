import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import RichTextEditor from 'react-rte';
import blogServices from './services';

// const onSubmit = (values) => console.log(values);
//needs validation as well....

const InputContainer = styled.div`
  padding: 10px;
  width: 100%;
  & label {
    width: 300px;
    & span {
      font-size: 10px;
    }
  }
  & input {
    width: 100%;
  }
`;

const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 30px 30px;
`;

const CreatePost = () => {
  const [body, setBody] = useState(RichTextEditor.createEmptyValue());
  function handleChangeBody(value) {
    setBody(value);
  }
  return (
    <div>
      <h1>Create a post</h1>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            title: values.title,
            short_text: values.shortText,
            tags: values.tags,
            body: body.toString('html')
          };

          blogServices.blog.createPost({ post: { ...payload } });
        }}
        initialValues={{
          title: "",
          shortText: "",
          tags: ""
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

export default CreatePost;