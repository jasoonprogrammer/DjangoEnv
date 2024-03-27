import { useEffect, useState } from "react"

export default function useFetchToken(url) {
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({
                username: "jason",
                password: "asd"
            })
        }
        setIsLoading(true)
        fetch(url, option).then(
            res => {
                if (! res.ok) {
                    setIsLoading(false)
                    throw("Something went wrong")
                }
                return res.json()
            }
        ).then(
            data => {
                setData([data.access, data.refresh])
                setIsLoading(false)
                localStorage.setItem("access", data.access)
            }
        ).catch(
            err => {
                setIsLoading(false)
                setMessage(err.message)
            }
        )
    }, [])

    return {data, isLoading, message}
}