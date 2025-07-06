import { Feather } from '@expo/vector-icons';
import React, { useRef } from 'react'
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native'


type InputProps = {
    label?: string;
    placeholder?: string;
    visible?: boolean;
    autoComplete?: TextInputProps['autoComplete'];
    autoCapitalize?: TextInputProps['autoCapitalize'];
    keyboardType?: TextInputProps['keyboardType'];
    autoFocus?: TextInputProps['autoFocus'];
    maxLength?: TextInputProps['maxLength'];
    onChangeText?: TextInputProps['onChangeText'];
    ref?: React.RefObject<TextInput | null>;
} & TextInputProps;

const Input = ({ label, placeholder, visible, autoComplete, autoCapitalize, keyboardType, autoFocus, maxLength, onChangeText, ref, ...props }: InputProps) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const inRef = ref || useRef<TextInput | null>(null)
    return (
        <>
            {
                visible ?
                    <View className='w-full flex-col gap-2'>
                        {
                            label && <Text>{label}</Text>
                        }
                        <View className='flex-row items-center rounded-md w-full relative'>
                            <TextInput
                                ref={inRef}
                                autoFocus={autoFocus}
                                autoCapitalize={autoCapitalize}
                                autoComplete={autoComplete}
                                keyboardType={keyboardType}
                                maxLength={maxLength}
                                onChangeText={onChangeText}
                                secureTextEntry={isVisible}
                                placeholder={placeholder}
                                className='border-2 flex items-center justify-start p-4 flex-row border-gray-300 rounded-md text-start align-middle text-[18px]  w-full text-black  focus:border-[#121212] focus:outline-none'
                                {...props}
                            />
                            <Pressable onPress={() => setIsVisible(!isVisible)} className='absolute right-5 bg-white '>
                                {isVisible ?
                                    <Feather name="eye-off" size={24} color="black" /> :
                                    <Feather name="eye" size={24} color="black" />}
                            </Pressable>
                        </View>
                    </View>
                    :
                    <View className='w-full flex flex-col gap-2'>
                        {
                            label && <Text>{label}</Text>
                        }
                        <TextInput
                            ref={inRef}
                            autoFocus={autoFocus}
                            autoCapitalize={autoCapitalize}
                            autoComplete={autoComplete}
                            keyboardType={keyboardType}
                            maxLength={maxLength}
                            onChangeText={onChangeText}
                            placeholder={placeholder}
                            className='border-2 p-4  border-gray-300 rounded-md  text-[18px]  w-full text-black  focus:border-[#121212] focus:outline-none'
                            {...props}
                        />

                    </View>
            }
        </>
    )
}
export default Input