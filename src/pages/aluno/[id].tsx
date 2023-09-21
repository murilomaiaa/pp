import { useCustomers } from '@/hooks/useCustomers'
import Navbar from '@/components/Navbar'
import {
  Box,
  Container,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

type CustomerDataForm = {
  name: string
  weightInKg: number
  heightInCm: number
  goal: 'Hipertrofia' | 'Emagrecimento'
  sex: 'M' | 'F'
}

export default function New() {
  const router = useRouter()

  const { getOne } = useCustomers()

  const customer = getOne(router.query.id as string)

  return (
    <>
      <Navbar />
      <Container
        centerContent={false}
        maxWidth="880px"
        paddingTop="2em"
        display="flex"
        flexDirection="column"
        gap="1em"
        minHeight="100vh"
      >
        <Heading as="h1">{customer?.name}</Heading>
        <Text>Altura {(customer?.heightInCm ?? 0) / 100}m</Text>
        <Text>Peso {customer?.weightInKg} kg</Text>
        <Text>Objetivo {customer?.goal}</Text>
        <Text>Sexo {customer?.sex}</Text>

        <Flex gap={1} flexDirection="column">
          {customer?.exercises.map((exercise) => (
            <Box
              bgColor="blue.50"
              key={exercise.id}
              borderRadius={4}
              px={8}
              py={2}
            >
              <Text>{exercise.name}</Text>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                {exercise.exercises.map((e) => (
                  <div key={e.name}>
                    <Text>{e.name}</Text>
                    <Text>{e.numberOfSets} sets</Text>
                    <Text>{e.numberOfReps} repetições</Text>
                  </div>
                ))}
              </VStack>
            </Box>
          ))}
        </Flex>
      </Container>
    </>
  )
}
