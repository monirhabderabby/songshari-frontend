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
};

export default customFunc;
