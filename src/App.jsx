import { Route, Routes } from "react-router-dom"
import Counter from "./counter/Counter"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Display from "./pages/Display"

function App() {

  
  return (
    <>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/products" element={<Display/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
