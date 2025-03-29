import React from 'react';
import { Image, Dimensions } from 'react-native';
import { TABNAVIGATION } from '../../utils/routes';
import { width } from '../../utils/constants';



const TabIcon = ({ route }) => {

    const iconSize = width * 0.07;

    switch (route.name) {
        case TABNAVIGATION.HOME:
            return <Image source={require('../../assets/icons/cart.png')} style={{ width: iconSize, height: iconSize, resizeMode: 'contain' }} />;
        case TABNAVIGATION.MESSAGES:
            return <Image source={require('../../assets/icons/message.png')} style={{ width: iconSize, height: iconSize, resizeMode: 'contain' }} />;
        case TABNAVIGATION.PROFILE:
            return <Image source={require('../../assets/icons/person.png')} style={{ width: iconSize, height: iconSize, resizeMode: 'contain' }} />;
    }
};

export default TabIcon;
