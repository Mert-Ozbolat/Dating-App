import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import HomeStyle from '../../styles/homeStyle';
import Input from '../ui/textInput';
import { Colors } from '../../theme/colors';
import FilterModal from '../modal/filterModal';

const Discover = () => {
    const [isModalVisible, setModalVisible] = useState(false);

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

                <TouchableOpacity
                    style={HomeStyle.filterIcon}
                    onPress={() => setModalVisible(true)}
                >
                    <Image source={require('../../assets/icons/filter.png')} style={HomeStyle.icon} />
                </TouchableOpacity>
            </View>

            <FilterModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
        </View>
    );
}

export default Discover;
