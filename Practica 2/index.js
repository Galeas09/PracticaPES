/* let frutas = ["Banana", "Manzana" , "Pera"];

//acceder de manera individual a un valor array
console.log(frutas[2])

for(let fruta of frutas){
    console.log(frutas);
}

frutas.push("Piña")
frutas.pop()    
frutas.unshift("Melocoton")
let index = frutas.indexOf("Manzana", 0)
frutas.splice(index, 1)
frutas.reverse()
frutas.forEach(i => console.log(i)) */

/*
let numeros =[]

for(let i= 1; i<=100; i++){
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
}

numeros.forEach( (i)=>{
    console.log(i)
}) */

/*
let numeros = []
let otrosNumeros = []
let arrayFinal = []
for (let i = 1; i <=100; i++) {
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
}

for (let i = 101; i <=200; i++) {
    let mensaje = `El valor es: ${i}`
    otrosNumeros.push(mensaje)
}

arrayFinal = [...numeros, ...otrosNumeros]

arrayFinal.forEach((i) => {
    console.log(i)
}) */

let persona = {
    nombre: `Carlos`,
    edad: 22,
    carrera: `Software`
}
let persona2 = {
    nombre: `Carlos2`,
    edad: 23,
    carrera: `Software2`
}
let persona3 = {
    nombre: `Carlos3`,
    edad: 25,
    carrera: `Software3`
}

let arrayObjetos = [persona, persona2, persona3]

arrayObjetos.forEach((i) => {
    console.log(i)
})

console.log(arrayObjetos[1])