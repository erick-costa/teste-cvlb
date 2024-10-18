import { Button, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes"
import { Client } from "../../models/Client"
import { api } from "../../lib/axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Clients() {
  const [clients, setClients] = useState<Client[]>([])

  async function getClients() {
    const res = await api.get("/client")
    setClients(res.data)
  }

  useEffect(() => {
    getClients()
  }, [])

  return (
    <>
      <Heading mt={"9"}>Lista de clientes</Heading>
      <Separator my="6" size="4" />
      <Flex wrap="wrap" gap="6">
        {clients.map((client) => (
          <Card key={client.id}>
            <Text as="div" size="2" weight="bold">
              {client.name}
            </Text>
            <Text as="div" size="2" color="gray">
              {client.email}
            </Text>
            <Separator my="2" size="4" />
            <Link to={`/clients/${client.id}`}>
              <Button>Mais informações</Button>
            </Link>
          </Card>
        ))}
      </Flex>
    </>
  )
}
