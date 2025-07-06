/*Aşağıdaki query'nin 10sn boyunca bayatlamamasını sağla. - İpucu: staleTime*/


useQuery({
 queryKey: ['todos'],
 queryFn: async () => {
   const response = await fetch('/api/todos');
   return response.json();
 },
 staleTime: 10000
});
