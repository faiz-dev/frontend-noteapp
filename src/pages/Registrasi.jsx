import { useState } from "react";
import { Register } from "../Api";

function Registrasi() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleRegister = async () => {
        const apiRegis = await Register(name,email,password);
        if(apiRegis.status === 201){
            setName("")
            setEmail("")
            setPassword("")
            alert(apiRegis.data.message)
        }else{
            const {name= [],email = [], password = []} = apiRegis.data.errors;
            const err = [...name,...email,...password]
            alert(err.join("\n"));
        }
    }
    return (
        <div className="bg-gradient-to-r from-zinc-700 to-[#171717] p-10 h-full min-h-screen">
            <h1 className="text-white text-center text-2xl font-bold m-2">Registrasi</h1>
            <div className=" container flex flex-col">
            <label className="text-white">Nama:</label>
            <input className="p-2 rounded-lg" value={name} onChange={(e) => setName(e.target.value)} type="text"></input>
    
            <label className="text-white">Email:</label>
            <input className="p-2 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} type="text"></input>
    
            <label className="text-white">Password:</label>
            <input className="p-2 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} type="password"></input>
    
            <button className="bg-[#171717] text-white text-lg rounded-lg px-5 py-3 mt-2 transition duration-300 ease-in-out hover:bg-gray-400" type="submit">Daftar</button>
        </div>
       </div> 
    )}
    export default Registrasi;
    
    