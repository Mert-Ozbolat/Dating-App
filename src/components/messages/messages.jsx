import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import MessagesStyle from '../../styles/messagesStyle';

const Messages = ({ item }) => {
    return (
        <View style={MessagesStyle.messages}>
            <View style={MessagesStyle.messageContainer}>
                <View style={MessagesStyle.messageInfo}>
                    <Image source={item.image} style={MessagesStyle.profileImage} />
                    <View>
                        <Text style={MessagesStyle.name}>{item.name}</Text>
                        <Text style={MessagesStyle.message}>{item.text}</Text>
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

const styles = StyleSheet.create({

});

export default Messages;
