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
                <View>
                    <View className='w-full'>
                        <Input
                            placeholder='ewfdvdfv@example.com'
                            label='Email'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoComplete='email'

                        />
                        <Input
                            placeholder='*********'
                            label='Password'
                            visible
                        />
                    </View>
                    <View>
                        <Text>Remember Me Next Time </Text>
                        <Button>Connect</Button>
                    </View>

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