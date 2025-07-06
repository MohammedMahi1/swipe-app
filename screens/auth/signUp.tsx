import Button from 'components/Button'
import Container from 'components/Container'
import { H1 } from 'components/Typographie'
import Input from 'components/ui/Input'
import { useRef } from 'react'
import { TextInput, View } from 'react-native'

const SignUp = () => {
  const firstNameRef = useRef<TextInput>(null)
  const lastNameRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const confirmPasswordRef = useRef<TextInput>(null)
  return (
    <Container className='items-center justify-between bg-white w-full'>
      <H1>Create Account On Swiplet</H1>
      <View className='w-full gap-6'>
        <Input
          label='First Name'
          placeholder='John'
          ref={firstNameRef}
          onSubmitEditing={() => lastNameRef.current?.focus()}
        />
        <Input
          label='Last Name'
          placeholder='Doe'
          returnKeyType='next'
          ref={lastNameRef}
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <Input
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          placeholder='john.doe@example.com'
          label='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoComplete='email'
          returnKeyType='next'
        />
        <Input
          ref={passwordRef}
          onSubmitEditing={() => confirmPasswordRef.current?.focus()} 
          label='Password'
          visible
          placeholder='*********'
          maxLength={20}
        />
        <Input
          ref={confirmPasswordRef}
          onSubmitEditing={() => confirmPasswordRef.current?.blur()}
          label='Confirm Password'
          visible
          placeholder='*********'
        />
      </View>
      <Button to="Home">Create Account</Button>
    </Container>
  )
}

export default SignUp