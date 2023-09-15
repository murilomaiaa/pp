import { ExerciseSet } from "@/types/ExerciseSet"
import { Box, Flex, Text } from "@chakra-ui/react"

export type ExerciseListItemProps = {
  name: string
  sets: ExerciseSet[]
  restTimeInSeconds?: number
}

export const ExerciseListItem = ({name,sets,restTimeInSeconds}: ExerciseListItemProps) => {
  return (
    <Box
      display="flex"
      flexDirection={["column", null, 'row']}
      flexWrap="wrap"
      gap={["1em", null, "2em"]}
      borderRadius="md"
      p="1em"
      width="100%"
    >
      <Flex gap="0.5em">
        <Text fontWeight="bold">{name}</Text>
        <Text>{getRestTimeBasedOnSeconds(restTimeInSeconds ?? 0)}</Text>
      </Flex>
      <Flex flexDirection={["column", null, 'row']} gap={["0.5em",null,"1em"]}>
        {sets.map((set, index) => <Text key={index}>{formatSet(set)}</Text>)}
      </Flex>
    </Box>
  )
}

const formatSet = ({numberOfReps,numberOfSets,weight,weightType}: ExerciseSet) => {
  const sets = numberOfSets === 1 ? '1 set' : `${numberOfSets} sets`
  const reps = numberOfReps === 1 ? '1 rep' : `${numberOfReps} reps`
  const weightString = `${weight} ${weightType ? weightType : ''}`

  return `${sets} ${reps} ${weightString}`
}

const getRestTimeBasedOnSeconds = (restTime: number) => {
  if (restTime === 0) {
    return ""
  }
  const minutes = Math.floor(restTime / 60)
  const seconds = restTime - minutes * 60
  if (minutes <= 0) {
    return `${seconds}"`
  }
  if (seconds === 0) {
    return `${minutes}'`
  }
  return `${minutes}'${seconds}"`

}
