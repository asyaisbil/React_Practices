/*Aşağıdaki React uygulamasını tamamla. 
- State hookunu kullanarak bir sayruhHaliac isimli state oluşturun. 
Bu state'in başlangıç değeri ilkRuhHali olsun. 
- 'stil' nesnesinde 'color' özelliği sabit olarak "royalblue" olarak belirlenmiş. 
Eğer ruhHali mutlu ise "royalblue", değilse "crimson" olacak şekilde kodu düzenle. 
- JSX'te bazı statik kodlanmış bilgiler var. Buralarda süslü paranetezler içinde JS ifadeleri kullanarak 
dinamik hale getir. - Yardımcı fonksiyonları yaz. - class="code">Reset'e tıklandığında state'i ilkRuhHali yapsın.

const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function App() {
  const mutluEt = () => {

  };
  const uZ = () => {
 
  };
  const reset = () => {

  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'royalblue',
  };

  return (
    <div className="widget-moods container">
      <h2>RuhHalleri</h2>
      <div id="ruhHali" style={stil}>
        Nasıl hissediyorum bilmiyorum :-|
      </div>
      <div>
        <button id="mutluEt" onClick={mutluEt}>
          Mutlu Et
        </button>
        <button id="uz" onClick={uZ}>
          Üz
        </button>
        <button id="resetRuhHali" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
*/

import { useState } from "react";


const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function App() {

    const [sayruhHaliac, setSayruhHaliac] = useState(ilkRuhHali);

  const mutluEt = () => {
    setSayruhHaliac(mutluRuhHali);
  };
  const uZ = () => {
    setSayruhHaliac(uzgunRuhHali);
  };
  const reset = () => {
    setSayruhHaliac(ilkRuhHali);
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: sayruhHaliac === mutluRuhHali ? 'royalblue' : "crimson",
  };

  return (
    <div className="widget-moods container">
      <h2>RuhHalleri</h2>
      <div id="ruhHali" style={stil}>
        {sayruhHaliac}
      </div>
      <div>
        <button id="mutluEt" onClick={mutluEt}>
          Mutlu Et
        </button>
        <button id="uz" onClick={uZ}>
          Üz
        </button>
        <button id="resetRuhHali" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}