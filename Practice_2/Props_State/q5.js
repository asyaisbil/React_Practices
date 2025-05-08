
//utils.js

export const add = (a, b) => a + b; 
export const subtract = (a, b) => a - b; 


//index.js

import {add, subtract} from './utils.js'
console.log(add(5, 3));  
console.log(subtract(5, 3));
