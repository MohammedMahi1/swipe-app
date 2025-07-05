import { Text, TextProps } from "react-native"
type TypoProps = {
    children:string
} & TextProps


export const H1 = ({children,...props}:TypoProps)=>{
    return (
        <Text className="text-5xl font-bold" {...props}>
            {children}
        </Text>
    )
}
