import { Text, View, ViewProps } from 'react-native'


type ErrorTypeProps = {
    message:string
} & ViewProps

const Error = ({message,...props}:ErrorTypeProps) => {


  return (
    <View className='bg-red-200 p-4 w-full rounded-md' {...props}>
        <Text className='text-red-500'>{message}</Text>
    </View>
  )
}

export default Error