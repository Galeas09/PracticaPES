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
}) 