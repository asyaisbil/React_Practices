/*Aşağıdaki kod ile localStorage'a user bilgisi [object Object] şeklinde kaydoluyor. Sorunu düzelt.
*/


const obj = { name: 'Yalçın', age: 30 };
const object = JSON.stringify(obj);
localStorage.setItem('user', object);
