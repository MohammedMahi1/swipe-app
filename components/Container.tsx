
import { ReactNode } from 'react'
import { StyleSheet, StyleSheetProperties, View, ViewProps } from 'react-native'


type ContainerProps = ViewProps&{
    children:ReactNode;
} 
const Container = ({children,style,...rest}:ContainerProps) => {
  return (
    <View style={[StyleContainer.container,style]} {...rest} >
        {children}
    </View>
  )
}



const StyleContainer = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        paddingVertical:60,
        flex:1
    }
})
export default Container