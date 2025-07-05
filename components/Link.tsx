import { Link, LinkProps } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'


type LinkPrp = {
    children: ReactNode,
    className ?: string,
    screen : string,
    params ?: any
}
const Links = ({ children, params, screen }: LinkPrp) => {
    return (
        <Link screen={screen} params={params}>
            {children}
        </Link>
    )
}



const BtnLink = ({ children, params, screen }: LinkPrp) => {
    return (
        <Link screen={screen} params={params} className='text-4xl text-center py-6 rounded-[24] bg-[#121212] w-full items-center justify-center flex'>

                {
                    typeof children === "string" ?
                        <Text className='font-semibold text-white'>
                            {children}
                        </Text>
                        :
                        children
                }
        </Link>
    )
}
export { Links, BtnLink }