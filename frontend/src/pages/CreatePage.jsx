import { Box, Button, Container, Heading, Input, VStack, useToast } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../source/product'
const CreatePage = () => {
    const [newProduct,setNewProduct] = useState({
        name:'',
        price:'',
        image:''
    })
    const toast = useToast()
    const {createProduct} = useProductStore()
    const handleAddProduct = async()=>{
        const {sucess,message} = await createProduct(newProduct);
        if(sucess){
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true
            })
        }else{
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
    }
    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading size={"2x1"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>
                <Box w={"100%"} bg={useColorModeValue('gray.50', 'gray.800')} p={6} rounded={"lg"} shadow={"lg"}>
                    <VStack spacing={4}>
                        <Input 
                        placeholder="Product Name" 
                        value={newProduct.name} 
                        onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}/>
                        <Input 
                        placeholder="Product Price" 
                        value={newProduct.price} 
                        type={"number"}
                        onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}/>
                        <Input 
                        placeholder="Product Image" 
                        value={newProduct.image} 
                        onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}/>
                        <Button colorScheme='purple' onClick={handleAddProduct}>Create</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage