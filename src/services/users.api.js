const SERVER = import.meta.env.VITE_URL_API
async function getDBUsers() {
    const response = await fetch(SERVER + "/users")
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    return data
}

async function getDBUser(id) {
    const response = await fetch(SERVER + "/users/" + id)
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    return data
}

async function addDBUser(user) {
    const response = await fetch(SERVER + "/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    return data
}

async function removeDBUser(id) {
    const response = await fetch(SERVER + "/users/" + id, {
      method: "DELETE",
    })
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    return data
}

async function changeDBUser(user) {
    const response = await fetch(SERVER + "/users/" + user.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    return data
}

async function changeDBUserPassword(id, contrasenya) {
    const response = await fetch(SERVER + "/users/" + id, {
      method: "PATCH",
      body: JSON.stringify({password: contrasenya}),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    return data
}

export { getDBUsers, getDBUser, addDBUser, removeDBUser, changeDBUser, changeDBUserPassword}
