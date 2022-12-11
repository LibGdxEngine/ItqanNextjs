export async function emailIsAvailable(email) {
    try {
        const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/users.json?orderBy=\"email\"&equalTo=\"" + email + "\"&limitToFirst=1");
        const data = await response.json();
        if (data) {
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

export async function getUserByEmail(email) {
    try {
        const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/users.json?orderBy=\"email\"&equalTo=\"" + email + "\"&limitToFirst=1");
        const data = await response.json();
        if (data) {
            return data;
            // return JSON.stringify(data);
        }
    } catch (e) {
        console.log(e);
        return null;
    }
    return null;
}

export async function updateUser(userToUpdate) {
    try {
        const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/users.json",{
            body:userToUpdate,
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            }
        });
        const data = await response.json();
        if (data) {
            return data;
        }
    } catch (e) {
        console.log(e);
        return null;
    }
    return null;
}