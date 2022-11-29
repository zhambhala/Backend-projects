class Usuario {
    constructor(nombre, apellido, mascota,libros){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascota = mascota;
        this.libros = libros;
    }
    getFullName() {
        return  this.nombre +" "+ this.apellido
      }
    getBookNames(){
        console.log(this.libros)
    }
    countMascotas(){
        return this.mascota
    }
    addMascota(mascotas) {
         this.mascota.push(mascotas)
    }
    addBook(book) {
         this.libros.push(book)
    }
}


const Galileo = [nombre = "galileo", autor = "Galileo"]
const Diccionario = [nombre = "Diccionario", autor = "RAE"]
let xaviRamos = new Usuario ("Xavier", "Ramos", ["perro", "gato", "loro"],[Galileo, Diccionario])
let pedroMexica = new Usuario ("Pedro", "Mexica", ["perro", "gato", "loro"],[Galileo, Diccionario])
console.log(xaviRamos.getFullName())
console.log(pedroMexica.getFullName())
console.log(xaviRamos.getBookNames())
console.log(xaviRamos.countMascotas())
xaviRamos.addBook({nombre: "catastrofe", autor: "Ramon Lucoa" })
xaviRamos.addMascota("lagarto")
console.log(xaviRamos.countMascotas())
console.log(xaviRamos.getBookNames())

const nombres = pedroMexica.getFullName()
const libreria = pedroMexica.getBookNames()
const nDMascotas = pedroMexica.countMascotas()
console.log(`su nombre es ${nombres}`)
console.log(`mascotas ${nDMascotas}`)
console.log(`libros ${libreria}`)