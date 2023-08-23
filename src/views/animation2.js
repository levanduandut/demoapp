import { View, Text, SafeAreaView, Animated, Easing, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Anim2 = () => {
    const topMoniton = useRef(new Animated.Value(0)).current;
    const spinValue = useRef(new Animated.Value(0)).current;
    const motion = useRef(new Animated.Value(-200)).current;
    const [isStart, setIsStart] = useState(true);
    const spin = spinValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-45deg', '0deg', '45deg']
    })
    useEffect(() => {
        Animated.timing(
            motion,
            {
                toValue: 200,
                duration: 2000,
                useNativeDriver: false

            }
        )

        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(
                        motion,
                        {
                            toValue: 200,
                            duration: 2000,
                            useNativeDriver: false

                        }
                    ),
                    Animated.timing(
                        spinValue,
                        {
                            toValue: 1,
                            duration: 500,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        spinValue,
                        {
                            toValue: -1,
                            duration: 1000,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        spinValue,
                        {
                            toValue: 0,
                            duration: 500,
                            useNativeDriver: false
                        }
                    )
                ]
                )
            ])
        ).start();
    }, [isStart])
    function clickStartStop(isStart) {
        setIsStart(!isStart);
        if (isStart) {
        }
        else {
            Animated.timing(spinValue).stop();
        }

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, borderWidth: 3, borderColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 6, borderWidth: 2 }}>
                    <Animated.View style={{ transform: [{ rotate: spin }], marginTop: topMoniton, width: 150, height: 150 }}>
                        <Image source={require('../images/bell.webp')} resizeMode='stretch' style={{ width: 150, height: 150 }} />
                    </Animated.View></View>
                <View style={{ flex: 6, borderWidth: 1 }}>
                    <Animated.View style={{
                        position: 'absolute',
                        // bottom: motion,
                    }}>
                        <TouchableOpacity
                            onPress={() => clickStartStop(isStart)}
                            style={{
                                backgroundColor: '#38c741',
                                width: 300,
                                height: 50,
                                borderColor: 'white',
                                borderWidth: 1,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Stop - Start</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default Anim2