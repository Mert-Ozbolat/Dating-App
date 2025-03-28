import React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import { height, width } from '../../utils/constants';
import { Colors } from '../../theme/colors';

const Input = ({ title, color, backgroundColor, ...props }) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={[styles.input, { color: color, backgroundColor: backgroundColor }]}
                placeholderTextColor={color}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.lightGray,
        width: '100%',
        height: height * 0.05,
        borderRadius: width * 0.08,
        paddingHorizontal: width * 0.05

    },
});

export default Input;