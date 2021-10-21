const { menu, pause, ingresarNum } = require("./helpers/inquirer")
const Calculator = require("./models/calculator")


const main = async()=>{

    const calculadora = new Calculator()

    console.clear()
    const mainMenu = await menu()

    
    
    await pause()
    
    
    const num = await ingresarNum()
    const num2 = await ingresarNum()
    
    
    switch (mainMenu) {
        case "1":

            calculadora.sumar(num,num2)
            break;

        case "2":

            calculadora.resta(num,num2);
            break;
        case "3":

            calculadora.multiplicacion(num,num2);
            break;
        default:
            break;
    }
   

}


main()