import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL='http://localhost:3000'
function App()
 {
  return (
   <Routes>
   <Route path="/" element={<Layout/>}>
 
   <Route path="/Login" element={<LoginPage/>}/>
   <Route path="/register" element={<RegisterPage/>}/>
   </Route>
   </Routes>
    
    
   
    
  );
}

export default App;
