import Button from 'components/Button'
import Container from 'components/Container'
import { H1 } from 'components/Typographie'
import Input from 'components/ui/Input'
import React from 'react'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Container className=' flex-1 items-center  bg-white w-full justify-between'>
                <H1>Swiplet</H1>
                <View className='w-full gap-6'>
                    <View className='w-full gap-6'>
                        <Input
                            placeholder='ewfdvdfv@example.com'
                            label='Email'
                            keyboardType='email-address'
                            autoFocus={true}
                            autoCapitalize='none'
                            autoComplete='email'
                        />
                        <Input
                            placeholder='*********'
                            label='Password'
                            visible
                            maxLength={20}
                        />
                    </View>
                        <Button>Connect</Button>

                </View>                    
                <View className='flex-row gap-2 items-center justify-between w-full'>
                    <Text>Forget Your Password?</Text>
                    <Text>Sign Up</Text>
                </View>
            </Container>
        </TouchableWithoutFeedback>

    )
}

export default Login