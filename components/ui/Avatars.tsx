import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements';

type AvatarProps = {
    size?: number | 'small' | 'medium' | 'large' | 'xlarge';
    onPress?: () => void;
}

const Avatars = ({ size = "medium" ,onPress}: AvatarProps) => {
    return (
        <Avatar
            onPress={onPress}
            renderPlaceholderContent={<View className='bg-red-700 p-5 w-20 h-20' />}
            rounded
            size={size}
            source={{
                uri:
                    'https://i.pravatar.cc/300',
                cache: 'force-cache',
            }}
            containerStyle={{ margin: 10 }}
        />
    )
}

export default Avatars