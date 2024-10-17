const SERVER = import.meta.env.VITE_URL_API;
async function getDBBooks() {
  try {
    const response = await fetch(SERVER + "/books");
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function getDBBook(id) {
    const response = await fetch(SERVER + "/books/" + id);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

async function addDBBook(book) {
  const response = await fetch(SERVER + "/books", {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
  }
  const data = await response.json();
  return data;
}

async function removeDBBook(id) {
    const response = await fetch(SERVER + "/books/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

async function changeDBBook(book) {
    const response = await fetch(SERVER + "/books/" + book.id, {
      method: "PUT",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

export { getDBBooks, getDBBook, addDBBook, removeDBBook, changeDBBook };
