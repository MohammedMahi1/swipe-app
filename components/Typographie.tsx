import { Text, TextProps } from "react-native"
import { twMerge } from "tailwind-merge"
type TypoProps = {
    children:string,
    align?:"center" | "left" | "right"
} & TextProps


export const H1 = ({children,align="left",...props}:TypoProps)=>{
    return (
        <Text className={twMerge("text-5xl font-bold","text-"+align)} {...props}>
            {children}
        </Text>
    )
}
export const H2 = ({children,align="left",...props}:TypoProps)=>{
    return (
        <Text className={twMerge("text-4xl font-bold","text-"+align)} {...props}>
            {children}
        </Text>
    )
}
export const Span = ({children,align="left",...props}:TypoProps)=>{
    return (
        <Text className={twMerge("text-2xl","text-"+align)} {...props}>
            {children}
        </Text>
    )
}
