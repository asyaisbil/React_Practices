/*Aşağıdaki React bileşeninde, useQuery'e users'ı queryKey ekle. - Dkkat: queryKey'e array bir değer vermeyi unutma.*/

import axios from "axios";
import { useQuery } from "@tanstack/react-query";


function Users() {
 const {data, isLoading, error } = useQuery({
     queryKey: ["users"],
     queryFn: () => axios.get("/api/users").then((res) => {
       return res.data
     })
   });


 if (isLoading) return "Loading...";
 if (error) return "An error has occurred: " + error.message;


 return (
   <ul>
     {data?.map((user) => (
       <li key={user.id}>{user.name}</li>
     ))}
   </ul>
 );
}


export default Users;
