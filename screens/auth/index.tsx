import Button from 'components/Button'
import Container from 'components/Container'
import { H1, H2 } from 'components/Typographie'
import React from 'react'
import { Text, View } from 'react-native'

const Index = () => {
    return (
        <Container className='py-14 items-center justify-between' style={{ flex: 1 }}>
            <H1>Swiplet</H1>
            <H2 align='center'>
                Discover and shop unique products with just a swipe.
            </H2>
            <View className='w-full gap-4'>
                <Button to="Login" variant="outlined">
                    Already Have one ?
                </Button>
                <Button to="SignUp">
                    Make new account
                </Button>
            </View>

        </Container>
    )
}

export default Index