import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Profile from '../../components/profile/profile'

import About from '../../components/profile/about'
import ProfileStyle from '../../styles/profileStyle'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Profile />
                </View>
                <View>
                    <About />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen