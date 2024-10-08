import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import ViewAllGames from './Pages/ViewAllGames'
import NotFound from './Pages/NotFound'
import MainLayout from './Layout/MainLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />} />
        <Route path="/games" element={<ViewAllGames />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
