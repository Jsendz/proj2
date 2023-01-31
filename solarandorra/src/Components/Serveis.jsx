import React from 'react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'

export const Serveis = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around 2xl:h-screen bg-amber-400 text-center py-10">
    <h2 className="text-4xl md:text-6xl font-bold text-white p-10">Els nostres serveis</h2>
    <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-around lg:justify-around lg:mx-auto ">
        <div className="w-[90%] lg:w-[30%]   flex flex-col justify-center mx-auto bg-white rounded-xl shadow-md text-2xl md:text-4xl font-bold my-5">
            <img className="rounded-t-xl w-full h-full" src="https://cdn.pixabay.com/photo/2015/10/09/09/55/insulation-978999_960_720.jpg" alt="" />
            <h3 className="py-2">Aillament</h3>
        </div>
        <div className="w-[90%] lg:w-[30%] flex flex-col justify-center mx-auto bg-white rounded-xl shadow-md text-2xl md:text-4xl font-bold my-5">
            <img className="rounded-t-xl w-full h-full" src="https://cdn.pixabay.com/photo/2021/04/26/19/01/heat-pump-6209793_960_720.jpg" alt="" />
            <h3 className="py-2">Bomba de Calor</h3>
        </div>
        <div className="w-[90%] lg:w-[30%] flex flex-col justify-center mx-auto bg-white rounded-xl shadow-md text-2xl md:text-4xl  font-bold my-5">
            <img className="rounded-t-xl w-full h-full" src="https://cdn.pixabay.com/photo/2012/03/03/23/11/alternative-21581_960_720.jpg" alt="" />
            <h3 className="py-2">Plaques Solars</h3>
        </div>
    </div>

        <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    </div>
  )
}
