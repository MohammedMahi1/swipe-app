import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, PressableProps } from 'react-native'
type AddProductBtnProps = {
    color?: string;
    onPress?: PressableProps['onPress'];
}
const AddProductBtn = ({color, onPress}:AddProductBtnProps) => {
  return (
    <Pressable className='bg-primary rounded-full w-16 h-16 flex justify-center items-center' style={{ elevation: 5 }} onPress={onPress}>
        <MaterialCommunityIcons name="plus" size={24} color={"#ffffff"} />
    </Pressable >
  )
}

export default AddProductBtn