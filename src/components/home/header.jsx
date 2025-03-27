import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import HomeStyle from '../../styles/homeStyle'
import Card from './card';

const Header = () => {
    return (
        <View style={HomeStyle.userContainer}>
            <View style={HomeStyle.user}>
                <View style={HomeStyle.userProfile}>
                    <Image source={require('../../assets/users/men1.jpeg')} style={HomeStyle.userImg} />
                </View>
                <View style={HomeStyle.welcomeContainer}>
                    <Text style={HomeStyle.welcome}>Welcome</Text>
                    <Text style={HomeStyle.userName}>Oliver Wilson</Text>
                </View>
            </View>
        </View>

    )
}

export default Header