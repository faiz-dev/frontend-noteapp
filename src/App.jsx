import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Note from "./Note"
import Login from "./pages/Login"
import Registrasi from "./pages/Registrasi"
import { getToken } from "./Api"
import { useAuth } from './context/Auth'
// import { setTokens } from "./token"

function App() {
    // panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    const [token, setToken] = useState(null);

    const handleLogin = (tokens) => {
        setToken(tokens)
    }

    const handleLogout = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const tokens = getToken()
        setToken(tokens);
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout token={token} onLogout={handleLogout} />}>
                    {isLoggedin ? (
                        <>
                            <Route path={"/note"} element={<Note />} />
                            <Route path={"/login"} element={<Navigate to={'/note'} />} />
                        </>
                    ) : (
                        <>
                            <Route path={"/registrasi"} element={<Registrasi />} />
                            <Route path={"/login"} element={<Login onLogin={handleLogin} />} />
                            <Route path={"*"} element={<Navigate to={'/login'} />} />
                        </>
                    )}
                </Route>
            </Routes>

        </BrowserRouter>

    )
}

export default App