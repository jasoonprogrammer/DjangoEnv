import { NavLink, Outlet } from "react-router-dom";

export default function Info() {
    return(
        <>
        Info
        <div>
            <NavLink to = "1">1</NavLink>
        </div>
        <div>
            <NavLink to = "2">2</NavLink>
        </div>
        <div>
            <NavLink to = "3">3</NavLink>
        </div>
        <div>
            <NavLink to = "4">4</NavLink>
        </div>
        <div>
            <NavLink to = "5">5</NavLink>
        </div>

        <div>
            <Outlet />
        </div>
        </>
    )
}