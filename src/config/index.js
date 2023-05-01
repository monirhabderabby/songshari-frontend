export const apiBaseUrl =
  process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_API_BASE_URL_LOCAL
    : process.env.REACT_APP_ENV === "dev"
    ? process.env.REACT_APP_API_BASE_URL_TEST
    : process.env.REACT_APP_API_BASE_URL;
export const apiVersionPrefix = process.env.REACT_APP_API_VERSION;

export const shopBaseUrl =
  process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_SHOP_LOCAL_BASE_URL
    : process.env.REACT_APP_SHOP_LIVE_BASE_URL;

export const coursesBaseUrl =
  process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_COURSES_LOCAL_BASE_URL
    : process.env.REACT_APP_COURSES_LIVE_BASE_URL;

export const lawyerBaseUrl =
  process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_LAWYER_LOCAL_BASE_URL
    : process.env.REACT_APP_LAWYER_LIVE_BASE_URL;

export const agentBaseUrl =
  process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_AGENT_LOCAL_BASE_URL
    : process.env.REACT_APP_AGENT_LIVE_BASE_URL;

export const kaziBaseUrl =
  process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_KAZI_LOCAL_BASE_URL
    : process.env.REACT_APP_KAZI_LIVE_BASE_URL;
