import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import MessagesStyle from '../../styles/messagesStyle';
import { useTheme } from '../../context/themeContext';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';


const ActiveUsers = ({ item }) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <View style={MessagesStyle.section}>
            <View style={MessagesStyle.userContainer}>
                <View style={MessagesStyle.imageWrapper}>
                    <Image source={item?.image} style={MessagesStyle.userImage} />
                    {item.isActive && <View style={MessagesStyle.activeIndicator} />}
                </View>
                <Text style={[MessagesStyle.userName, theme === 'dark' && defaultScreenStyle.darkText]}>{item.name}</Text>
            </View>
        </View>
    );
};

export default ActiveUsers;
