import { BrowserRouter,Routes,Route } from "react-router-dom"

import LoginPage from './pages/LoginPage'
import Home from "./pages/Home"
import { RestaurantItemDetails } from "./pages/RestaurantItemDetails"
import {Cart} from './pages/Cart'
import { ProtectedRoute } from "./components/ProtectedRoute"
import { CartProvider } from "./context/CartContext"
import { PaymentSuccess } from "./components/PaymentSuccess"
import { NotFound } from "./pages/NotFound"

function App() {
  return(
    <CartProvider>
      <Routes>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route exact path="/hotels/:id" element={<ProtectedRoute><RestaurantItemDetails/></ProtectedRoute>}/>
        <Route exact path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
        <Route exact path="/payment" element={<ProtectedRoute><PaymentSuccess/></ProtectedRoute>}/>
        <Route exact path="/not-found" element={<ProtectedRoute><NotFound/></ProtectedRoute>}/>
        <Route exact path="*" element={<ProtectedRoute><NotFound/></ProtectedRoute>}/>
      </Routes>
    </CartProvider>
  )
}

export default App
