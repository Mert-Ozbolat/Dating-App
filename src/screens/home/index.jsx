import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import HomeStyle from '../../styles/homeStyle';
import Header from '../../components/home/header';
import Card from '../../components/home/card';
import Discover from '../../components/home/discover';
import Animated, { Easing, withTiming, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';  // reanimated import edildi

const HomeScreen = () => {

    const translateYHeader = useSharedValue(100);
    const translateYDiscover = useSharedValue(100);
    const translateYCard = useSharedValue(100);


    useEffect(() => {
        translateYHeader.value = withTiming(0, { duration: 100, easing: Easing.ease });
        translateYDiscover.value = withTiming(0, { duration: 200, easing: Easing.ease });
        translateYCard.value = withTiming(0, { duration: 400, easing: Easing.ease });
    }, []);

    const animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateYHeader.value }],
        };
    });

    const animatedDiscoverStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateYDiscover.value }],
        };
    });

    const animatedCardStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateYCard.value }],
        };
    });

    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <View style={HomeStyle.headerContainer}>
                <Animated.View style={[animatedHeaderStyle]}>
                    <Header />
                </Animated.View>

                <Animated.View style={[animatedDiscoverStyle]}>
                    <Discover />
                </Animated.View>

                <Animated.View style={[animatedCardStyle]}>
                    <Card />
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
