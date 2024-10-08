async function getDBUsers() {
    const response = await fetch(SERVER + "/users");
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

async function getDBUser(id) {
    const response = await fetch(SERVER + "/users?id=" + ids);
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

async function addDBUser(user) {

}

function removeDBUser(id) {

}

function changeDBUser(user) {

}

function changeDBUserPassword(id, contrasenya) {

}