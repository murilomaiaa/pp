import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

type CustomerData = {
  name: string
  weightInKg: number
  heightInCm: number
  goal: 'hypertrophy' | 'fat-loss'
  sex: 'M' | 'F'
}

export default function New() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerData>()

  const onSubmit: SubmitHandler<CustomerData> = (data) => {
    // request api and redirect
    console.log(data)
  }

  return (
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
        <Flex gap={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input {...register('name')} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="sex">Sexo</FormLabel>
            <Select {...register('sex')}>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="goal">Objetivo</FormLabel>
            <Select {...register('goal')}>
              <option value="hypertrophy">Hipertrofia</option>
              <option value="fat-loss">Perca peso</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="weightInKg">Peso (kg)</FormLabel>
            <Input {...register('weightInKg', { valueAsNumber: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="heightInCm">Altura (cm)</FormLabel>
            <Input {...register('heightInCm', { valueAsNumber: true })} />
          </FormControl>
          <Flex width="100%" flexDirection="row-reverse">
            <Button colorScheme="green" type="submit">
              Salvar
            </Button>
          </Flex>
        </Flex>
      </form>
    </Container>
  )
}
