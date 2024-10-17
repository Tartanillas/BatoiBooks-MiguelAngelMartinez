const SERVER = import.meta.env.VITE_URL_API;
async function getDBModules() {
    const response = await fetch(SERVER + "/modules");
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

async function getDBModule(code) {
    const response = await fetch(SERVER + "/modules/" + code);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
}

export { getDBModules, getDBModule };
