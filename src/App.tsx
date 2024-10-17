import { Container, Theme } from "@radix-ui/themes"
import "./styles/global.css"
import "@radix-ui/themes/styles.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home/Home"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ])

  return (
    <Theme appearance="dark">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Theme>
  )
}

export default App
