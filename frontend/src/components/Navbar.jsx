import { Button, Container, HStack, Link, Text } from "@chakra-ui/react"
import { PlusSquareIcon } from "@chakra-ui/icons"
import { useColorMode } from "@chakra-ui/color-mode"
import { Flex } from '@chakra-ui/react'
const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex 
            h={16}
            alignItems={"center"} 
            justifyContent={"space-between"} 
            flexDir={
                { 
                    base: "column",
                    sm: "row", 
                }
                }
            >
                <Text
                fontSize={{ base:"22",sm:"28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                bgClip={"text"}
                >
                    <Link to={("/")}>Product Store</Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={("/create")}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? "Dark" : "Light"}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar