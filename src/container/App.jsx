
import Home from "../Pages/Home/Home";
//import ErrorPage from "../Pages/error/Error.jsx";
import Single from "../Pages/Single/Single";
import List from "../Pages/List/List";
import Login from "../Pages/Login/Login.jsx";
import New from "../Pages/New/New";
import "../style/dark.scss"
import { userInput, productInput } from "../formSource";
import {useContext} from "react"
import { DarkModeContext } from "../context/darkModeContext";
import {
  BrowserRouter, Routes, Route
  
} from "react-router-dom";



const App=()=>{
 const {darkMode}=useContext(DarkModeContext) 
  return(
    
<div className={darkMode? "app dark":"app"}>
<BrowserRouter>
  <Routes>
    <Route path="/">
    <Route index element={<Home/>}/>
<Route path="Login" element={<Login/>}/>
<Route path="users">
<Route index element={<List/>}/>
<Route path=":userId" element={<Single/>}/>
<Route path="new" element={<New inputs={userInput} title="Add New User"/>}/>

    </Route>
    <Route path="products">
<Route index element={<List/>}/>
<Route path=":productsId" element={<Single/>}/>
<Route path="new" element={<New inputs={productInput} title="Add New Product"/>}/>

    </Route>
    </Route>
  </Routes>
</BrowserRouter>
  
</div>
  )
}
export default App;