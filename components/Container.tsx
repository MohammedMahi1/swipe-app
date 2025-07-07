
import { ReactNode } from 'react'
import { ScrollView, ScrollViewProps, StyleSheet, View } from 'react-native'


type ContainerProps = ScrollViewProps&{
    children:ReactNode;
    scrollEnabled?:boolean;
} 
const Container = ({children,style,className,scrollEnabled=false,...rest}:ContainerProps) => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled'  contentContainerStyle={{flex:1}} scrollEnabled={scrollEnabled} {...rest} >
      <View style={[StyleContainer.container,style]} className={className} >
        {children}
      </View>
    </ScrollView>
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