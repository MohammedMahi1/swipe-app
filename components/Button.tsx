import React, { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, useColorScheme, View } from 'react-native'


type ButtonProps = {
    children: ReactNode
} & PressableProps
const Button = ({ children , ...props}: ButtonProps) => {
    const theme = useColorScheme()
    const style = StyleSheet.create({
        button:{
            paddingVertical:20,
            borderRadius:16,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#121212",
            width:"100%"
        }
    })
    return (
        <Pressable
        style={style.button}
        {...props}>
            {
                typeof children === "string" ?
                    <Text style={{color:"#ffffff",fontSize:26}}>
                        {children}
                    </Text>
                    : children
            }
        </Pressable>
    )
}



export default Button