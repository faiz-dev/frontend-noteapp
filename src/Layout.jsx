import { Link, Outlet } from "react-router-dom";
import { useAuth } from './context/Auth';

export default function Layout() {
    const { isLoggedin, doLogout } = useAuth()

    return (
        <>
            <div className="flex p-3 bg-white justify-around">
                <h1 className="font-bold text-2xl">Notes App</h1>
                {isLoggedin ? (
                    <span className='font-bold'>Udah Login</span>
                ) : (
                    <span className='font-bold'>Belum Login</span>
                )}

                <nav className="flex mx-2">
                    {/* <Link to={"/register"} className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Register</Link>
            <Link to={"/login"} className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Login</Link>
            <Link to={"/note"} className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Note</Link> */}
                </nav>
                {isLoggedin ?
                    <>
                        <Link to={"/Note"}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Notes</span></Link>
                        <Link onClick={() => doLogout()}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Logout</span></Link>
                    </>
                    : <>
                        <Link to={"/Registrasi"}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Registrasi</span></Link>
                        <Link to={"/Login"}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Login</span></Link>
                    </>}

            </div>
            <Outlet />
        </>
    )
}