import { Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("")
  const [weight, setWeight] = useState("")

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
      <Heading as="h1">Clientes</Heading>

      <form>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            name="name"
            value={name}
            onChange={e=> setName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Peso</FormLabel>
          <Input
            name="weight"
            value={weight}
            onChange={e=> setWeight(e.target.value)}
          />
        </FormControl>
      </form>
    </Container>
  )
}
