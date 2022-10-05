 //npm init
 //npm i module_name

 //for global modules
 //npm install nodemon -g
 //nodemon -v
 //o run :-  nodemon  filename
 //to exit :- ctrl + c
 

 import chalk from 'chalk';
import valid from 'validator';
import chalkAnimation from 'chalk-animation';

chalkAnimation.glitch('Lorem ipsum dolor sit amet').start()
const log = console.log;
console.log(valid.isEmail("vishal@vis.com"));
log(chalk.blue.bgRed.bold('Hello world!'));

import gradient from 'gradient-string';
console.log(gradient('cyan', 'pink')('Helloworld!'));
let coolGradient = gradient([
    {r: 0, g: 255, b: 0},       // RGB object
    {h: 240, s: 1, v: 1, a: 1}, // HSVa object
    'rgb(120, 120, 0)',         // RGB CSS string
    'gold'                      // named color
  ]);
  let coolString = coolGradient('This is a fancy string!');
console.log(coolString);