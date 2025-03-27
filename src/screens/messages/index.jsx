import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/colors'
import Input from '../../components/ui/textInput'
import MessagesStyle from '../../styles/messagesStyle'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Actives from '../../components/messages/actives'
import Messages from '../../components/messages/messages'


const MessagesScreen = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <View style={MessagesStyle.search}>
                <Input
                    placeholder="Search"
                    color={Colors.darkGray}
                    backgroundColor={Colors.mediumGray}
                />
            </View>

            <View>
                <Actives />
                <Messages />
            </View>

        </SafeAreaView>
    )
}

export default MessagesScreen