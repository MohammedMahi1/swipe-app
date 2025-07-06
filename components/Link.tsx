import { Link, LinkProps } from '@react-navigation/native'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ReactNode } from 'react'
import { Text, useColorScheme, View } from 'react-native'
import { twMerge } from 'tailwind-merge'

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


export  default Links