
/*Bir pizza siparişi başarıyla tamamlandığında kullanıcıya başarı bildirimi 
göstermek için Ract Toastify'ı kullanın. 
Bildirimin mesajı Siparişiniz başarıyla oluşturuldu! olsun.
*/ 

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const siparisiTamamla = () => {
    toast.success("Siparişiniz başarıyla oluşturuldu!")
    console.log("Sipariş tamamlandı.");
  };

  return (
  <div>
    <button onClick={siparisiTamamla}>Siparişi Tamamla</button>
    <ToastContainer /> 
    </div>)
    ;
}
