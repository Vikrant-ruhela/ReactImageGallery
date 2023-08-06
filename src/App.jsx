import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import axios from "axios"
import { Link } from 'react-router-dom'


function App() {
  const [res, setRes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  async function downloadData() {
    try {
      const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20")
      if (response.data.success == false) {
        setIsError(true)
        return
      }
      setRes(response.data.photos)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }

  }

  const arr = res.map((e) => { return e.url })

  useEffect(() => {
    downloadData()
  }, [])

  return (
    <>

      <div className='flex flex-wrap items-center justify-center w-full p-4 gap-4'>
        {isError ? <h1 className='text-6xl font-serif font-semibold text-red-500'>Something went wrong..</h1> :
          isLoading ? <h1 className='text-6xl font-serif font-semibold text-slate-900'>Loading...</h1> : arr.map((ele, index) => { return <Link key={index + 1} to={`/carddetails/${index + 1}`}><Card src={ele} /> </Link> })}
      </div>
    </>
  )
}

export default App
