import Button from 'components/Button'
import Container from 'components/Container'
import { H1 } from 'components/Typographie'
import Input from 'components/ui/Input'
import {Text, View } from 'react-native'

const Login = () => {
    return (
            <Container className='items-center justify-between  bg-white w-full'>
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
                        <Button to='Index'>Connect</Button>

                </View>                    
                <View className='flex-row gap-2 items-center justify-between w-full'>
                    <Text>Forget Your Password?</Text>
                    <Text>Sign Up</Text>
                </View>
            </Container>
    )
}

export default Login