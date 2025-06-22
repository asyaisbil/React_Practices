/*Bir blog yazarının paylaştığı makelenin kaç gün önce 
paylaşıldığını ekranda göster. 
- publishDate isimli bir değişkende yayınlanma tarihi 
olan 2025-01-01'i JS date'e dönüştür. 
- dateDifference isimli bir değişkende 
formatDistanceToNow metodunu kullanarak kaç gün önce 
paylaşıldığını hesapla. 
- formatDistanceToNow metodunda 6 gün önce gibi 
metnin oluşması için addSufffix özelliğini ve 
locale ayarını ayarlamayı unutma. 
- Dikkat: importları unutma.
*/ 

import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

export default function App() {

    const publishDate = new Date("2025-01-01");
  const dateDifference = formatDistanceToNow(publishDate, {
    addSuffix: true,
    locale: tr,
  });

 return (
    <div>
      Paylaşılma Zamanı: {dateDifference}
    </div>  
   )

}
