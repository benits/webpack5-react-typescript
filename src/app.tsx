import { Center, HStack, ReverbUITheme, ThemeProvider, VStack } from "@reverb-ui/react"
import React, { useState } from 'react'

import { CustomButton } from "./components/button"
import { Display } from "./components/display"

const App = () => {
    const [count, setCount] = useState<number>(0)

    const decrementCallback = () => setCount(count - 1)
    const incrementCallback = () => {
        debugger
        setCount(count + 1)
    }

    return(
    <ThemeProvider theme={ReverbUITheme} resetCSS>
        <Center p={6}>
            <VStack spacing={6}>
                <Display value={count}/>
                <HStack spacing={10}>
                    <CustomButton callback={decrementCallback} label="decrement"/>
                    <CustomButton callback={incrementCallback}  label="increment"/>
                </HStack>
            </VStack>
        </Center>
    </ThemeProvider>
)}

export default App