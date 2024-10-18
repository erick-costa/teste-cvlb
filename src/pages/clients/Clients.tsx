import { Button, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes"

export function Clients() {
  return (
    <>
      <Heading mt={"9"}>Lista de clientes</Heading>{" "}
      <Separator my="6" size="4" />
      <Flex wrap="wrap" gap="6">
        <Card>
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="2" color="gray">
            teodros@gmail.com
          </Text>
          <Separator my="2" size="4" />
          <Button>Mais informações</Button>
        </Card>
      </Flex>
    </>
  )
}
