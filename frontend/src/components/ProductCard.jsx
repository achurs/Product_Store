import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack,Button, ModalFooter } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useProductStore } from "../source/product";
import { useToast } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.800","white");
    const bg= useColorModeValue("white","gray.800");
    const {deleteProduct} = useProductStore();
    const toast = useToast();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [updatedProduct,setUpdatedProduct] = useState({name:product.name,price:product.price,image:product.image});
    const handleDeleteProduct = async(pid) => {
        console.log(pid);
        const {success,message} = await deleteProduct(pid);
        if(success){
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
    const {updateProduct} = useProductStore();
    const handleUpdateProduct = async(pid,updatedProduct) => {
        const {success,message} = await updateProduct(pid,updatedProduct);
        if(success){
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
        onClose();
    }
 return (
     <Box
     shadow={'lg'}
     rounded={'lg'}
     overflow={'hidden'}
     transition={'all 0.2s'}
     _hover={{
         transform:"tanslateY(-5px)",
         boxShadow:"2xl"
     }}
     bg={bg}
     >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'}/>
         <Box p={4}>
            <Heading>{product.name}</Heading>
            <Text fontSize={'xl'} fontWeight={'bold'} color={textColor}>${product.price}</Text>
            <HStack spacing={2}>
                <IconButton icon={<EditIcon/>} onClick={onOpen} colorScheme="blue"></IconButton>
                <IconButton icon={<DeleteIcon/>} onClick={() => handleDeleteProduct(product._id)} colorScheme="red"></IconButton>
            </HStack>
         </Box>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
             <ModalContent>
                 <ModalHeader>Update Product</ModalHeader>
                 <ModalCloseButton/>
                 <ModalBody>
                    <VStack spacing={4}>
                        <Input placeholder="Product Name" value={updatedProduct.name} onChange={(e) => setUpdatedProduct({...updatedProduct,name:e.target.value})} />
                        <Input placeholder="Product Price" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({...updatedProduct,price:e.target.value})} />
                        <Input placeholder="Product Image" value={updatedProduct.image} onChange={(e) => setUpdatedProduct({...updatedProduct,image:e.target.value})} />
                    </VStack>
                 </ModalBody>
                 <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => handleUpdateProduct(product._id,updatedProduct) }>Save</Button>
                    <Button mr={3} onClick={onClose}>
                        Close
                    </Button>
                    
                 </ModalFooter>
             </ModalContent>
         </Modal>
     </Box>
)} 

export default ProductCard;