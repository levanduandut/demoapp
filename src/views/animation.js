import { View, Text, SafeAreaView, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Anim = () => {
    const topMoniton = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        setTimeout(() => {
            Animated.timing(
                topMoniton,
                {
                    toValue: 400,
                    duration: 2000,
                    useNativeDriver: false,
                    // Di chuyen deu
                    // easing: Easing.linear 

                    // Nhanh Dan
                    // easing: Easing.ease 
                    // easing: Easing.quad
                    // easing: Easing.cubic
                    // easing: Easing.poly(3)

                    //Lui la roi di chuyen
                    // easing: Easing.back(1.2)

                    //Di chuyen voi gia toc
                    // easing: Easing.bezier(.33, .5, .9, .2).

                    //Nay le
                    easing: Easing.bounce


                }
            ).start();
        }, 2000);

    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, borderWidth: 3, borderColor: 'red' }}>
                <Animated.View style={{ marginTop: topMoniton, backgroundColor: 'blue', width: 150, height: 150 }}></Animated.View>

            </View>
        </SafeAreaView>
    )
}

export default Anim