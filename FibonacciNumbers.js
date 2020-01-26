const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('Fibonacci Series', {
        font: 'contessa',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};

const askQuestions = () => {
    const questions = [
        {
        name: 'LIMIT',
        type: 'input',
        message: "Enter the number of numbers in the fibonacci series: "
        }
    ];
    return inquirer.prompt(questions);
};

const fibonacciSeries = limit => {
    if (limit==1) {
        return [0, 1];
    } 
    else if (limit == 0) {
        return 0;
    }
    else {
        let series = fibonacciSeries(limit - 1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
} 

const getFibonacciSequence = limit => {
    console.log(fibonacciSeries(limit));
}; 

const run = async (header = true) => {
    if (header != false) {
        init();
    }

    const answer = await askQuestions();
    const { LIMIT } = answer;

    getFibonacciSequence(LIMIT);
};

run();
  