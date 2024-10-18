import { Container, Theme } from "@radix-ui/themes"
import "./styles/global.css"
import "@radix-ui/themes/styles.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Navbar } from "./components/navbar/Navbar"
import { Clients } from "./pages/clients/Clients"
import { Register } from "./pages/register/Register"
import { FormEvent } from "react"
import { api } from "./lib/axios"
import { ClientDetails } from "./pages/client-details/ClientDetails"

function App() {
  async function registerClient(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const docNumber = data.get("docNumber")?.toString()
    const name = data.get("name")?.toString()
    const email = data.get("email")?.toString()
    const phone = data.get("phone")?.toString()
    const birthDate = data.get("birthDate")
    const isEmployee = data.get("isEmployee") === "on"
    const principal = data.get("principal") === "on"
    const addressType = data.get("addressType")?.toString()
    const address = data.get("address")?.toString()
    const number = data.get("number")?.toString()
    const complement = data.get("complement")?.toString()
    const city = data.get("city")?.toString()
    const state = data.get("state")?.toString()
    const zipCode = data.get("zipCode")?.toString()
    const neighborhood = data.get("neighborhood")?.toString()

    await api.post("/client", {
      docNumber,
      name,
      email,
      phone,
      birthDate,
      isEmployee,
      principal,
      addressType,
      address,
      number,
      complement,
      city,
      state,
      zipCode,
      neighborhood,
    })
  }

  return (
    <BrowserRouter>
      <Theme appearance="dark">
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/:clientId" element={<ClientDetails />} />
            <Route
              path="/register"
              element={<Register registerClient={registerClient} />}
            />
          </Routes>
        </Container>
      </Theme>
    </BrowserRouter>
  )
}

export default App
