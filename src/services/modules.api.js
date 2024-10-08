async function getDBModules() {
    const response = await fetch(SERVER + "/modules");
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

async function getDBModule(code) {
    const response = await fetch(SERVER + "/modules?code=" + code);
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}