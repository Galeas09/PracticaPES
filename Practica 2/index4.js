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

console.log(arrayObjetos[2])