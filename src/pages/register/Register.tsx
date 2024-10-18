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

      <Flex align="center" direction="column" mb="9">
        <Separator my="6" size="4" />
        <Flex width="60%" direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              CPF
            </Text>
            <TextField.Root required placeholder="Digite seu CPF" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Nome
            </Text>
            <TextField.Root required placeholder="Digite seu nome" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Email
            </Text>
            <TextField.Root
              required
              type="email"
              placeholder="Digite seu e-mail"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Telefone
            </Text>
            <TextField.Root
              required
              placeholder="Digite seu número de telefone/celular"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Data de nascimento
            </Text>
            <TextField.Root required type="date" />
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
            <Select.Root required defaultValue="home">
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Item value="home">Casa</Select.Item>
                  <Select.Item value="work">Trabalho</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Endereço
            </Text>
            <TextField.Root required placeholder="Digite seu endereço" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Número
            </Text>
            <TextField.Root
              required
              placeholder="Digite o número do seu endereço"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Complemento
            </Text>
            <TextField.Root placeholder="Digite o complemento" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Bairro
            </Text>
            <TextField.Root placeholder="Digite seu bairro" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Cidade
            </Text>
            <TextField.Root placeholder="Digite sua cidade" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Estado
            </Text>
            <TextField.Root placeholder="Digite seu estado" />
          </label>

          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              CEP
            </Text>
            <TextField.Root placeholder="Digite seu CEP" />
          </label>
        </Flex>

        <Flex width="60%" mt="4" justify="end">
          <Button>Cadastrar</Button>
        </Flex>
      </Flex>
    </>
  )
}
