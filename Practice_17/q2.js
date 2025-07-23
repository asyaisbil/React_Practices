//Aşağıdaki fonksiyonel bileşende UserContext'teki verilere erişmek için gerekli useContext Hook'unu kullanarak user değişkenini tanımla.

import { useContext } from "react";
import { UserContext } from "./UserContext.js";


export default function Profile() {

    const { user } = useContext(UserContext); 

 return (
    <div> 
    </div>);
}
