/*

İç içe(nested) kullanılmış componentler var. 
user objesini Profile component'ine prop olarak göndermek için gerekli dğzeltmeleri yap. 
Prop destructuring ile prop'lardan al ve Profile component'inde kullan.


App.js

import Page from "./Page.js"
export default function App() {
  const user = {
    name: "melisa",
    email: "melisa@wit.com.tr"
  }
  return <Page />
}


Page.js

import Container from "./Container.js";
export default function Page() {
  return (<div className="page-content"><Container />
  </div>)
}

Container.js

import Profile from "./Profile.js";
export default function Container() {
  return (<div className="container"><Profile />
  </div>)
}

Profile.js


export default function Profile() {
  return (
    <div>
      <h2>Name: Melisa</h2>
      <p>Email: melisa@wit.com.tr</p>
    </div>
  )
}
*/


// App.js

import Page from "./Page.js"
export default function App() {
  const user = {
    name: "melisa",
    email: "melisa@wit.com.tr"
  }
  return <Page user = {user}/> ///// 1
}


// Page.js

import Container from "./Container.js";
export default function Page({user}) {
  return (<div className="page-content"><Container user = {user}/>
  </div>)
}


// Container.js

import Profile from "./Profile.js";
export default function Container({user}) {
  return (<div className="container"><Profile user = {user}/>
  </div>)
}


// Profile.js

export default function Profile({user}) { ////// 2
  return (
    <div>
      <h2>Name: {user.name}</h2> 
      <p>Email: {user.email}</p>
    </div>
  )
}
