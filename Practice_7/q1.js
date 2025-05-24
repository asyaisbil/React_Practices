/*State'deki activity'leri ul element'inin içinde aşağıdaki component gibi map'leyin.
<li>{activity}</li>
- Key değerini vermeyi unutmayın.
Egzersizi beğendimÇok zor geldiHatalı

import React, { useState } from "react";


export default function App() {
 const [activities, setActivities] = useState([]);


 const handleActivityChange = (event) => {
   const { value, checked } = event.target;
   if (checked) {
     setActivities([...activities, value]);
   } else {
     setActivities(activities.filter((activity) => activity !== value));
   }
 };


 return (
   <div>
     <h3>Hangi aktiviteleri seviyorsunuz?</h3>
     <form>
       <label>
         <input
           type="checkbox"
           name="activity"
           value="Müzik Dinleme"
           onChange={handleActivityChange}
         />
         <span>Müzik Dinleme</span>
       </label>
       <label>
         <input
           type="checkbox"
           name="activity"
           value="Film İzleme"
           onChange={handleActivityChange}
         />
         <span>Film İzleme</span>
       </label>
       <label>
         <input
           type="checkbox"
           name="activity"
           value="Eğlence"
           onChange={handleActivityChange}
         />
         <span>Eğlence</span>
       </label>
     </form>
     <div>
       <h4>Seçilen Aktiviteler:</h4>
       <ul>
       
       </ul>
     </div>
   </div>
 );
}
*/

import React, { useState } from "react";

export default function App() {
  const [activities, setActivities] = useState([]);

  const handleActivityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setActivities([...activities, value]);
    } else {
      setActivities(activities.filter((activity) => activity !== value));
    }
  };

  return (
    <div>
      <h3>Hangi aktiviteleri seviyorsunuz?</h3>
      <form>
        <label>
          <input
            type="checkbox"
            name="activity"
            value="Müzik Dinleme"
            onChange={handleActivityChange}
          />
          <span>Müzik Dinleme</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="activity"
            value="Film İzleme"
            onChange={handleActivityChange}
          />
          <span>Film İzleme</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="activity"
            value="Eğlence"
            onChange={handleActivityChange}
          />
          <span>Eğlence</span>
        </label>
      </form>
      <div>
        <h4>Seçilen Aktiviteler:</h4>
        <ul>
          {activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
