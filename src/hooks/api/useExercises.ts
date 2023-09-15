import { useMutation, useQuery } from "react-query"

const fetchExercises = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exercises`)
  const json = await response.json()
  console.log(json)
  return json
}

type ExercisesResponse = {
  
}

export const useExercises = () => {
 return useQuery('exercises', fetchExercises)
}
