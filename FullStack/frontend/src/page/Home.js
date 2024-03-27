import { useContext } from "react"
import { jwtDecode } from 'jwt-decode'
import { AuthContext } from "../App"
import { Outlet } from "react-router-dom"
export default function Home() {
    const { data } = useContext(AuthContext)
    return(
        <>
        <header>
            <p>Home {data[0]}</p> 
        </header>

        <main>
            <Outlet />
        </main>
        </>
    )
}