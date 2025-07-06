import Container from 'components/Container'
import { BtnLink } from 'components/Link'
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
                <BtnLink screen='Login' variant="outlined">
                    Already Have one ?
                </BtnLink>
                <BtnLink screen='SignUp'>
                    Make new account
                </BtnLink>
            </View>
        </Container>
    )
}

export default Index