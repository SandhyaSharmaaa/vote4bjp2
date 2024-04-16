// import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Blog from "./pages/Blog";
// import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Blog />} />
    </Routes>
    </Router>
  );
};

export default App;





































// import React, { useEffect, useState } from "react";
// export default function Demo() {
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
//     console.log('count is:',count);
//     return(()=>
//     console.log('I am fine'))
//   },[count])

//   return (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }
