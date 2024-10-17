import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Select,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes"

export function Register() {
  return (
    <>
      <Heading mt={"9"}>Cadastrar cliente</Heading>

      <Flex align="center" direction="column">
        <Separator my="6" size="4" />
        <Flex width="60%" direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              CPF
            </Text>
            <TextField.Root placeholder="Digite seu CPF" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Nome
            </Text>
            <TextField.Root placeholder="Digite seu nome" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Email
            </Text>
            <TextField.Root type="email" placeholder="Digite seu e-mail" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Telefone
            </Text>
            <TextField.Root placeholder="Digite seu número de telefone/celular" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Data de nascimento
            </Text>
            <TextField.Root type="date" />
          </label>

          <Text as="label" size="2" mb="4">
            <Flex gap="2">
              <Checkbox />É empregado?
            </Flex>
          </Text>

          <Text as="div" size="4" weight="bold">
            Endereço
          </Text>

          <Separator size="4" />

          <Text as="label" size="2" mb="2">
            <Flex gap="2">
              <Checkbox />
              Endereço principal
            </Flex>
          </Text>

          <label>
            <Text as="div" mb="2" size="2" weight="bold">
              Tipo de endereço
            </Text>
            <Select.Root defaultValue="home">
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Item value="home">Casa</Select.Item>
                  <Select.Item value="work">Trabalho</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </label>
        </Flex>

        <Flex width="60%" gap="3" mt="4" justify="end">
          <Button variant="soft" color="gray">
            Cancel
          </Button>

          <Button>Save</Button>
        </Flex>
      </Flex>
    </>
  )
}
