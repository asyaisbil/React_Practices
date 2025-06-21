/** Aşağıdaki uygulamada Sipariş ver butonuna tıklanınca react-toastify mesajı görüntülenmiyor. Düzelt.
*/

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const bildirimGoster = () => {
    toast("Siparişiniz başarıyla alınmıştır!");
  };

  return (
    <div>
      <button onClick={bildirimGoster}>Sipariş Ver</button>
    <ToastContainer />       
    </div>
  );
}


