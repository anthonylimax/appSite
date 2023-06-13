import Home from "./pages/HomePage"
import { AccountContext } from "../context/AccountContext"
import AccountProvider from "../context/AccountContext"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Carrinho from "./pages/carrinhoPage"
import NotebookPage from "./pages/NotebookPage"
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    }, 
    {
     path: '/notebook',
     element: <NotebookPage />,
    },
    {
      path: '/carrinho',
      element: <Carrinho />
    }
  ])
  return (
    <AccountProvider value={{}}>
      <RouterProvider  router={routes}/>
    </AccountProvider>
  )
}

export default App
