import React from 'react';
import { Image } from 'react-native';
import { TABNAVIGATION } from '../../utils/routes';
import { height, width } from '../../utils/constants';


const TabIcon = ({ route, size, color, focused }) => {


    switch (route.name) {
        case TABNAVIGATION.HOME:
            return <Image source={require('../../assets/icons/cart.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
        case TABNAVIGATION.MESSAGES:
            return <Image source={require('../../assets/icons/message.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
        case TABNAVIGATION.PROFILE:
            return <Image source={require('../../assets/icons/person.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
    }
};

export default TabIcon;