import Cookies from "universal-cookie";

const cookies = new Cookies();
const getCookie = cookiesName => {
    return cookies.get(cookiesName);
};

export default getCookie;
