import Module from './module.class'
import { getDBModules } from '../services/modules.api'
export default class Modules {
    constructor() {
        this.data = []
    }
    async populate() {
        let arrayDatos = await getDBModules()
        this.data = arrayDatos.map(item => new Module(item.code, item.cliteral, item.vliteral, item.courseId))
    }
    toString() {
        let cadena = ""
        this.data.forEach(element => {
            cadena += element.toString()
        })
        return cadena
    }

    getModuleByCode(moduleCode) {
        let modulo = this.data.find((modulo) => modulo.code === moduleCode)
        if (!modulo) {
            throw "No existe ningún módulo con ese código"
        }
        return modulo
    }
}