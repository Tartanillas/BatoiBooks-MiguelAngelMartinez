import User from './user.class'
import { getDBUsers, addDBUser, removeDBUser, changeDBUser, changeDBUserPassword } from '../services/users.api'
export default class Users {
    constructor() {
        this.data = []
    }
    async populate() {
        let arrayDatos = await getDBUsers()
        this.data = arrayDatos.map(item => new User(item.id, item.nick, item.email, item.password))
    }
    async addUser(user) {
        let usuario = await addDBUser(user)
        this.data.push(usuario)
        return new User(usuario.id, usuario.nick, usuario.email, usuario.password)
    }
    
    async removeUser(id) {
        let usuario = removeDBUser(id)
        let posicionUsuario = this.getUserIndexById(id)
        this.data.splice(posicionUsuario, 1)
        return usuario
    }

    async changeUser(usuario) {
        let indiceUsuarioAModificar = this.getUserIndexById(usuario.id)
        let usuarioActualizado = await changeDBUser(usuario)
        let nuevoUsuario = new User(usuarioActualizado.id, usuarioActualizado.nick, usuarioActualizado.email, usuarioActualizado.password)
        this.data.splice(indiceUsuarioAModificar, 1, nuevoUsuario)
        return nuevoUsuario
    }

    async changeUserPassword(id, contrasenya) {
        let usuarioContrasenyaModificada = await changeDBUserPassword(id, contrasenya)
        let nuevoUsuario = new User(usuarioContrasenyaModificada.id, usuarioContrasenyaModificada.nick, usuarioContrasenyaModificada.email, usuarioContrasenyaModificada.password)
        let indiceUsuario = this.getUserIndexById(id)
        this.data.splice(indiceUsuario, 1, nuevoUsuario)
        return nuevoUsuario
    }

    toString() {
        let cadena = ""
        this.data.forEach(element => {
            cadena += element.toString()
        })
        return cadena
    }

    getUserById(userId) {
        let usuario = this.data.find((usuario) => usuario.id === userId)
        if (!usuario) {
            throw "No existe ningún usuario con ese ID"
        }
        return usuario
    }

    getUserIndexById(userId) {
        let usuario = this.data.findIndex((usuario) => usuario.id === userId)
        if (usuario === -1) {
            throw "No existe ningún usuario con ese ID"
        }
        return usuario
    }

    getUserByNickName(nick) {
        let usuario = this.data.find((usuario) => usuario.nick === nick)
        if (!usuario) {
            throw "No existe ningún usuario con ese nick"
        }
        return usuario
    }

}