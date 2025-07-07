import React from 'react'
import { View } from 'react-native'
type BoxProps = {
    children ?: React.ReactNode,
    className ?: string
}
const Box = ({children,className}:BoxProps) => {
  return (
    <View className={className}>
      {children}
    </View>
  )
}
const Header = ({children,className}:BoxProps) => {
  return (
    <View className={className}>
      {children}
    </View>
  )
}
const Body = ({children,className}:BoxProps) => {
  return (
    <View className={className}>
      {children}
    </View>
  )
}

Box.Header = Header
Box.Body = Body
export default Box