import React, { useState } from 'react';
import { Formik } from 'formik';
import { ActionsContainer, InputContainer } from '../blog/CreatePost';
import blogServices from '../blog/services';

const Login = (props) => {
  const [error, setError] = useState('');
  function addTokenToSessionStorage(token) {
    sessionStorage.setItem("token", token)
  }
  return (
    <div>
      <h1>Login</h1>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            username: values.username,
            password: values.password
          };

          blogServices.auth.login({ user: { ...payload } })
            .then(resp => resp.json())
            .then(json => {
              addTokenToSessionStorage(json.data.token);
              props.history.push('/');
            })
            .catch(error => setError('username or password incorrect'));
        }}
        initialValues={{
          username: "",
          password: ""
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
                <label htmlFor="username">username: </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  required
                />
              </InputContainer>
              <InputContainer>
                <label>password: </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  required
                />
              </InputContainer>
              {error}
              <ActionsContainer>
                <button className="nes-btn is-primary" type="submit" >
                  Login
                </button>
              </ActionsContainer>
            </form>
          )}
      </Formik>
    </div>
  );
}

export default Login;