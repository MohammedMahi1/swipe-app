import React from 'react'
import { View,Text } from 'react-native'
import { Avatar } from 'react-native-elements';
const Avatars = () => {
    return (
        <View>
            <Avatar
                rounded
                source={{
                    uri:
                        'https://avatar.iran.liara.run/public/15',
                }}
                containerStyle={{ margin: 10 }}
                />
                <Text>fgbfgbfbg</Text>
        </View>
    )
}

export default Avatars