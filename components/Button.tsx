
import { Link, useNavigation } from '@react-navigation/native';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { twMerge } from 'tailwind-merge';


type ButtonProps = {
    children: ReactNode;
    to?: string;
} & PressableProps & VariantProps<typeof variantsBtn> & VariantProps<typeof sizeBtn>;

const variantsBtn = cva(
    [
        "flex",
        "text-3xl",
        "text-center",
        "py-4 rounded-md",
        "w-full",
        "items-center",
        "justify-center"
    ],
    {
        variants: {
            variant: {
                default: "bg-primary border-4 border-transparent",
                outlined: "bg-[#ffffff] border-4 border-[#121212]"
            },
        },
        defaultVariants: {
            variant: "default",
        }
    }
)
const sizeBtn = cva(
    [],
    {
        variants: {
            size: {
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg",
                xl: "text-xl",
                "2xl": "text-2xl",
                "3xl": "text-3xl",
                "4xl": "text-4xl",
                "5xl": "text-5xl",
                "6xl": "text-6xl",
                "7xl": "text-7xl",
                "8xl": "text-8xl",
                "9xl": "text-9xl"
            }
        },
        defaultVariants: {
            size: "2xl"
        }
    }
)


const Button = ({ children, to, variant, className, size, ...props }: ButtonProps) => {
    const link = useNavigation()
    return (
        <Pressable
            onPress={() => {
                if (to) {
                    // @ts-ignore
                    link.navigate(to)
                }
            }}
            className={twMerge(variantsBtn({ variant }), className)}
            {...props}>
            {
                typeof children === "string" ?
                    <Text className={twMerge('font-semibold  ', variant === "outlined" ? "text-[#121212]" : "text-white", sizeBtn({ size }))}>
                        {children}
                    </Text>
                    :
                    children
            }
        </Pressable>
    )
}



export default Button