import { fetchExercises } from "@/hooks/api/useExercises"
import { ExerciseSet } from "@/types/ExerciseSet"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps } from "@chakra-ui/react"
import { useState } from "react"
import { useMutation } from "react-query"

type AddSetModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleAdd(data: ExerciseSet): Promise<void>
}
export const AddSetModal = ({ isOpen, onClose, handleAdd }: AddSetModalProps) => {
  const [numberOfSets, setNumberOfSets] = useState('')
  const [numberOfReps, setNumberOfReps] = useState('')
  const [weight, setWeight] = useState('')
  const [weightType, setWeightType] = useState('')

  const { mutate, isLoading } = useMutation(fetchExercises, {
    onSuccess() {
      const data = {
        numberOfSets: Number(numberOfSets),
        numberOfReps: Number(numberOfReps),
        weight: Number(weight),
        weightType
      }

      handleAdd(data)
      onClose()
    }
  })

  return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Adicionar série</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form>
          <FormControl isRequired>
            <FormLabel htmlFor="numberOfSets">Séries</FormLabel>
            <Input
              name="numberOfSets"
              type="number"
              value={numberOfSets}
              onChange={e=> setNumberOfSets(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="numberOfReps">Repetições</FormLabel>
            <Input
              name="numberOfReps"
              type="number"
              value={numberOfReps}
              onChange={e=> setNumberOfReps(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="weight">Carga</FormLabel>
            <Input
              name="weight"
              type="number"
              value={weight}
              onChange={e=> setWeight(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="weightType">Tipo carga</FormLabel>
            <Input
              name="weightType"
              type="text"
              value={weightType}
              placeholder="kg, lbs, pl"
              onChange={e=> setWeightType(e.target.value)}
            />
          </FormControl>
        </form>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='green' mr={3} onClick={onClickAdd} isLoading={loading}>
          Adicionar
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}
