/*
Aşağıdaki component'de gerekli olan verileri props destructuring yaparak al.

const MyComponent = () => {
 return (<p>{name} is {age} years old.</p>);
}
*/

const MyComponent = (props) => {
    const {name, age} = props;
    return (<p>{name} is {age} years old.</p>);
   }
   
   