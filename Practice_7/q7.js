/*Yeni bir Sanat checkbox'ı ekle. 
- Seçilen ilgi alanlarını saklamak için interests adında bir state kullan. State'in başlangıç değerine dikkat.
- handleInterestChange fonksiyonunu tamamla. 
- seçimleri join kullanarak , ile ayrılmış şekilde(virgülden sonraki boşluğa dikkat) p element'inin içinde göster.



export default function App() {


  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
   
    } else {

    }
  };

  return (
    <div>
      <h3>Hangi ilgi alanlarınız var?</h3>
      <form>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Tiyatro"
            onChange={handleInterestChange}
          />
          <span>Tiyatro</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Resim"
            onChange={handleInterestChange}
          />
          <span>Resim</span>
        </label>
      </form>
      <div>
        <h4>Seçilen İlgi Alanları:</h4>
        <p>
        
        </p>
      </div>
    </div>
  );
}
*/

import { useState } from "react";

export default function App() {
  const [interest, setInterest] = useState([]);

  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterest([...interest, value]);
    } else {
      setInterest(interest.filter((interest) => interest !== value));
    }
  };

  return (
    <div>
      <h3>Hangi ilgi alanlarınız var?</h3>
      <form>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Tiyatro"
            onChange={handleInterestChange}
          />
          <span>Tiyatro</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Resim"
            onChange={handleInterestChange}
          />
          <span>Resim</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Sanat"
            onChange={handleInterestChange}
          />
          <span>Sanat</span>
        </label>
      </form>
      <div>
        <h4>Seçilen İlgi Alanları:</h4>
        <p>{interest.join(", ")}</p>
      </div>
    </div>
  );
}
