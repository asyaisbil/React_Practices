/*user objesini Profile component'ine prop olarak gönder. 
Prop destructuring ile prop'lardan al ve kullan.

App.js

import Profile from "./Profile.js";
export default function App() {
  const user = { name: "Emre", email: "emre@wit.com.tr" };
  return <Profile />
}


Profile.js

function Profile() {
  return (
    <div>
      <h2>Emre</h2>
      <p>Email: emre@wit.com.tr</p>
    </div>
  );
}

export default Profile;
*/ 


//App.js

import Profile from "./Profile.js";
export default function App() {
  const user = { name: "Emre", email: "emre@wit.com.tr" };
  return <Profile user = {user}/>
}


//Profile.js

function Profile({user}) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;