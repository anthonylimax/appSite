import Home from "./pages/HomePage"
import { AccountContext } from "../context/AccountContext"
import AccountProvider from "../context/AccountContext"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    }, 
    {
     path: '/notebook',
     element: <div></div>,
    }
  ])
  return (
    <AccountProvider value={{}}>
      <RouterProvider  router={routes}/>
    </AccountProvider>
  )
}

export default App
