const authOptions = {
  mode: "cors",
  cache: "default"
};

export const fetchJson = (url, options = {}, meta = {}) => {
  return fetch(url, {
    ...authOptions,
    ...options,
    headers: {
      "Content-Type": "application/json"
    }
  })
}


export const baseURL = process.env.REACT_APP_BACKEND_URL;



export default {
  blog: {
    createPost(payload) {
      return fetchJson(`${baseURL}/posts`, { method: 'POST', body: JSON.stringify(payload) });
    },
    getPosts() {
      return fetchJson(`${baseURL}/posts`, { method: 'GET' });
    },
    getPost(id) {
      return fetchJson(`${baseURL}/posts/${id}`, { method: 'GET' });
    },
    removePost(id) {
      return fetchJson(`${baseURL}/posts/${id}`, { method: 'DELETE' });
    },
    editPost(id, payload) {
      return fetchJson(`${baseURL}/posts/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
    }
  }
}
