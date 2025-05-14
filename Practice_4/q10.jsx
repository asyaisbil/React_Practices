/*MUI kullanarak bir buton oluştur ve div içinde kullan. 
- contained tipi olsun. 
- İçinde Contained Buton yazsın. 
- inline style ile arkaplan rengi yeşil olsun. 
İpucu: - Butonu önce import etmeyi unutma. 
- Dokümantasyondan bakabilir, google'layabilirsin.

export default function App(){
 return (
   <div></div>
 )
}*/


import Button from '@mui/material/Button';

export default function App(){
    return (
      <div>
        <Button variant="contained" color="success">Contained Button</Button>
      </div>
    )
   }



/// v2

import Button from '@mui/material/Button';

export default function App(){
    return (
      <div>
        <Button variant="contained" style={{backgroundColor: "green"}}>Contained Button</Button>
      </div>
    )
   }

