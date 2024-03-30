#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Choose The opreator you want to perform ",
        type: "list",
        name: "Opreators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
console.log(answer);
if (answer.Opreators === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Opreators === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Opreators === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Opreators === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
