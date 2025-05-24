/*
Value değeri yeşil çay olan yeni bir radio button oluşturun. 
- Radio buttonlar aynı soruya ait olduğundan, birden fazla seçilememelidir. 
Bunun için drinkPreference attribute'unu kullanarak gruplandırın. 
- selectedDrink isimli bir state'de seçimi saklayın. 
- handleDrinkChange fonksiyonunu tamamlayın. 
- Seçili içeceği ekranda dinamik olarak gösterin.


export default function App() {

  const handleDrinkChange = (event) => {

  };

  return (
    <div>
      <h3>En sevdiğiniz içecek hangisi?</h3>
      <form>
        <label>
          <input
            type="radio"
            name="drinkPreference"
            value="Kahve"
            onChange={handleDrinkChange}
          />
          Kahve
        </label>
        <label>
          <input
            type="radio"
            name="drinkPreference"
            value="Çay"
            onChange={handleDrinkChange}
          />
          Çay
        </label>
      </form>
      <p>Seçtiğiniz içecek: </p>
    </div>
  );
}


*/

import { useState } from "react";

export default function App() {
  const [selectedDrink, setSelectedDrink] = useState("");

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
  };

  return (
    <div>
      <h3>En sevdiğiniz içecek hangisi?</h3>
      <form>
        <label>
          <input
            type="radio"
            name="drinkPreference"
            value="Kahve"
            checked={selectedDrink === "Kahve"}
            onChange={handleDrinkChange}
          />
          Kahve
        </label>
        <label>
          <input
            type="radio"
            name="drinkPreference"
            value="Çay"
            checked={selectedDrink === "Çay"}
            onChange={handleDrinkChange}
          />
          Çay
        </label>
        <label>
          <input
            type="radio"
            name="drinkPreference"
            value="Yeşil Çay"
            checked={selectedDrink === "Yeşil Çay"}
            onChange={handleDrinkChange}
          />
          Yeşil Çay
        </label>
      </form>
      <p>Seçtiğiniz içecek: {selectedDrink}</p>
    </div>
  );
}
