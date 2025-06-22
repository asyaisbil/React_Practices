/*date-fns kütüphanesini kullanarak belirli bir tarihin (örneğin, 2024-07-20) hafta sonu olup olmadığını kontrol et. - dateToCheck isimli değişkende 2024-07-20 tarihini JS Date olarak oluştur. - formattedDate isimli değişkende tarihi istenen formata dönüştür. - isItWeekend isimli değişkende isWeekend metodunu kullanarak hafta sonu olup olmadığını boolean değer olarak sakla. - h1 element'i içinde backtick kullanarak 2024-07-20: Hafta sonu metnini değişkenleri kullanarak oluştur. (İpucu: Hafta sonu veya Hafta içi olma durumu için ternary if kullanabilirsin)*/

import { format, isWeekend } from "date-fns";

export default function App() {
    const dateToCheck = new Date('2024-07-20');
    const formattedDate = format(dateToCheck, "yyyy-MM-dd")
    const isItWeekend = isWeekend(dateToCheck);
  
    return <h1>{`${formattedDate}: ${isItWeekend ? 'Hafta sonu' : 'Hafta içi'}`} </h1>
  }
