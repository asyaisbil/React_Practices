// import - export

//utils.js 
export default function getUser() { 
	return { name: "Yalçın", age: 30 }; 
}

//index.js -- defaultta tek şey import ettiğinden Patates bile diyebilirim
import Patates from './utils.js';
console.log(Patates());