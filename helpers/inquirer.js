const colors = require("colors")
const inquirer = require('inquirer')


const menu = async()=>{

    console.log("=========".rainbow)
    console.log("Elija una operacion".underline.yellow)
    console.log("=========".rainbow)

    const questios = [{
        type: "list",
        name: "option",
        message: "Elija la operacion",
        choices: [

            {
                value: "1",
                name: "1. Suma"

            },
            {
                value: "2",
                name: "2. Resta"

            },
            {
                value: "3",
                name: "3. Multiplicacion"

            },
            {
                value: "4",
                name: "4. Division"

            },
    ]
    }]


    const {option} = await inquirer.prompt(questios)

    console.log(option)

    return option

}


const pause = async()=>{
    const questios = [{
        type: "input",
        name: "enter",
        message: "Presione enter para continuar",
    }]

    const {enter} = await inquirer.prompt(questios)

    return enter
}


const ingresarNum = async(operacion)=>{
    const questios = [{
        type: "number",
        name: "num",
        message: `Ingrese numero`,
    }]

    const {num} = await inquirer.prompt(questios)
    return num


}



module.exports = {
    menu,
    pause,
    ingresarNum
}