import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function RegisterUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Sucesful");
    } catch (e) {
      alert("Registration falied.Please try again");
    }
  }
  return (
    <div className="text-center mt-32 grow">
      <div className="">
        <h1 className="text-2xl mb-4">Register</h1>
        <form action="" className="max-w-sm mx-auto" onSubmit={RegisterUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
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
            Register
          </button>
          <div className="text-gray-500 mt-2">
            Already have an account?
            <Link className="underline text text-black" to={"/Login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
