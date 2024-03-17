import { useState } from "react";
import { handleLogin } from "../Api";
import { setTokens } from "../Api"
import { useAuth } from '../context/Auth';

function Login({ onLogin }) {
    const { doLogin } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        doLogin(email, password)
        // const login = await handleLogin(email, password);
        // console.log(login.data.data.accesToken)
        // if (login.status === 200) {
        //     setEmail("")
        //     setPassword("")
        //     setTokens(login.data.data.accessToken)
        //     onLogin(login.data.data.accessToken)
        //     alert(login.data.message)
        // } else {
        //     const { email = [], password = [] } = login.data.errors;
        //     const err = [...email, ...password];
        //     alert(err.join("\n"));
        // }
    }

    return (
        <div className="bg-gradient-to-r from-zinc-700 to-[#171717] p-10 h-full min-h-screen">
            <h1 className="text-white text-center text-2xl font-bold m-2">Login</h1>
            <div className=" container flex flex-col">

                <label className="text-white">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 rounded-lg" type="email" id="email" name="email" required></input>

                <label className="text-white">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 rounded-lg" type="password" id="password" name="password" required></input>

                <button onClick={handleClick} className="bg-[#171717] text-white text-lg rounded-lg px-5 py-3 mt-2 transition duration-300 ease-in-out hover:bg-gray-400" type="submit">Login</button>
            </div>
        </div>
    )
}
export default Login;

