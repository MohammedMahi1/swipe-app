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
  const [passConf, setPassConf] = useState<string | null>(null)
  const { error } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>()
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    setPassConf(data.password)
    dispatch(asyncCreateAcc(data))
  }

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
                label='First Name'
                placeholder='John'
                autoFocus={true}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                maxLength={50}
                autoComplete='name-given'
                autoCapitalize='sentences'
                error={errors.firstName ? "First name is required" : null}
              />
            )}
            name="firstName"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label='First Name'
                placeholder='Doe'
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                maxLength={50}
                autoComplete='name-family'
                autoCapitalize='sentences'
                error={errors.lastName ? "Last name is required" : null}
              />
            )}
            name="lastName"
          />
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

          <Controller
            control={control}
            rules={{
              required: true,
            }}

            render={({ field: { onChange, onBlur, value, name } }) => (
              <Input
                placeholder='Confirme your password'
                label='Confirme Password'
                visible
                maxLength={20}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={passConf != value ? "Confirme not much" : null}
              />
            )}
            name="confirmePassword"

          />

        </View>
        <Button onPress={handleSubmit(onSubmit)}>Create Account</Button>
        <View className='text-center w-full flex flex-row flex-nowrap gap-2 items-center justify-start'><Text>Already have an account?</Text><Links screen='Login'>Log in</Links></View>
      </Container>
    </KeyboardAvoidingView>
  )
}

export default SignUp