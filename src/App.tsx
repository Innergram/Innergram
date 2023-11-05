import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/ThemeProvider"
import FileUpload from './components/FileUpload'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <h1 className='text-xl text-red-500 font-bold'>Vite + React</h1>
      <div>
      <Button>Click me</Button>
      <FileUpload></FileUpload>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </ThemeProvider>
      
      
    </>
  )
}

export default App
