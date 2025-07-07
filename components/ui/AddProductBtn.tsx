import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, TouchableOpacity, TouchableOpacityProps } from 'react-native'
type AddProductBtnProps = {
    color?: string;
    onPress?: TouchableOpacityProps['onPress'];
}
const AddProductBtn = ({color, onPress}:AddProductBtnProps) => {
  return (
    <TouchableOpacity className='bg-primary rounded-full w-16 h-16 flex justify-center items-center' style={{ elevation: 5 }} onPress={onPress}>
        <MaterialCommunityIcons name="plus" size={24} color={"#ffffff"} />
    </TouchableOpacity >
  )
}

export default AddProductBtn