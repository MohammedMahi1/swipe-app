import Button from 'components/Button'
import Container from 'components/Container'
import { BtnLink } from 'components/Link';
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const img = {uri: 'https://legacy.reactjs.org/logo-og.png'};
const OnBoard = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={require("../assets/on-board-bg-img.png")} resizeMode="cover" style={styles.image}>
          <Container className='gap-20 ' style={{ paddingBottom: 40,flexDirection:"column",justifyContent:"flex-end",alignItems:"center", }}>
            <Text className='text-5xl text-center font-bold'>Your adventure,
            start from now</Text>
            <BtnLink screen='Index'>Get Started</BtnLink>
          </Container>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default OnBoard