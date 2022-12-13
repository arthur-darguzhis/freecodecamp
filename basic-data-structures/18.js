const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let onlineUsersCount = 0;
    for (let user in usersObj) {
        if (usersObj[user].online) {
            onlineUsersCount++;
        }
    }
    return onlineUsersCount
    // Only change code above this line
}

console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));
