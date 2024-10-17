import { Button, Flex, Heading } from "@radix-ui/themes"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <Flex
      mt={"9"}
      justify="center"
      direction={"column"}
      align={"center"}
      gap={"4"}
    >
      <Heading>Bem vindo(a)!</Heading>
      <Link to="/register">
        <Button>Cadastrar cliente</Button>
      </Link>
    </Flex>
  )
}
