import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';


const ActiveUsers = ({ item }) => {
    return (
        <View style={styles.section}>
            <View style={styles.userContainer}>
                <View style={styles.imageWrapper}>
                    <Image source={item.image} style={styles.userImage} />
                    {item.isActive && <View style={styles.activeIndicator} />}
                </View>
                <Text style={styles.userName}>{item.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.primaryPink,
    },
    userContainer: {
        alignItems: 'center',
        marginRight: 15,
    },
    imageWrapper: {
        position: 'relative',
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    activeIndicator: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: Colors.primaryGreen,
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    userName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ActiveUsers;
