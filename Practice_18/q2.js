//2.Aşağıdaki kod parçasında, axios request'ine Authorization header'ı eklemek için gerekli kodu tamamla.

const token = localStorage.getItem("token");


axios.get('https://api.example.com/users', {
 headers: {
   Authorization: `Bearer ${token}`
 }
})
 .then(response => {
   console.log(response.data);
 })
 .catch(error => {
   console.error(error);
 });