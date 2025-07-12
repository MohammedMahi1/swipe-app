import React from 'react'
import { View, ViewProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type SkeletoneProps =  {
    rounded?:boolean
} & ViewProps

const Skeletone = ({rounded,className,...rest}:SkeletoneProps) => {
  return (
    <View className={twMerge(rounded && "rounded-full","bg-secondary w-full h-[93%] rounded-xl")} {...rest}/>
  )
}

export default Skeletone