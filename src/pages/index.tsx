import Head from 'next/head'
import { Button, Container, Flex, Heading } from '@chakra-ui/react'
import { CustomerListItem } from '@/components/ExerciseList/ExerciseListItem/CustomerListItem'
import { useRouter } from 'next/router'
import { useCustomers } from '@/hooks/useCustomers'
import Header from '@/components/Navbar'

export default function Home() {
  const { customers } = useCustomers()

  const router = useRouter()

  return (
    <>
      <Head>
        <title>ShapeUp</title>
        <meta name="description" content="Simple and powerful logbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        <Heading as="h1">Clientes</Heading>
        <Flex width="100%" flexDirection="row-reverse">
          <Button
            size="sm"
            variant="solid"
            colorScheme="green"
            onClick={() => router.push('/new')}
          >
            Adicionar
          </Button>
        </Flex>
        <Flex flexDirection="column" gap={2}>
          {Object.values(customers).map((customer) => (
            <CustomerListItem key={customer.id} customer={customer} />
          ))}
        </Flex>
      </Container>
    </>
  )
}
