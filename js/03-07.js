/*
Tarea: Sistema de pacientes

1 - Crea una clase para crear objetos con datos de pacientes. 
Los datos serían:
- Nombre
- Fecha de nacimiento
- Género
- DNI
- Dirección
- Teléfono
- email
- número de historia clínica
- Enfermedad pre-existente
La clase debe tener las siguientes funciones:
- mostrarDatosPersonales: Lista en pantalla los datos nombre, DNI, dirección, telefono e email.
- mostrarDatosClinicos: Lista en pantalla los datos nombre, DNI, número de historia clínica y enfermedad pre-existente.

2 - Escribe una función que te permita agregar pacientes a un array y al finalizar muestre los datos clínicos de los mismos.

3 - Escribe una función que permita eliminar un paciente por su DNI

4 - Escribe una función que permita buscar pacientes por DNI y otra que permita hacer la búsqueda por nombre (puede devolver más de un paciente que coincida con la búsqueda)

5 - Escribe una función que ordene la lista de pacientes por nombre

*/


class pacienteDatos{
    constructor(nombre, fechaDeNacimiento, genero, dni, direccion, telefono,email,numeroDeHistoriaClinica,enfermedadPreExistente){
       this.nombre = nombre
       this.fechaDeNacimiento = fechaDeNacimiento
       this.genero = genero
       this.dni = dni
       this.direccion = direccion
       this.telefono = telefono
       this.email = email
       this.numeroDeHistoriaClinica = numeroDeHistoriaClinica
       this.enfermedadPreExistente = enfermedadPreExistente
    }
    
    mostrarDatosPersonales(){
        console.log("Datos personales del paciente")
        console.log("------------------------------")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`El DNI del paciente ${this.nombre} es:${this.dni}`)
        console.log(`La direccion del paciente ${this.nombre} es: ${this.direccion}`)
        console.log(`Telefono: ${this.telefono}`)
        console.log(`Email: ${this.email}`)
        console.log("------------------------------")
    }
    mostrarDatosClinicos(){
        console.log("Datos clinicos del paciente")
        console.log("------------------------------")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`El DNI del paciente ${this.nombre} es: ${this.dni}`)
        console.log(`Datos clinicos del paciente ${this.nombre} son: ${this.numeroDeHistoriaClinica}`)
        console.log(`Sus enfermedades preexistentes del paciente ${this.nombre} son: ${this.enfermedadPreExistente}`)
        console.log("------------------------------")
    }
  }
let paciente = new pacienteDatos(
"Cosme", "21/06/2000", "Masculino", 45555001, "Calle falsa 123", 38184652138, "cosmefulaito@gmail.com", 3444, "Resfrio"

)


