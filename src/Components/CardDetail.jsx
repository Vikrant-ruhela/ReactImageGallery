import { useParams } from "react-router-dom"
import Card from "./Card"
import { useEffect, useState } from "react"
import axios from "axios"

const CardDetail = () => {
    const { id } = useParams()
    const [Data, setData] = useState({})
    async function download() {
        const D = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        setData(D.data.photo)
    }
    useEffect(() => {
        download()
    }, [])


    return (
        <div className="bg-blue-950 text-white flex p-8 justify-start gap-4 rounded-3xl m-8 items-center">
            <Card src={Data.url} />
            <div className="flex gap-8 flex-col">
                <h1 className="text-4xl font-semibold">
                    {Data.title}
                </h1>
                <p className="text-white font-semibold font-sans text-xl">
                    {Data.description}
                </p>
            </div>
        </div>
    )
}

export default CardDetail