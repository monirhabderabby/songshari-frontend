const isConnected = (connectedFriendIds, id) => {
    let connected = false;
    connectedFriendIds?.forEach(item => {
        if (item === id) {
            connected = true;
        }
    });

    return connected;
};

export default isConnected;
