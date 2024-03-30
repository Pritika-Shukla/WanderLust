import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import  { UserContextProvider } from "./UserContext";

axios.defaults.baseURL='http://127.0.0.1:3000';
axios.defaults.withCredentials=true;
function App()
 {
  return (
    <UserContextProvider>
   <Routes>
   <Route path="/" element={<Layout/>}>
 
   <Route path="/Login" element={<LoginPage/>}/>
   <Route path="/register" element={<RegisterPage/>}/>
   </Route>
   </Routes>
   </UserContextProvider>
    
   
    
  );
}

export default App;
