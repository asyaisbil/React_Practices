/* Aşağıdaki React uygulamasında coin isimli bir state tanımlayın. 
- Başlangıç değeri 0 olsun. 
- Aşağıdaki component yapısında ekranda gösterin. 
- Buton tıklandıkça 1'er 1'er artsın veya azalsın. 
(increase ve decrease isimli 2 fonksiyon tanımlayın)
<div class="display">
    <p>0</p>
    <button>Artır</button>
    <button>Azalt</button>
</div>

export default function App() {
  return <div></div>
}
*/

import { useState } from "react";

export default function App() {
  const [coin, setCoin] = useState(0);
  const increase = () => {
    setCoin(coin + 1);
  };
  const decrease = () => {
    setCoin(coin - 1);
  };

  return (
    <div className="display">
      <p>{coin}</p>
      <button onClick={increase}>Artır</button>
      <button onClick={decrease}>Azalt</button>
    </div>
  );
}
