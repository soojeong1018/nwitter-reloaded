import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout.tsx";
import Home from "./routes/home.tsx";
import Profile from "./routes/profile.tsx";

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path:"profile",
        element: <Profile />
      },

    ]
  }]);

  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
