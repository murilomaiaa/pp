import { CustomerData } from '@/hooks/useCustomers'
import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export type CustomerListItemProps = {
  customer: CustomerData
}

export const CustomerListItem = ({ customer }: CustomerListItemProps) => {
  return (
    <Box
      display="flex"
      flexDirection={['column', null, 'row']}
      flexWrap="wrap"
      gap={['1em', null, '2em']}
      borderRadius="md"
      p="1em"
      width="100%"
    >
      <Flex gap="0.5em">
        <Link href={`/aluno/${customer.id}`}>
        <Text fontWeight="bold">{customer.name}</Text>
        </Link>
      </Flex>
    </Box>
  )
}
