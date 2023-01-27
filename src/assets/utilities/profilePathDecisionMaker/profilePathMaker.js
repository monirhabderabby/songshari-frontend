export const profilePathMaker = role => {
    if (role === "lawyer") {
        return "/lawyerProfile";
    } else if (role === "kazi") {
        return "/kaziProfile";
    } else if (role === "member") {
        return "/userprofile";
    }
};
