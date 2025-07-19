/*Dispatch edilen action'a createdAt özelliği olarak bugünün tarihini ekleyen bir middleware yaz.

- Adı timestampMiddleware olsun.
- Bir fonksiyon return etsin. Bu fonksiyon store'u parametre olarak alır.
- Bu fonksiyon da başka bir fonksiyon return etsin. Bu fonksiyon da bir sonraki middleware'i parametre olarak alır. Bu parametreyi next diye isimlendir.
- Bu son fonksiyon da başka bir fonksiyon return eder. Parametre olarak dispatch edilen action'ı alır.
- Son fonksiyonda bir değişken tanımla adı actionWithDate olsun. action'ı spread ile kopyala ve createdAt özelliğini değeri bugünün tarihi(Date.now())) olacak şekilde ekle.
- Bu son fonksiyon bir sonraki middleware'ı(next) çalıştırsın. actionWithDate'ı argüman olarak versin.
- Bütün adımlardan sonra bunu arrow function olarak yaz.
*/

const timestampMiddleware = (store) => (next) => (action) => {
    const actionWithDate = {
        ...action,
        createdAt: Date.now()
    }
    return next(actionWithDate)
}