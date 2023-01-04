import Cookies from "js-cookie";

const removeCookie = cookiesName => {
    Cookies.remove(cookiesName, { path: "/" });
};

export default removeCookie;
