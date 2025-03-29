import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Profile from '../../components/profile/profile';
import About from '../../components/profile/about';
import Animated, { Easing, withTiming, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const ProfileScreen = () => {
    const opacityProfile = useSharedValue(0);
    const opacityAbout = useSharedValue(0);

    const translateXProfile = useSharedValue(100);
    const translateXAbout = useSharedValue(100);

    useEffect(() => {
        opacityProfile.value = withTiming(1, { duration: 700, easing: Easing.ease });
        opacityAbout.value = withTiming(1, { duration: 900, easing: Easing.ease });

        translateXProfile.value = withTiming(0, { duration: 700, easing: Easing.ease });
        translateXAbout.value = withTiming(0, { duration: 900, easing: Easing.ease });
    }, []);

    const animatedProfileStyle = useAnimatedStyle(() => {
        return {
            opacity: opacityProfile.value,
            transform: [{ translateX: translateXProfile.value }],
        };
    });

    const animatedAboutStyle = useAnimatedStyle(() => {
        return {
            opacity: opacityAbout.value,
            transform: [{ translateX: translateXAbout.value }],
        };
    });

    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Animated.View style={[animatedProfileStyle]}>
                        <Profile />
                    </Animated.View>
                </View>

                <View>
                    <Animated.View style={[animatedAboutStyle]}>
                        <About />
                    </Animated.View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;
