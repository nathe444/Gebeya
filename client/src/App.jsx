import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import Dashboard from "./pages/admin-view/Dashboard"
import Features from "./pages/admin-view/Features"
import Orders from "./pages/admin-view/Orders"
import Products from "./pages/admin-view/Products"

function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-background w-full h-screen" >
      <h1>Welcome To Gebeya</h1>
      <Routes >
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>  
        </Route>

        <Route path='/admin' element={<AdminLayout/>}>
         <Route path = 'dashboard' element = {<Dashboard/>}/>
         <Route path = 'features' element = {<Features/>}/>
         <Route path = 'orders' element = {<Orders/>}/>
         <Route path = 'products' element = {<Products/> }/>

        </Route>

      </Routes>

    </div>
  )
}

export default App
