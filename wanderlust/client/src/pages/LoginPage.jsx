import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redierct,setRedirect]=useState(false);
 const {setUser}= useContext(UserContext);
  async function handleLogin(ev) {
    ev.preventDefault();
    try {
    const {data}=  await axios.post("/login", { email, password });
    setUser(data)
      alert("Login sucessful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed");
    }
  }
  if(redierct){
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <div className="text-center mt-32 grow   ">
      <div className="">
        <h1 className="text-2xl mb-4">Login</h1>
        <form action="" className="max-w-sm mx-auto" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="bg-rose-500 p-1 rounded-xl w-full text-white">
            Login
          </button>
          <div className="text-gray-500 mt-2">
            Dont have an account yet?
            <Link className="underline text text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
