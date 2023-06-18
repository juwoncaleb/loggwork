import React from 'react'
import Landingpage from './consumer/Landingpage'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
export default function index() {
  return (
    <ChakraProvider>
      <div className='main'>
        <Landingpage />
      </div>
    </ChakraProvider>

  )
}
