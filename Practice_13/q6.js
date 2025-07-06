/*Bir öğrencinin adını `useReducer` hook'u ile yöneten basit bir React componenti oluştur. 
"Adı Değiştir" butonu tıklandığında, input alanındaki değer öğrencinin yeni adı olarak güncellensin. 
- Önce reducer'da ilgili case'de state güncellemesini yap. 
- handleClick'de adı değiştirecek action'ı dispatch et.
*/

import  { useReducer, useState } from "react";

const initialState = { name: "Misafir" };

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    dispatch({type:"changeName", payload: inputValue})
  }


  return (
    <div>
      <p>Öğrenci Adı: {state.name}</p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Adı Değiştir</button>
    </div>
  );
}
