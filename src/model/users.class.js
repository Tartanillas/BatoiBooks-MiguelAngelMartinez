import User from './user.class';
export default class Users {
    constructor() {
        this.data = [];
    }
    populate(array) {
        for(let i = 0; i < array.length; i++) {
            this.data[i] = new User(array[i].id, array[i].nick, array[i].email, array[i].password);
        }
    }
    addUser(usuario) {
        let nextId = this.data.reduce((max, usuario) => usuario.id > max ? usuario.id : max, 0) + 1;
        let nuevoUsuario = new User(nextId, usuario.nick, usuario.email, usuario.password);
        this.data.push(nuevoUsuario);
        return nuevoUsuario;
    }
    

    removeUser(id) {
        let usuario = this.data.findIndex((user) => user.id == id);
        if (usuario === -1) {
            throw "No existe ningún usuario con ese ID.";
        }
        this.data.splice(usuario, 1);
    }

    changeUser(usuario) {
        let usuarioAModificar = this.data.findIndex(user => user.id === usuario.id);
        if (usuarioAModificar === -1) {
            throw "No existe ningún usuario con ese ID.";
        } else {
            this.data.splice(usuarioAModificar, 1, usuario);
            return usuario;
        }
    }

    toString() {
        let cadena = "";
        this.data.forEach(element => {
            cadena += element.toString();
        });
        return cadena;
    }

    getUserById(userId) {
        let usuario = this.data.find((usuario) => usuario.id === userId);
        if (!usuario) {
            throw "No existe ningún usuario con ese ID";
        }
        return usuario;
    }

    getUserIndexById(userId) {
        let usuario = this.data.findIndex((usuario) => usuario.id === userId);
        if (usuario === -1) {
            throw "No existe ningún usuario con ese ID";
        }
        return usuario;
    }
    getUserByNickName(nick) {
        let usuario = this.data.find((usuario) => usuario.nick === nick);
        if (!usuario) {
            throw "No existe ningún usuario con ese nick";
        }
        return usuario;
    }
}