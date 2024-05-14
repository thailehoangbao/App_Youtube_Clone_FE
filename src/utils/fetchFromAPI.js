import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'token': localStorage.getItem("LOGIN_USER")
  },
};

export const likeApi = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/api/video/like`, model, options);
  return data;
}

export const commentApi = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/api/video/comment`, model, options);
  return data;
}



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


export const getVideoApi = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/video/get-video`, options);

  return data;
}


export const getVideoTypeApi = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/video/get-video-type`);

  return data;
}


export const getVideoTypeIdApi = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/api/video/get-video-typeid/${typeId}`);

  return data;
}



export const getVideoIdApi = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/api/video/get-video-id/${typeId}`);

  return data;
}



export const signUpApi = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/api/user/sign-up`, model);

  return data;
}


export const loginApi = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/api/user/login`, model);

  return data;
}

export const loginFacebookApi = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/api/user/login-facebook`, model);

  return data;
}

export const updateInfo = async (model) => {
  const { data } = await axios.put(`${BASE_URL}/api/user/update-info`, model, options);

  return data;
}

export const updateAvatar = async (fromData) => {
  const { data } = await axios.put(`${BASE_URL}/api/user/update-avatar`, fromData, options);

  return data;
}

const graphqlQuery = {
  "operationName": "fetchAuthor",
  "query": `query fetchAuthor { getUser { name, email } }`,
  "variables": {}
};

const response = axios({
  url: "http://localhost:8080/grap",
  method: 'post',
  data: graphqlQuery
});