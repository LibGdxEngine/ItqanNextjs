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