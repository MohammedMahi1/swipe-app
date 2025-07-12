import { useAppSelector } from 'hooks/storeHooks';
import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements';

type AvatarProps = {
    size?: number | 'small' | 'medium' | 'large' | 'xlarge';
    onPress?: () => void;
}

const Avatars = ({ size = "medium" ,onPress}: AvatarProps) => {
    const {firstName} = useAppSelector((state)=>state.user)
    console.log(firstName);
    
    return (
        <Avatar
            onPress={onPress}
            renderPlaceholderContent={<View className='bg-primary p-5 w-20 h-20' />}
            rounded
            title={firstName.slice(0,2)}
            size={size}

            containerStyle={{ margin: 10 }}
        />
    )
}

export default Avatars