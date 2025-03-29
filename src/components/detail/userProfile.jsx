import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import DetailStyle from '../../styles/detailStyle'
import { useNavigation } from '@react-navigation/native'

const UserProfile = ({ item }) => {

    const navigation = useNavigation()
    return (
        <View style={DetailStyle.profile}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={DetailStyle.goBack}>
                <Image style={DetailStyle.goBackIcon} source={require('../../assets/icons/left-arrow.png')} />
            </TouchableOpacity>
            <Image style={DetailStyle.profileImg} source={item.image} />
        </View>
    )
}

export default UserProfile