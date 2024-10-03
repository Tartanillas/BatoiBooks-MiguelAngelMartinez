import Module from './module.class';
export default class Modules {
    constructor() {
        this.data = [];
    }
    populate(array) {
        for(let i = 0; i < array.length; i++) {
            this.data[i] = new Module(array[i].code, array[i].cliteral, array[i].vliteral, array[i].courseId);
        }
    }
    toString() {
        let cadena = "";
        this.data.forEach(element => {
            cadena += element.toString();
        });
        return cadena;
    }

    getModuleByCode(moduleCode) {
        let modulo = this.data.find((modulo) => modulo.code === moduleCode);
        if (!modulo) {
            throw "No existe ningún módulo con ese código";
        }
        return modulo;
    }
}