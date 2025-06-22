/*date-fns kütüphanesini kullanarak bugünün tarihini dd/MM/yyyy formatında görüntüle. - today değişkenini bugünün tarihi yap. - format metodunu kullan. - formattedDate'i bugünün tarihini dd/MM/yyyy formatına dönüştürmek için kullan.
*/

import { format } from 'date-fns';

export default function App() {
  const today = new Date();
  const formattedDate = format(today, "dd/MM/yyyy");
  return <h1>Bugünün tarihi: {formattedDate}</h1>
}


