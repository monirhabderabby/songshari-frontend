import Cookies from "js-cookie";

const setCookie = (cookiesName, value) => {
    Cookies.set(cookiesName, value, { path: "/" });
};

export default setCookie;
