console.log(__dirname);
console.log(__filename);

(function (exports,require,module,__filename,__dirname) {
    const a = require('fs');
    const name = 'vishal';
    console.log(name);
    module.exports = {name};
});

//IIFE(Immediately Invoked Function Expression)
//IIFE is automaticaaly invoked
(
    function() {
        var a = 'vishal das';
        console.log(a);
    }
)();

console.log(a);  //error

//Individual files are called modules in node js
//Scope of every variable and method inside files are private
//behind the scence nodejs warps variable inside a function called module wrapper function due to which variables and methods become private
