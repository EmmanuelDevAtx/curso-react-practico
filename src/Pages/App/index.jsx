import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { AuthProvider } from '../../Context/auth'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import AppRoutes from '../../Components/AppRoutes'
import { SmallNav } from '../../Components/Navbar/smallNav'

import './App.css'

const App = () => {
  return (
    <ShoppingCartProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
          <SmallNav/>
        </BrowserRouter>
      </AuthProvider>
    </ShoppingCartProvider>
  )
}

export default App
