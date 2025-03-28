import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeStyle from '../../styles/homeStyle'
import Input from '../ui/textInput'
import { Colors } from '../../theme/colors'

const Discover = () => {
    return (
        <View style={HomeStyle.discoverWrapper}>
            <Text style={HomeStyle.title}>Discover</Text>

            <View style={HomeStyle.searchWrapper}>
                <View style={HomeStyle.searchContainer}>
                    <View style={HomeStyle.inputWrapper}>
                        <Input
                            placeholder="Search.."
                            color={Colors.darkGray}
                            backgroundColor={Colors.lightGray}
                        />
                    </View>
                </View>
                <TouchableOpacity style={HomeStyle.filterIcon}>
                    <Image source={require('../../assets/icons/filter.png')} style={HomeStyle.icon} />
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Discover
