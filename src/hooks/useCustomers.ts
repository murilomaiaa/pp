import { useEffect, useState } from 'react'

type PossibleSex = 'M' | 'F'

export type CustomerData = {
  id: string
  name: string
  weightInKg: number
  heightInCm: number
  goal: 'Hipertrofia' | 'Emagrecimento'
  sex: PossibleSex
}

const exerciseLists = {
  'woman-lose-weight-a-id': {
    id: 'woman-lose-weight-a-id',
    name: 'Treino de superiores feminino',
    exercises: [
      {
        name: 'Pulldown',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      {
        name: 'Rosca',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      // Add more exercises for women's fat loss back/biceps here
    ],
  },
  'woman-lose-weight-c-id': {
    id: 'woman-lose-weight-c-id',
    name: 'Treino de inferiores feminino',
    exercises: [
      {
        name: 'Agachamento',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      {
        name: 'Elevação pélvica',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      // Add more exercises for women's fat loss legs here
    ],
  },
  'man-lose-weight-a-id': {
    id: 'man-lose-weight-a-id',
    name: 'Treino masculino costas/bíceps',
    exercises: [
      {
        name: 'Remada',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      {
        name: 'Rosca',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      // Add more exercises for men's fat loss back/biceps here
    ],
  },
  'man-lose-weight-b-id': {
    id: 'man-lose-weight-b-id',
    name: 'Treino maculino peito/tríceps',
    exercises: [
      {
        name: 'Supino',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      {
        name: 'Tríceps francês',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      // Add more exercises for men's fat loss chest/triceps here
    ],
  },
  'man-lose-weight-c-id': {
    id: 'man-lose-weight-c-id',
    name: 'Treino masculino pernas',
    exercises: [
      {
        name: 'Agachamento',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      {
        name: 'Leg Press',
        numberOfReps: 10,
        numberOfSets: 4,
      },
      // Add more exercises for men's fat loss legs here
    ],
  },
  // Add more subcategories as needed
}
type ExerciseSet = (typeof exerciseLists)['man-lose-weight-a-id']

type CustomerWithExercises = CustomerData & {
  exercises: ExerciseSet[]
}

export const useCustomers = () => {
  const [customers, setCustomers] = useState<
    Record<string, CustomerWithExercises>
  >({})

  const getOne = (id: string): CustomerWithExercises | undefined => {
    return customers[id]
  }

  useEffect(() => {
    setCustomers(JSON.parse(localStorage.getItem('customers') || '{}'))
  }, [])

  const addCustomer = (newCustomer: CustomerData) => {
    const exercisesMapper: Record<PossibleSex, Array<ExerciseSet>> = {
      F: [
        exerciseLists['woman-lose-weight-a-id'],
        exerciseLists['woman-lose-weight-c-id'],
      ],
      M: [
        exerciseLists['man-lose-weight-a-id'],
        exerciseLists['man-lose-weight-b-id'],
        exerciseLists['man-lose-weight-c-id'],
      ],
    }
    const updatedCustomers = Object.assign(customers, {
      [newCustomer.id]: {
        ...newCustomer,
        exercises: exercisesMapper[newCustomer.sex],
      },
    })
    setCustomers(updatedCustomers)

    localStorage.setItem('customers', JSON.stringify(updatedCustomers))
  }

  return { customers, addCustomer, getOne }
}
