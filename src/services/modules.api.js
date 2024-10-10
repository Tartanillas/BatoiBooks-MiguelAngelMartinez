const SERVER = import.meta.env.VITE_URL_API;
async function getDBModules() {
  try {
    const response = await fetch(SERVER + "/modules");
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function getDBModule(code) {
  try {
    const response = await fetch(SERVER + "/modules/" + code);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export { getDBModules, getDBModule };
