import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
      <h1 className='text-5xl font-medium text-center p-8'>React Image Gallery</h1>
      <div className='flex flex-wrap items-center justify-center w-full p-4 gap-4'>
        <Card src={"https://images.unsplash.com/photo-1691036365017-76f8114f50c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"} />
      </div>
    </>
  )
}

export default App
