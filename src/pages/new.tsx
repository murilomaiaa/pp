import Header from '@/components/Navbar'
import { useCustomers } from '@/hooks/useCustomers'
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'

type CustomerDataForm = {
  name: string
  weightInKg: number
  heightInCm: number
  goal: 'Hipertrofia' | 'Emagrecimento'
  sex: 'M' | 'F'
}

export default function New() {
  const { register, handleSubmit } = useForm<CustomerDataForm>()

  const router = useRouter()

  const { addCustomer } = useCustomers()

  const onSubmit: SubmitHandler<CustomerDataForm> = (data) => {
    const id = Date.now().toString()
    addCustomer({
      id,
      ...data,
    })
    router.push(`/aluno/${id}`)
  }

  return (
    <>
      <Header />
      <Container
        centerContent={false}
        maxWidth="880px"
        paddingTop="2em"
        display="flex"
        flexDirection="column"
        gap="1em"
        minHeight="100vh"
      >
        <Heading as="h1">Novo aluno</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid columns={[1, null, 2]} gap={4} marginBottom={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <Input {...register('name', { required: true })} id="name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="sex">Sexo</FormLabel>
              <Select
                placeholder="Selecione um sexo"
                {...register('sex', { required: true })}
                id="sex"
              >
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="goal">Objetivo</FormLabel>
              <Select
                placeholder="Selecione um objetivo"
                {...register('goal', { required: true })}
                id="goal"
              >
                <option value="Hipertrofia">Hipertrofia</option>
                <option value="Emagrecimento">Perca peso</option>
              </Select>
            </FormControl>
            <SimpleGrid columns={[1, null, 2]} gap={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="weightInKg">Peso (kg)</FormLabel>
                <Input
                  {...register('weightInKg', {
                    pattern: /^[0-9]+$/,
                  })}
                  id="weightInKg"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="heightInCm">Altura (cm)</FormLabel>
                <Input
                  {...register('heightInCm', { valueAsNumber: true })}
                  id="heightInCm"
                />
              </FormControl>
            </SimpleGrid>
          </SimpleGrid>
          <Flex width="100%" flexDirection="row-reverse">
            <Button colorScheme="green" type="submit">
              Salvar
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  )
}
