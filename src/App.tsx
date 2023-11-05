import { useState } from 'react'
import { Button } from "@/components/ui/button"




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-xl text-red-500 font-bold'>Vite + React</h1>
      <div>
      <Button>Click me</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
