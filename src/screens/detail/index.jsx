import { ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import UserProfile from '../../components/detail/userProfile';
import UserInfo from '../../components/detail/userInfo';

const Detail = ({ route }) => {

    const { card } = route.params || {};

    return (
        <ScrollView style={defaultScreenStyle.container}>
            <SafeAreaView>
                <UserProfile item={card} />
                <UserInfo item={card} />
            </SafeAreaView>
        </ScrollView>
    );
};

export default Detail;
