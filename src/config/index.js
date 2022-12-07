export const apiBaseUrl = process.env.REACT_APP_ENV === 'local' ? process.env.REACT_APP_API_BASE_URL_LOCAL : process.env.REACT_APP_ENV === 'dev' ? process.env.REACT_APP_API_BASE_URL_TEST : process.env.REACT_APP_API_BASE_URL;
export const apiVersionPrefix = process.env.REACT_APP_API_VERSION;
console.log(process.env.REACT_APP_ENV)