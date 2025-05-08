// Aşağıdaki kodu props destructuring kullanarak yeniden yaz.
/*
const UserCard = (props) => {
    return (<div>
               <h2>{props.name}</h2>
               <p>{props.age} yaşında</p>
            </div>);
    };
   */ 

const UserCard = (props) => {
    const {name, age} = props;
return (<div>
           <h2>{name}</h2>
           <p>{age} yaşında</p>
        </div>);
};

export default UserCard;