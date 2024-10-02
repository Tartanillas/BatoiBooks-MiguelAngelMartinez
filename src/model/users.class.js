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
    /*addUser(usuario) {
        this.data.push(new User(usuario.nick, usuario.email, usuario.password));
    }*/

    removeUser(id) {
        let usuario = this.data.findIndex((user) => user.id == id);
        if (usuario === -1) {
            throw "No existe ningún usuario con ese ID.";
        }
        this.data.splice(usuario, 1);
    }

    /*changeUser(id) {
        if (usuario === -1) {
            throw "No existe ningún usuario con ese ID.";
        }
    }

    toString() {
    }*/
}