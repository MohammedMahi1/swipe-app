import Button from 'components/Button'
import Container from 'components/Container'
import Links from 'components/Link'
import { H1 } from 'components/Typographie'
import Input from 'components/ui/Input'
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { useRef, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'
import { asyncCreateAcc } from 'store/reducers/authSlices/authSlice'
import { SignUpInputs } from 'types/input'

const SignUp = () => {

  const firstNameRef = useRef<TextInput>(null)
  const lastNameRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const confirmPasswordRef = useRef<TextInput>(null)
  const [passConf, setPassConf] = useState<string | null>(null)
  const { error } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>()
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => dispatch(asyncCreateAcc(data))

  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
      <Container className='items-center justify-between bg-white w-full'>
        <H1>Create Account On Swiplet</H1>
        <View className='w-full gap-6'>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                enablesReturnKeyAutomatically
                returnKeyType='next'
                label='First Name'
                placeholder='John'
                ref={firstNameRef}
                autoFocus={true}
                onSubmitEditing={() => lastNameRef.current?.focus()}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                maxLength={50}
                autoComplete='name-given'
                autoCapitalize='sentences'
                error={errors.first_name ? "First name is required" : null}
              />
            )}
            name="first_name"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                enablesReturnKeyAutomatically
                returnKeyType='next'
                ref={lastNameRef}
                onSubmitEditing={() => emailRef.current?.focus()}
                label='First Name'
                placeholder='Doe'
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                maxLength={50}
                autoComplete='name-family'
                autoCapitalize='sentences'
                error={errors.last_name ? "Last name is required" : null}
              />
            )}
            name="last_name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                returnKeyType='next'
                placeholder='ewfdvdfv@example.com'
                label='Email'
                ref={emailRef}
                enablesReturnKeyAutomatically
                onSubmitEditing={() => passwordRef.current?.focus()}
                keyboardType='email-address'
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
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                returnKeyType='next'
                placeholder='password'
                label='Password'
                enablesReturnKeyAutomatically
                visible
                maxLength={20}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.password ? "Password is required" : null}
                ref={passwordRef}
                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              />
            )}
            name="password"
          />

          <Input
            returnKeyType='next'
            placeholder='password'
            label='Password'
            enablesReturnKeyAutomatically
            visible
            onChangeText={(e)=>console.log(e)}
            maxLength={20}
            // error={ ? "Password is required" : null}
            ref={passwordRef}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        </View>
        <Button onPress={handleSubmit(onSubmit)}>Create Account</Button>
        <View className='text-center w-full flex flex-row flex-nowrap gap-2 items-center justify-start'><Text>Already have an account?</Text><Links screen='Login'>Log in</Links></View>
      </Container>
    </KeyboardAvoidingView>
  )
}

export default SignUp