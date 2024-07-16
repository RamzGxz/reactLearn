import { BrowserRouter,Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Halaman2 from "./pages/Halaman2"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/halaman-2" element={ <Halaman2/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
