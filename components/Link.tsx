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
        <Link screen={screen} params={params} className='underline !text-[#121212] text-[16px]'>
            {children}
        </Link>
    )
}


export  default Links