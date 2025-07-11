import Button from 'components/Button'
import Container from 'components/Container'
import Links from 'components/Link'
import { H1 } from 'components/Typographie'
import Input from 'components/ui/Input'
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { KeyboardAvoidingView, View } from 'react-native'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { asyncLogin } from 'store/reducers/authSlices/authSlice'
import Error from 'components/Error'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { LoginInputs } from 'types/input'



const Login = () => {
    const dispatch = useAppDispatch()
    const {isAuthenticated,loading} = useAppSelector(state=>state.auth)
    const navigating = useNavigation()


    const {error} = useAppSelector((state)=>state.auth)    
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>()
    const onSubmit: SubmitHandler<LoginInputs> = (data) =>  {
        dispatch(asyncLogin(data)).unwrap().then((e)=>{
            
        })
    }
    return (
        <KeyboardAvoidingView className='flex-1' behavior='padding'>
            <Container className='items-center justify-between  bg-white w-full'>
                <H1>Swiplet</H1>
                <View className='w-full gap-6'>
                    <View className='w-full gap-6'>
                            <Error message={error} className={error ? "opacity-1":"opacity-0"} />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    placeholder='ewfdvdfv@example.com'
                                    label='Email'

                                    keyboardType='email-address'
                                    autoFocus={true}
                                    onChangeText={onChange}
                                    autoCapitalize='none'
                                    autoComplete='email'
                                    value={value}
                                    onBlur={onBlur}
                                    maxLength={50}
                                    error={errors.email ? "Email is required" : null}
                                />
                            )}
                            name="email"
                        />

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    placeholder='password'
                                    label='Password'
                                    visible
                                    maxLength={20}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    error={errors.password ? "Password is required" : null}
                                    
                                />
                            )}
                            name="password"
                        />

                    </View>
                    <Button onPress={handleSubmit(onSubmit)}>
                        {
                            loading ? 
                            "Loading..."
                            :
                            "Login"
                        }
                    </Button>

                </View>
                <View className='flex-row gap-2 items-center justify-between w-full'>
                    <Links screen='ForgetPassword'>Forgot Your Password?</Links>
                    <Links screen='SignUp'>Sign Up</Links>
                </View>
            </Container>
        </KeyboardAvoidingView>
    )
}

export default Login