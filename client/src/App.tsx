import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
//import Skeleton from 'react-loading-skeleton'
//import 'react-loading-skeleton/dist/skeleton.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import ViewAllGames from './Pages/ViewAllGames'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Authentication from './Pages/Authentication'
import MainLayout from './Layout/MainLayout'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />} />
        <Route path="/games" element={<ViewAllGames />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
       </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
