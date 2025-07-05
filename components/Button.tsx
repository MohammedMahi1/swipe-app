import { Link } from '@react-navigation/native';
import React, { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { twMerge } from 'tailwind-merge';


type ButtonProps = {
    children: ReactNode;
    to?:string;
} & PressableProps
const Button = ({ children , to,...props}: ButtonProps) => {
    const theme = useColorScheme()
    return (
        <Pressable
        className={twMerge('py-4 rounded-[16] justify-center items-center  w-full')}
        {...props}>
            {
                typeof children === "string"  ?
                    <Text style={{color:"#ffffff",fontSize:26}}>
                        {children}
                    </Text>
                    : children
            }
        </Pressable>
    )
}



export default Button