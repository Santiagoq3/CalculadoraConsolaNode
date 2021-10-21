class Calculator{



    constructor(){
        
    }


    sumar(num,num2){
        let resultado = num + num2

        console.log(`El resultado de la operacion es: ${resultado}`)
    }

    resta(num,num2){
        let resultado = num - num2

        console.log(`El resultado de la operacion es: ${resultado}`)
    }

    multiplicacion(num,num2){
        let resultado = num * num2

        console.log(`El resultado de la operacion es: ${resultado}`)
    }
}


module.exports = Calculator