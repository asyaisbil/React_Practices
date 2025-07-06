/*Aşağıdaki React uygulamasında TanStack Query'i kurmak için gerekli kodları tamamla.*/

import Posts from "./Posts.js";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


function App() {
 return <div>
 <QueryClientProvider client={queryClient}>
 <Posts />
 </QueryClientProvider>
 </div>;
}


export default App;
