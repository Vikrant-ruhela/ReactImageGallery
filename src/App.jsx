import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import CardDetail from './Components/CardDetail'
import axios from "axios"

function App() {
  const [res, setRes] = useState([])
  async function downloadData() {
    const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20")
    setRes(response.data.photos)
  }

  const arr = res.map((e) => { return e.url })

  useEffect(() => {
    downloadData()
  }, [])

  return (
    <>

      <div className='flex flex-wrap items-center justify-center w-full p-4 gap-4'>
        {arr.map((ele, index) => { return <Card src={ele} key={index} /> })}
      </div>
    </>
  )
}

export default App
