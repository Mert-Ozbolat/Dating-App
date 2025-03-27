import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import HomeStyle from '../../styles/homeStyle'
import Input from '../ui/textInput';

const Discover = () => {
    const [text, setText] = useState('');
    return (
        <View style={HomeStyle.discoverSection}>
            <Text style={HomeStyle.discoverTitle}>Discover</Text>
            <View style={HomeStyle.searchBarWrapper}>
                <Input
                    title={'Search...'}
                />
                <View style={HomeStyle.filter}>
                    <Image source={require('../../assets/icons/filter.png')} style={HomeStyle.filterIcon} />
                </View>
            </View>
        </View>
    )
}

export default Discover