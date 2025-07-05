
import { ReactNode } from 'react'
import { StyleSheet, StyleSheetProperties, View, ViewProps } from 'react-native'


type ContainerProps = {
    children:ReactNode;
} & ViewProps
const Container = ({children,...props}:ContainerProps) => {
  return (
    <View  style={style.container} {...props}>
        {children}
    </View>
  )
}



const style = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        flex:1
    }
})
export default Container