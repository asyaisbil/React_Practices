/*
Value değeri Soğuk Kahve olan bir radio button ekle. - Radio buttonları drinkType attribute'u ile gruplayarak seçimi kontrol et. drinkType isimli state'de sakla. - handleDrinkTypeChange fonksiyonunu yaz ve radio butonlara ata. - Eğer soğuk kahve seçilirse Harika bir seçim! mesajını, diğer içeceklerde Güzel bir tercih! mesajını göster. (ternary operator kullan)

export default function App() {

  return (
    <div>
      <h3>İçecek tercihiniz nedir?</h3>
      <form>
        <label>
          <input
            type="radio"
            name="drinkType"
            value="Sıcak Çay"
          />
          Sıcak Çay
        </label>
        <label>
          <input
            type="radio"
            name="drinkType"
            value="Sıcak Kahve"
          />
          Sıcak Kahve
        </label>
      </form>
      <p>
       
      </p>
    </div>
  );
}


*/

import { useState } from "react";

export default function App() {
  const [drinkType, setDrinkType] = useState("");

  const handleDrinkTypeChange = (event) => {
    setDrinkType(event.target.value);
  };

  return (
    <div>
      <h3>İçecek tercihiniz nedir?</h3>
      <form>
        <label>
          <input
            type="radio"
            name="drinkType"
            checked={drinkType === "Sıcak Çay"}
            onChange={handleDrinkTypeChange}
            value="Sıcak Çay"
          />
          Sıcak Çay
        </label>
        <label>
          <input
            type="radio"
            name="drinkType"
            checked={drinkType === "Sıcak Kahve"}
            onChange={handleDrinkTypeChange}
            value="Sıcak Kahve"
          />
          Sıcak Kahve
        </label>
        <label>
          <input
            type="radio"
            name="drinkType"
            checked={drinkType === "Soğuk Kahve"}
            onChange={handleDrinkTypeChange}
            value="Soğuk Kahve"
          />
          Soğuk Kahve
        </label>
      </form>
      <p>
        {drinkType === "Soğuk Kahve"
          ? "Harika bir seçim!"
          : "Güzel bir tercih!"}
      </p>
    </div>
  );
}
