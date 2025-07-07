import Container from 'components/Container'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
  return (
    <Container className='flex-1'>
      <View className='items-center justify-center h-full'>
        <Text className='text-2xl font-bold'>Home Screen</Text>
        <Text className='text-lg mt-4'>Welcome to the Swiplet app!</Text>
      </View>
      {/* You can add more components or content here */}
    </Container>
  )
}

export default Home