import React from 'react';
import { View, Text, Image } from 'react-native';
import MessagesStyle from '../../styles/messagesStyle';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { useTheme } from '../../context/themeContext';

const Messages = ({ item }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <View style={MessagesStyle.messages}>
            <View style={MessagesStyle.messageContainer}>
                <View style={MessagesStyle.messageInfo}>
                    <Image source={item.image} style={MessagesStyle.profileImage} />
                    <View>
                        <Text style={[MessagesStyle.name, theme === 'dark' && defaultScreenStyle.darkText]}>{item.name}</Text>
                        <Text style={[MessagesStyle.message, theme === 'dark' && defaultScreenStyle.darkText]}>{item.text}</Text>
                    </View>
                </View>
                {item.unread > 0 && (
                    <View style={MessagesStyle.unreadBadge}>
                        <Text style={MessagesStyle.unreadText}>{item.unread}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};


export default Messages;
