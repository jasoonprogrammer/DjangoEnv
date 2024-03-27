import { useContext } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { AuthContext } from "../App"
import axios from 'axios'

export default function Details() {
    const detail = useLoaderData()
    const { id } = useParams()
    return(
        <>
        <div className="container">
            {detail.desc}
        </div>
        </>
    )
}

export const detailsLoader = async ({ params }) => {
    const data = localStorage.getItem("access")
    const { id } = params

    const res = await fetch("http://localhost:8000/api/details/" + id, {
        headers: {
            "Authorization": "Bearer " + data
        }
    })
    return res.json()
}