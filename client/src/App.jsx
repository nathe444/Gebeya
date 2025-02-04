import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import Dashboard from "./pages/admin-view/Dashboard"
import Features from "./pages/admin-view/Features"
import Orders from "./pages/admin-view/Orders"
import Products from "./pages/admin-view/Products"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/NotFound"
import ShoppingHome from "./pages/shopping-view/Home"
import ShoppingListing from "./pages/shopping-view/Listing"
import ShoppingCheckout from "./pages/shopping-view/Checkout"
import ShoppingAccount from "./pages/shopping-view/Account"
import CheckAuth from "./components/common/CheckAuth"
import Unauth from "./pages/Unauth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./store/auth-slice"
import { Skeleton } from "./components/ui/skeleton"

function App() {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading)

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  const { isAuthenticated, user } = useSelector((state) => state.auth)


  if (loading) {
    return (
      <Skeleton className="h-96 w-1/2" />
    )
  }

  return (
    <div className="flex flex-col overflow-hidden bg-background w-full h-screen" >
      <Routes >
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='features' element={<Features />} />
          <Route path='orders' element={<Orders />} />
          <Route path='products' element={<Products />} />
        </Route>

        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" elemnt={<ShoppingCheckout />} />
          <Route path="account" elemnt={<ShoppingAccount />} />
        </Route>

        <Route path='unauth-page' element={<Unauth />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  )
}

export default App
