import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

const users = [
    { id: '1', name: 'You', image: require('../../assets/users/men1.jpeg'), isActive: true },
    { id: '2', name: 'Sophia Brown', image: require('../../assets/users/women5.jpeg'), isActive: true },
    { id: '3', name: 'Liam Johnson', image: require('../../assets/users/women7.jpeg'), isActive: true },
    { id: '4', name: 'Emma Davis', image: require('../../assets/users/women6.jpeg'), isActive: true },
    { id: '5', name: 'Noah Smith', image: require('../../assets/users/women8.jpeg'), isActive: true },
];

const Actives = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Actives</Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.userContainer}>
                        <View style={styles.imageWrapper}>
                            <Image source={item.image} style={styles.userImage} />
                            {item.isActive && <View style={styles.activeIndicator} />}
                        </View>
                        <Text style={styles.userName}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 10,
        color: Colors.primaryPink
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

export default Actives;
