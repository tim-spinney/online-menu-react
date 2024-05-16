/*import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'*/
import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Menu from './components/Menu'
import ShoppingCartInfo from './components/ShoppingCartInfo'
import ShoppingCartDetails from './components/ShoppingCartDetails';
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
  },
  {
    path: '/cart',
    element: <ShoppingCartDetails />
  }
]);*/

/* function with CapitalizedName
   returns a single JSX (pseudo-HTML) element
*/
function App() {
  return (
    <>
      <HashRouter>
          <nav>
            <h1>SU Bytes</h1>
            <ShoppingCartInfo />
          </nav>
        <main>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/cart' element={<ShoppingCartDetails/>}/>
          </Routes>
        </main>
      </HashRouter>
    </>
  )
}

export default App
