import getCookie from "../../cookies/getCookie";

const isLoggedIn = () => {
    const token = getCookie("token");
    if (token) return true;
    else return false;
};

export default isLoggedIn;
