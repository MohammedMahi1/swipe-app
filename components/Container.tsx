
import { ReactNode } from 'react'
import { View } from 'react-native-reanimated/lib/typescript/Animated'


type ContainerProps = {
    children:ReactNode
}
const Container = ({children}:ContainerProps) => {
  return (
    <View>
        {children}
    </View>
  )
}

export default Container