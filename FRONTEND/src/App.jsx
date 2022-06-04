import {Route, Routes, BrowserRouter} from "react-router-dom"
import Authlayout from "./layout/Authlayout"
import Confirm from "./pages/Confirm"
import ForgetPassword from "./pages/ForgetPassword"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Authlayout />}>
          <Route index element={ <Login /> } />
          <Route path="register" element= {<Register />}/>
          <Route path="forget-password" element= {<ForgetPassword />}/>
          <Route path="confirm-account/:token" element= {<Confirm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App