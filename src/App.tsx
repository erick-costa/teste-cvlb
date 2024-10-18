import { Container, Theme } from "@radix-ui/themes"
import "./styles/global.css"
import "@radix-ui/themes/styles.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Navbar } from "./components/navbar/Navbar"
import { Clients } from "./pages/clients/Clients"
import { Register } from "./pages/register/Register"
import { ClientDetails } from "./pages/client-details/ClientDetails"

function App() {
  return (
    <BrowserRouter>
      <Theme appearance="dark">
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/:clientId" element={<ClientDetails />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Theme>
    </BrowserRouter>
  )
}

export default App
