import Head from 'next/head'
import { Button, Container, Flex, Grid, GridItem, Heading, useDisclosure } from '@chakra-ui/react'
import { ExerciseListItem } from '@/components/ExerciseList/ExerciseListItem/ExerciseListItem'
import { AddSetModal } from '@/components/Modal/AddSetModal'
import { useExercises } from '@/hooks/api/useExercises'
import { ExerciseSet } from '@/types/ExerciseSet'
import { useRouter } from 'next/router'

export default function Home() {
  const { data, isLoading, error, refetch } = useExercises()

  const router = useRouter()

  return (
    <>
      <Head>
        <title>ShapeUp</title>
        <meta name="description" content="Simple and powerful logbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <Grid
          templateAreas={`"list-item list-item list-item"
          ". . button"
          `}
          templateColumns="1fr 1fr"
          justifyContent="space-between"
        >
          <GridItem area="list-item">
            <Flex>
              {data?.exercises.map((exercise: any) =>(
                <ExerciseListItem
                key={exercise.id}
                name={exercise.name}
                sets={exercise.sets}
                restTimeInSeconds={exercise.restTimeInSeconds}
                />
                ))}
            </Flex>
          </GridItem>
          <GridItem area="button" display="flex" justifyContent="flex-end">
            <Button size="sm" variant="solid" colorScheme="green" onClick={() => router.push('/new')}>Adicionar</Button>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
