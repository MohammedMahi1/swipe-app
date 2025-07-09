import { Text, View, ViewProps } from 'react-native'
import { twMerge } from 'tailwind-merge'


type ErrorTypeProps = {
    message:string | null
} & ViewProps

const Error = ({message,className,...props}:ErrorTypeProps) => {


  return (
    <View className={twMerge('bg-red-200 p-4 w-full rounded-md',className)} {...props}>
        <Text className='text-red-500'>{message}</Text>
    </View>
  )
}

export default Error