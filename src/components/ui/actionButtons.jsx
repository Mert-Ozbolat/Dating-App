import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HomeStyle from '../../styles/homeStyle'

const ActionButtons = () => {
    return (
        <View style={HomeStyle.actionsContainer}>
            <TouchableOpacity style={HomeStyle.cancel}>
                <Image style={HomeStyle.icon} source={require('../../assets/icons/cancel.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={HomeStyle.match}>
                <Image style={HomeStyle.matchIcon} source={require('../../assets/icons/heart-fill.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={HomeStyle.star}>
                <Image style={HomeStyle.icon} source={require('../../assets/icons/star.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default ActionButtons