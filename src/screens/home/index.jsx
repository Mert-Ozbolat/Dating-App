import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import HomeStyle from '../../styles/homeStyle'
import Header from '../../components/home/header'
import Card from '../../components/home/card'
import Discover from '../../components/home/discover'

const HomeScreen = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <View style={HomeStyle.headerContainer}>
                <View>
                    <Header />
                </View>

                <View>
                    <Discover />
                </View>

                <View style={{ backgroundColor: 'blue', }}>
                    <Card />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default HomeScreen
