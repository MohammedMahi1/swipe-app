import Input from 'components/ui/Input'
import React from 'react'
import { Text, View } from 'react-native'

const ForgetPassword = () => {
  return (
    <View>
        <View className='items-center justify-center h-full'>
            <Text className='text-2xl font-bold'>Forget Password</Text>
            <Text className='text-lg mt-4'>Please enter your email to reset your password.</Text>
        </View>
    </View>
  )
}

export default ForgetPassword