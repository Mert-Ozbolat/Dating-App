import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Profile from '../../components/profile/profile'

import About from '../../components/profile/about'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <View>
                <Profile />
            </View>
            <View>
                <About />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen