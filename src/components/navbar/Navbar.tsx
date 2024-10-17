import { Container, Flex, TabNav } from "@radix-ui/themes"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <TabNav.Root>
      <Container>
        <Flex justify="between">
          <TabNav.Link asChild>
            <Link to="/">Home</Link>
          </TabNav.Link>
          <Flex>
            <TabNav.Link asChild>
              <Link to="/clients">Clientes</Link>
            </TabNav.Link>
            <TabNav.Link asChild>
              <Link to="/register">Cadastrar cliente</Link>
            </TabNav.Link>
          </Flex>
        </Flex>
      </Container>
    </TabNav.Root>
  )
}
