
import { ReactNode } from 'react'
import { ScrollView, ScrollViewProps, StyleSheet, View } from 'react-native'


type ContainerProps = ScrollViewProps&{
    children:ReactNode;
    
} 
const Container = ({children,style,className,...rest}:ContainerProps) => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled'  contentContainerStyle={{flex:1}} scrollEnabled={false}{...rest} >
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