import { Badge, DataList, Heading, Separator } from "@radix-ui/themes"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Client } from "../../models/Client"
import { api } from "../../lib/axios"

export function ClientDetails() {
  const { clientId } = useParams()
  const [client, setClient] = useState<Client>()

  useEffect(() => {
    api.get(`client/${clientId}`).then((response) => setClient(response.data))
  }, [clientId])

  function addressTypePt(addressType: string | undefined) {
    switch (addressType) {
      case "work":
        return "Trabalho"
      case "home":
        return "Casa"
      default:
        return ""
    }
  }

  return (
    <>
      <Heading mt={"9"}>Detalhes do cliente</Heading>
      <Separator my="6" size="4" />
      <DataList.Root>
        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Nome
          </DataList.Label>
          <DataList.Value>{client?.name}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            CPF
          </DataList.Label>
          <DataList.Value>{client?.docNumber}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            E-mail
          </DataList.Label>
          <DataList.Value>{client?.email}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Telefone
          </DataList.Label>
          <DataList.Value>{client?.phone}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Data de nascimento
          </DataList.Label>
          <DataList.Value>{client?.birthDate}</DataList.Value>
        </DataList.Item>

        <DataList.Item align="center">
          <DataList.Label color="cyan" minWidth="88px">
            É empregado?
          </DataList.Label>
          <DataList.Value>
            <Badge
              color={client?.isEmployee === true ? "jade" : "crimson"}
              variant="soft"
              radius="full"
            >
              {client?.isEmployee === true ? "Sim" : "Não"}
            </Badge>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>

      <Heading size="4" mt={"7"}>
        Endereços
      </Heading>

      <Separator my="4" size="4" />

      <DataList.Root>
        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Endereço principal
          </DataList.Label>
          <DataList.Value>
            <Badge
              color={client?.principal === true ? "jade" : "crimson"}
              variant="soft"
              radius="full"
            >
              {client?.principal === true ? "Sim" : "Não"}
            </Badge>
          </DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Tipo de endereço
          </DataList.Label>
          <DataList.Value>{addressTypePt(client?.addressType)}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            CEP
          </DataList.Label>
          <DataList.Value>{client?.zipCode}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Endereço
          </DataList.Label>
          <DataList.Value>{client?.address}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Número
          </DataList.Label>
          <DataList.Value>{client?.number}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Complemento
          </DataList.Label>
          <DataList.Value>{client?.complement}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Bairro
          </DataList.Label>
          <DataList.Value>{client?.neighborhood}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Estado
          </DataList.Label>
          <DataList.Value>{client?.state}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label color="cyan" minWidth="88px">
            Cidade
          </DataList.Label>
          <DataList.Value>{client?.city}</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </>
  )
}
