/*Aşağıdaki ogrenci objesini immutable bir şekilde güncelleyerek, yeniOgrenci adında yeni bir obje oluştur. isim özelliğini Ahmet Yılmaz olarak değiştir.
*/


const ogrenci = {
 id: 1,
 isim: "Ayşe Demir",
 yas: 20,
};


const yeniOgrenci = {...ogrenci, isim: "Ahmet Yılmaz"};
