import getCookie from "../../Helper/cookies/getCookie";
import emptyProfile from "../images/profile/emptyProfile.svg";

const customFunc = {
    generateRoomID: () => {
        var chars = "abcdefghijklmnopqrstuvwxyz";
        var id = "xui-";

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                var randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
                id += randomChar;
            }
            if (i !== 1) {
                id += "-";
            }
        }

        return id;
    },
    isAuthenticated: () => {
        const token = getCookie("token");
        if (token) {
            return true;
        } else {
            return false;
        }
    },
    profilePhotoDecisionMaker: photoUrl => {
        if (photoUrl) {
            return photoUrl;
        } else {
            return emptyProfile;
        }
    },
};

export default customFunc;
