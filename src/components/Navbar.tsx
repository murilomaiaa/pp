import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <Flex
      as="header"
      marginX="auto"
      mb={10}
      overflow="hidden"
      paddingY={{ base: 4 }}
      px={{ base: 4, md: 8 }}
      justifyContent="space-between"
      borderBottom="1px solid #ddd"
    >
      <Heading size="lg" bgColor="blue.100">
        <Link href="/">ShapeUp</Link>
      </Heading>
    </Flex>
  )
}

export default Header
