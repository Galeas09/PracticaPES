let numeros =[]

for(let i= 1; i<=100; i++){
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
}

numeros.forEach( (i)=>{
    console.log(i)
}) 