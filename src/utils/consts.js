export const ACCESS_TOKEN = "accessToken";

// React App Server URL

const URL = process.env.REACT_APP_SERVER_URL;

export const SERVER_URL = URL ? `${URL}/api` : `http://localhost:5000/api`;
