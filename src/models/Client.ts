export interface Client {
  id: string
  docNumber: string
  name: string
  email: string
  phone: string
  birthDate: string
  isEmployee: boolean
  principal: boolean
  addressType: string
  address: string
  number: string
  complement?: string | null
  city: string
  state: string
  zipCode: string
  neighborhood: string
}
