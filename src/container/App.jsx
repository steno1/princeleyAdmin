
import Home from "../Pages/Home/Home";
//import ErrorPage from "../Pages/error/Error.jsx";
import Single from "../Pages/Single/Single";
import List from "../Pages/List/List";
import Login from "../Pages/Login/Login.jsx";
import New from "../Pages/New/New";
import {
  BrowserRouter, Routes, Route
  
} from "react-router-dom";



const App=()=>{
  
  return(
    
<div className="App">
<BrowserRouter>
  <Routes>
    <Route path="/">
    <Route index element={<Home/>}/>
<Route path="Login" element={<Login/>}/>
<Route path="users">
<Route index element={<List/>}/>
<Route path=":userId" element={<Single/>}/>
<Route path="new" element={<New/>}/>

    </Route>
    <Route path="products">
<Route index element={<List/>}/>
<Route path=":productsId" element={<Single/>}/>
<Route path="new" element={<New/>}/>

    </Route>
    </Route>
  </Routes>
</BrowserRouter>
  
</div>
  )
}
export default App;