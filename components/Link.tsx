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
type BtnLinkProps = {} & LinkPrp & VariantProps<typeof variantsBtnLink>

const variantsBtnLink = cva(
    [
        "flex",
        "text-3xl",
        "text-center",
        "py-6 rounded-[24]",
        "w-full",
        "items-center",
        "justify-center"
    ],
    {
        variants:{
            variant:{
                default:"bg-primary border-4 border-transparent",
                outlined:"bg-[#ffffff] border-4 border-[#121212]"
            }
        },
        defaultVariants:{
            variant:"default"
        }
    }
) 


const Links = ({ children, params, screen }: LinkPrp) => {
    return (
        <Link screen={screen} params={params}>
            {children}
        </Link>
    )
}



const BtnLink = ({ children, params, screen,variant }: BtnLinkProps) => {

    
    return (
        <Link screen={screen} params={params} className={twMerge(variantsBtnLink({variant}))}>

                {
                    typeof children === "string" ?
                        <Text className={twMerge('font-semibold ',variant === "outlined"? "text-[#121212]":"text-white" )}>
                            {children}
                        </Text>
                        :
                        children
                }
        </Link>
    )
}
export { Links, BtnLink }