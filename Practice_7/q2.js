/*Checkbox’a tıklandığında, hobiler array'ine eklenecek ya da çıkarılacak bir handleChange fonksiyonu yaz. 
Eğer checkbox işaretliyse hobiyi array'e ekle(setHobbies); değilse, array'den çıkar. 
- İpucu: spread operatörü , includes ve filter metodunu kullanabilirsin.

function handleChange() {


}
*/

let newValue;

function handleChange(event) {
  if (event.target.type === "checkbox") {
    if (hobbies.includes(event.target.value)) {
      newValue = hobbies.filter((hobby) => hobby !== event.target.value);
    } else {
      newValue = [...hobbies, event.target.value];
    }
    setHobbies(newValue);
  }
}
