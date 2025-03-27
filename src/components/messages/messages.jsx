import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const Messages = ({ item }) => {
    return (
        <View style={styles.section}>
            <View style={styles.messageContainer}>
                <Image source={item.image} style={styles.profileImage} />
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.message}>{item.text}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        flex: 1,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        resizeMode: 'cover',
    },
    name: {
        fontWeight: 'bold',
    },
    message: {
        color: '#555',
    },
});

export default Messages;
